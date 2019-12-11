import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Config } from './config';
import { Values } from './values';
import { URLSearchParams } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { HTTP } from '@ionic-native/http';


@Injectable()
export class Service {
    data: any;
    categories: any;
    banners: any;
    orders: any;
    order: any;
    // email: any;
    reorder: any;
    isloggedIn: any;
    status: any;
    address: any;
    products: any;
    product: any;
    cart: any;
    configuration: any;
    loader: any;
    loginStatus: any;
    mainCategories: any;
    country: any;
    user: any;
    login_nonce: any;
    dir: any = 'left';
    filter: any = {};
    options: any = {};
    options2: any = {};
    has_more_items: boolean = true;
    blocks: any = [];
    constructor(private reqhttp: HTTP, private http: Http, private config: Config, private values: Values, public loadingCtrl: LoadingController, private nativeStorage: NativeStorage) {
        this.mainCategories = [];
        this.filter.page = 1;
    }
    load() {
        return new Promise(resolve => {
            this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-keys').map(res => res.json()).subscribe(data => {
                this.getCategories(1);
                this.values.data = data;
                this.values.settings = data.settings;
                this.blocks = data.blocks;
                for (let item in this.blocks) {
                    var filter;
                    if (this.blocks[item].block_type == 'product_block') {
                        if(this.blocks[item].filter_by == 'tag')
                        filter = {tag: this.blocks[item].link_id, status: 'publish'};
                        else filter = {category: this.blocks[item].link_id, status: 'publish'};
                        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter)).map(res => res.json()).subscribe(data => {
                            this.blocks[item].products = data;
                        });
                    }
                    if (this.blocks[item].block_type == 'flash_sale_block') {
                        if(this.blocks[item].filter_by == 'tag')
                        filter = {tag: this.blocks[item].link_id, status: 'publish'};
                        else filter = {category: this.blocks[item].link_id, status: 'publish'};
                        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter)).map(res => res.json()).subscribe(data => {
                            this.blocks[item].products = data;
                        });
                        this.blocks[item].interval = setInterval(() => {
                        var countDownDate = new Date(this.blocks[item].sale_ends).getTime();
                            var now = new Date().getTime();
                            var distance = countDownDate - now;
                            this.blocks[item].days = Math.floor(distance / (1000 * 60 * 60 * 24));
                            this.blocks[item].hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            this.blocks[item].minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            this.blocks[item].seconds = Math.floor((distance % (1000 * 60)) / 1000);
                            if (distance < 0) {
                                clearInterval(this.blocks[item].interval);
                                this.blocks[item].hide = true;
                            }
                        }, 1000);
                    }
                }
                this.values.currency = data.currency;
                this.login_nonce = data.login_nonce;
                if (data.user && data.user.data != undefined) {
                    this.values.isLoggedIn = data.user.data.status;
                    this.values.customerId = data.user.data.ID;
                    this.values.customerName = data.user.data.display_name;
                    //this.values.avatar = data.user.data.avatar_url;
                    this.values.logoutUrl = this.encodeUrl(data.user.data.url);
                    this.nativeStorage.getItem('loginData').then(data => {
                        if (data.type == 'social') {
                            this.values.customerName = data.displayName;
                            //this.values.avatar = data.avatar;
                        }
                    }, error => console.error(error));
                } else {
                    this.nativeStorage.getItem('loginData').then(data => {
                        if (data.type == 'woo') {
                            this.login(data);
                        } else if (data.type == 'social') {
                            this.values.customerName = data.displayName;
                        }
                    }, error => console.error(error));
                }
                this.nativeStorage.setItem('blocks', data).then(data => {}, error => console.error(error));
                this.nativeStorage.getItem('loginData').then(data => this.login(data), error => console.error(error));
                this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart').map(res => res.json()).subscribe(data => {
                    this.cart = data;
                    this.values.cartNonce = data.cart_nonce;
                    this.values.updateCart(this.cart);
                });
                resolve(true);
            });
        });
    }
    getCategories(page){
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v2/products/categories?', {
            per_page: 100, page: page
        })).map(res => res.json()).subscribe(data => {
            if(page == 1)
                this.categories = data;
            else {
                this.categories.push.apply( this.categories, data );
            }   
            if(data.length == 100)
                this.getCategories(page + 1);
            else {
                this.categories = this.categories.filter(item => item.name !== 'Uncategorized');
                this.categories = this.categories.filter(item => item.name !== 'Promosi');
                this.mainCategories = this.categories.filter(item => item.parent === 0);
                this.nativeStorage.setItem('categories', this.categories).then(data => {}, error => console.error(error)); 
            }    
        }, err => {
                console.log(err)
            });     
    }
    getNonce() {
        return new Promise(resolve => {
            this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce', this.config.options).map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }
    login(loginData) {
        var params = new URLSearchParams();
        params.append("username", loginData.username);
        params.append("password", loginData.password);
        params.append("_wpnonce", this.login_nonce);
        params.append("login", 'Login');
        params.append("redirect", this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata');
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-login', params, this.config.options).map(res => res.json()).subscribe(data => {
                if (!data.errors) {
                    this.values.isLoggedIn = data.data.status;
                    this.values.customerName = data.data.display_name;
                    this.values.customerId = data.data.ID;
                    this.values.logoutUrl = this.encodeUrl(data.data.url);
                    params = new URLSearchParams();
                    params.append("customer_id", this.values.customerId.toString());
                    this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, this.config.options).map(res => res.json()).subscribe(data => {
                        for (let item in data) {
                            this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                    this.nativeStorage.setItem('loginData', {
                        username: loginData.username,
                        password: loginData.password
                    }).then(data => {}, error => console.error(error));
                }
                resolve(data);
            }, err => {
                resolve(JSON.parse(err._body))
            });
        });
    }
    encodeUrl(href) {
        return href.replace(/&amp;/g, '&')
    }
    logout() {
        return new Promise(resolve => {
            this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-logout', this.config.options).subscribe(data => {
                this.values.isLoggedIn = false;
                this.values.customerName = "";
                this.nativeStorage.setItem('loginData', {}).then(data => {}, error => console.error(error));
                this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', this.config.options).map(res => res.json()).subscribe(data => {
                    this.cart = data;
                    this.values.updateCart(this.cart);
                });
                resolve(this.cart);
            });
        });
    }
    passwordreset(email, nonce, url) {
        var params = new URLSearchParams();
        params.append("user_login", email);
        params.append("wc_reset_password", "true");
        params.append("_wpnonce", nonce);
        params.append("_wp_http_referer", '/my-account/lost-password/');
        return new Promise(resolve => {
            this.http.post(this.config.url + '/my-account/lost-password/', params).subscribe(status => {
                resolve(status);
            });
        });
    }
    passwordResetNonce() {
        return new Promise(resolve => {
            this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-passwordreset', this.config.options).map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }
    getAddress() {
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/customers/' + this.values.customerId + '?', false), this.config.options).map(res => res.json()).subscribe(data => {
                this.address = data;
                resolve(this.address);
            });
        });
    }
    saveAddress(address) {
        var params = {
            customer: address
        };
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(resolve => {
            this.reqhttp.put(this.config.setUrl('PUT', '/wp-json/wc/v3/customers/' + this.values.customerId + '?', false), params, {}).then(data => {
                resolve(JSON.parse(data.data));
            });
        });
    }
    pushNotification(notification) {
        var params = new URLSearchParams();
        params.append("device_id", notification.device_id);
        params.append("platform", notification.platform);
        params.append("email", notification.email);
        params.append("city", notification.city);
        params.append("state", notification.state);
        params.append("country", notification.country);
        params.append("pincode", notification.pincode);
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, this.config.options).map(res => res.json()).subscribe(data => {
                this.status = data;
                resolve(this.status);
            });
        });
    }
    pushNotify(deviceId, platform) {
        var params = new URLSearchParams();
        params.append("device_id", deviceId);
        params.append("platform", platform);
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, this.config.options).map(res => res.json()).subscribe(data => {
                this.status = data;
                resolve(this.status);
            });
        });
    }
    getOrder(id) {
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/orders/' + id + '?', false), this.config.options).map(res => res.json()).subscribe(data => {
                this.order = data;
                resolve(this.order);
            });
        });
    }
    getCountry() {
        return new Promise(resolve => {
            this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_country', this.config.options).map(res => res.json()).subscribe(data => {
                this.country = data;
                resolve(this.country);
            });
        });
    }
    registerCustomer(customer) {
        var params = {
            customer: customer,
            email: customer.email,
            password: customer.password,
            referral: customer.referral,
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.options.withCredentials = true;
        this.options.headers = headers;
        return new Promise(resolve => {
            this.http.post(this.config.setUrl('POST', '/wp-json/wc/v1/customers?', false), params, this.options).map(res => res.json()).subscribe(data => {
                this.user = data;
                resolve(this.user);
                alert("Account Created! Kindly check your email for more information");
            }, err => {
                alert("Opss! You've already registered with this email!");
                resolve(err.json())
            });
        });
    }
    getOrders(filter) {
        // this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/customers/' + filter.customer_id + '?', 'consumer_key=ck_d3e62fbfab4308dbff89321bf6d8f0bc58cd85a4&consumer_secret=cs_5d98d4ab1c579ee04482846ca18b00f2cf731c71'), this.config.options).map(res => res.json()).subscribe(datas => {
        //     this.email = datas.email;
        // });
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/orders?', filter), this.config.options).map(res => res.json()).subscribe(data => {
                this.reorder = data;
                // console.log(data);
                this.orders = [];
                this.reorder.forEach(values => {
                    if (values.customer_id == filter.customer_id) {
                        this.orders.push(values);
                        resolve(this.orders);
                    } else {
                        resolve(this.orders);
                    }
                });
            });
        });
    }
    updateOrder(data, id) {
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(resolve => {
            this.reqhttp.put(this.config.setUrl('PUT', '/wp-json/wc/v3/orders/' + id + '?', false), data, {}).then(data => {
                this.status = JSON.parse(data.data);
                resolve(this.status);
            }, err => {
                resolve(JSON.parse(err.error))
            });
        });
    }
    presentLoading(text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    }
    dismissLoading() {
        this.loader.dismiss();
    }
    getPage(id: any) {
        var params = new URLSearchParams();
        params.append("page_id", id);
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-page_content', params, this.config.options).map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }
    // Add MemberPromo Product ID To Prevent It To Display Inside Home Screen
    getProducts() {
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products?exclude=5377,5456,5457,5458,7853,7852,7956,7955,5378&', false), this.config.options).map(res => res.json()).subscribe(data => {
            this.products = data;
        });
    }
    loadMore() {
        this.filter.page += 1;
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products?exclude=5377,5456,5457,5458,7853,7852,7956,7955,5378&', this.filter), this.config.options).map(res => res.json()).subscribe(data => {
                this.handleMore(data);
                resolve(true);
            });
        });
    }
    handleMore(results) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            };
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
    }
    addToWishlist(id) {
        return new Promise(resolve => {
            var params = new URLSearchParams();
            params.append("product_id", id);
            params.append("customer_id", this.values.customerId.toString());
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, this.config.options).subscribe(data => {
                this.status = data;
                resolve(this.status);
            });
        });
    }
    deleteItem(id) {
        var params = new URLSearchParams();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, this.config.options).map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }
    subscribeNotification(data) {
        var params = new URLSearchParams();
        params.append("onesignal_user_id", data.userId);
        params.append("onesignal_push_token", data.pushToken);
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_user_notification', params, this.config.options).map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }
}
