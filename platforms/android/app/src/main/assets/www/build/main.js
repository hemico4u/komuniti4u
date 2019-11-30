webpackJsonp([3],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Values = /** @class */ (function () {
    function Values() {
        this.count = 0;
        this.filter = 10;
        this.isLoggedIn = false;
        this.customerName = "";
        this.customerId = null;
        this.listview = false;
        this.cart = [];
        this.filterUpdate = false;
        this.avatar = "assets/image/logo.png";
        this.currency = "USD";
        this.dir = 'left';
        this.wishlistId = [];
        this.dimensions = { imageGridViewHeight: 100, imageProductViewHeight: 100, scrollProductHeight: 100, productSliderWidth: 42 };
        this.settings = { "show_featured": "1", "show_onsale": "1", "show_latest": "1", "pull_to_refresh": "1", "onesignal_app_id": "b9af164b-0566-4804-b5c8-6844cc8755ac", "google_project_id": "575406525034", "google_web_client_id": "575406529046-r69ss57ceip6vv9mm858qh2hg3j0sl7u.apps.googleusercontent.com", "rate_app_ios_id": "", "rate_app_android_id": "https://play.google.com/store/apps/details?id=com.mstore.premiumtheme001&hl=en", "rate_app_windows_id": "", "share_app_android_link": "https://play.google.com/store/apps/details?id=com.mstore.premiumtheme001&hl=en", "share_app_ios_link": "https://play.google.com/store/apps/details?id=com.mstore.premiumtheme001&hl=en", "support_email": "support@example.com", "image_height": "100", "product_slider_width": "42", "enable_product_chat": "", "enable_home_chat": "", "whatsapp_number": "+91XXXXXXXX", "app_dir": "left", "language": "english" };
        this.filter = {};
        this.logoutUrl = "";
    }
    Values.prototype.updateCart = function (crt) {
        this.cartItem = crt.cart_contents;
        this.cart = [];
        this.count = 0;
        for (var item in crt.cart_contents) {
            this.cart[crt.cart_contents[item].product_id] = parseInt(crt.cart_contents[item].quantity);
            this.count += parseInt(crt.cart_contents[item].quantity);
        }
    };
    Values.prototype.updateCartTwo = function (crt) {
        this.cart = [];
        this.count = 0;
        this.cartItem = crt;
        for (var item in crt) {
            this.cart[crt[item].product_id] = parseInt(crt[item].quantity);
            this.count += parseInt(crt[item].quantity);
        }
    };
    Values.prototype.calc = function (width) {
        var devide = this.getDevide(width);
        this.dimensions.imageGridViewHeight = this.settings.image_height / 100 * (width / devide);
        if (width >= 769) {
            this.dimensions.productSliderWidth = this.settings.product_slider_width * 0.7;
            this.dimensions.productSliderHeight = this.settings.imageGridViewHeight * 0.6;
            this.dimensions.imageProductViewHeight = (this.settings.image_height / 100 * 0.6) * width;
        }
        else {
            this.dimensions.imageProductViewHeight = this.settings.image_height / 100 * width;
            this.dimensions.productSliderWidth = this.settings.product_slider_width;
        }
        this.dimensions.productSliderHeight = this.settings.imageGridViewHeight * 0.6;
        this.dimensions.scrollProductHeight = this.settings.image_height / 100 * (width * this.dimensions.productSliderWidth / 100);
        this.dimensions.imageListViewHeight = (this.settings.image_height / 100 * 11);
    };
    Values.prototype.getDevide = function (width) {
        if (width >= 1025) {
            return 5;
        }
        if (width >= 769) {
            return 4;
        }
        if (width >= 481) {
            return 3;
        }
        else {
            return 2;
        }
    };
    Values = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Values);
    return Values;
}());

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutService = /** @class */ (function () {
    function CheckoutService(http, config) {
        this.http = http;
        this.config = config;
    }
    CheckoutService.prototype.updateOrderReview = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("security", form.nonce.update_order_review_nonce);
        params.append("payment_method", form.payment_method);
        params.append("address", form.billing_address_1);
        params.append("address_2", form.billing_address_2);
        params.append("city", form.billing_city);
        params.append("postcode", form.billing_postcode);
        params.append("country", form.billing_country);
        params.append("state", form.billing_state);
        params.append("s_address", form.billing_address_1);
        params.append("s_address_2", form.billing_address_2);
        params.append("s_city", form.billing_city);
        params.append("s_postcode", form.billing_postcode);
        params.append("s_country", form.billing_country);
        params.append("s_state", form.billing_state);
        params.append("shipping_method[0]", form.shipping_method);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkout = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        if (form.onesignal_user_id)
            params.append("onesignal_user_id", form.onesignal_user_id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkouttest = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", "Name hajsk");
        params.append("billing_last_name", "Name hajsk");
        params.append("billing_company", "Name hajsk");
        params.append("billing_email", "test@gmail.com");
        params.append("billing_phone", "237648372");
        params.append("billing_address_1", "form billing_address_1");
        params.append("billing_address_2", "dsjfh sdjfhsdkj");
        params.append("billing_city", "fsdfdjgif");
        params.append("billing_postcode", "560048");
        params.append("billing_country", "IN");
        params.append("billing_state", "KA");
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveBillingAddress = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.nonce.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("createaccount", form.billing_address_1);
        params.append("account_password", form.billing_address_2);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", "544bcd0d1d");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveShippingAddress = function (shipping) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping[firstname]", shipping.firstname);
        params.append("shipping[lastname]", shipping.lastname);
        params.append("shipping[company]", shipping.company);
        params.append("shipping[street][0]", shipping.street1);
        params.append("shipping[street][1]", shipping.street2);
        params.append("shipping[city]", shipping.city);
        params.append("shipping[postcode]", shipping.postcode);
        params.append("shipping[country_id]", shipping.country_id);
        params.append("shipping[state_id]", shipping.state_id);
        if (shipping.entity_id) {
            params.append("shipping_address_id", shipping.entity_id);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getShippingPayment = function () {
        var _this = this;
        if (this.shippingMethods && this.paymentMethods) {
            return Promise.resolve(this.shippingMethods);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingMethods = data[0];
                _this.paymentMethods = data[1];
                resolve(_this.shippingMethods);
            });
        });
    };
    CheckoutService.prototype.saveMethods = function (shippingMethod, payment) {
        var _this = this;
        var shipping = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        shipping.append("shipping_method", shippingMethod);
        for (var param in payment) {
            params.set("payment[" + param + "]", payment[param]);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', params, _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingStatus = data[0];
                _this.paymentStatus = data[1];
                resolve(_this.shippingStatus);
            });
        });
    };
    CheckoutService.prototype.getTime = function (date) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_slots_on_date");
        params.append("date", date);
        console.log(params);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getDate = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_upcoming_bookable_dates");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.login = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", form.username);
        params.append("password", form.password);
        params.append("_wpnonce", form.checkout_login);
        params.append("login", "Login");
        params.append("_wp_http_referer", "/checkout/");
        params.append("redirect", this.config.url + "/wp-admin/admin-ajax.php?action=mstoreapp-userdata");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout/', params, _this.config.options)
                .subscribe(function (data) {
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.status = data;
                    resolve(_this.status);
                });
            });
        });
    };
    CheckoutService.prototype.submitCoupon = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", form.coupon_code);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getStripeToken = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("key", form.payment.stripe.publishable_key);
        params.append("payment_user_agent", 'stripe.js/6ea8d55');
        params.append("card[number]", form.stripe_number);
        params.append("card[cvc]", form.stripe_code);
        params.append("card[exp_month]", form.stripe_exp_month);
        params.append("card[exp_year]", form.stripe_exp_year);
        params.append("card[name]", form.billing_first_name + form.billing_last_name);
        params.append("card[address_line1]", form.billing_address_1);
        params.append("card[address_line2]", form.billing_address_2);
        params.append("card[address_state]", form.billing_state);
        params.append("card[address_city]", form.billing_city);
        params.append("card[address_zip]", form.billing_postcode);
        params.append("card[address_country]", form.billing_country);
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/tokens', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) { return resolve(err.json()); });
        });
    };
    CheckoutService.prototype.stripePlaceOrder = function (form, token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        if (form.onesignal_user_id)
            params.append("onesignal_user_id", form.onesignal_user_id);
        params.append("wc-stripe-payment-token", 'new');
        params.append("stripe_token", token.id);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getOrderSummary = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/orders/' + id + '?', false), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orderSummary = data;
                resolve(_this.orderSummary);
            });
        });
    };
    CheckoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], CheckoutService);
    return CheckoutService;
}());

//# sourceMappingURL=checkout-service.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderSummary = /** @class */ (function () {
    function OrderSummary(nav, service, params, functions, values) {
        this.nav = nav;
        this.service = service;
        this.params = params;
        this.functions = functions;
        this.values = values;
        this.id = params.data;
    }
    OrderSummary.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.service.getOrderSummary(this.id)
            .then(function (results) { return _this.orderSummary = results; });
    };
    OrderSummary.prototype.Continue = function () {
        this.values.count = 0;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
    };
    OrderSummary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\checkout\order-summary\order-summary.html"*/'<ion-header>\n\n    <ion-navbar color="header" hideBackButton> <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n        <ion-title>{{"Order Summary" | translate}} </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="order-summary">\n\n    <ion-spinner *ngIf="!orderSummary" name="crescent"> </ion-spinner>\n\n    <div *ngIf="orderSummary" class="margin">\n\n        <ion-card>\n\n            <ion-card-header style="background-color: #f5f5f5">\n\n                <h2>{{"Order Received" | translate}} </h2>\n\n                <h3>{{"Thank you. Your order has been received" | translate}} </h3>\n\n            </ion-card-header>\n\n            <div *ngIf="orderSummary" class="summary">\n\n                <ion-item no-lines>\n\n                    <h2>{{"Order Number" | translate}} : {{orderSummary.number}} </h2>\n\n                    <h2>{{"Order date" | translate}} : {{orderSummary.date_created | date:\'MMM d, y hh:mm a\'}} </h2>\n\n                    <h2>{{"Total" | translate}} : {{1*orderSummary.total | currency:values.currency:true:\'1.2-2\'}} </h2>\n\n                    <h2>{{"Payment Method" | translate}} : {{orderSummary.payment_method_title}} </h2>\n\n                    <div *ngFor="let item of orderSummary.shipping_lines | keys">\n\n                        <h2>{{"Shipping" | translate}} : {{item.value.method_title}} </h2>\n\n                    </div>\n\n                </ion-item>\n\n            </div>\n\n        </ion-card>\n\n        <ion-card>\n\n            <ion-card-header style="background-color: #f5f5f5">\n\n                <ion-label class="side-header">{{"Order Details" | translate}} </ion-label>\n\n            </ion-card-header>\n\n            <div class="order-details">\n\n                <!--ion-item no-lines>\n\n          <ion-label class="side-header">{{"Order Details" | translate}}\n\n          </ion-label>\n\n        </ion-item-->\n\n                <div *ngFor="let item of orderSummary.line_items | keys">\n\n                    <ion-row>\n\n                        <ion-col col-8>\n\n                            <ion-label no-margin>{{item.value.name}} x {{item.value.quantity}} </ion-label>\n\n                        </ion-col>\n\n                        <ion-col col class="text-right">\n\n                            <ion-label no-margin>{{1*item.value.subtotal | currency:values.currency:true:\'1.2-2\' }} </ion-label>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </div>\n\n                <ion-row *ngIf="orderSummary.coupon_lines.length != 0">\n\n                    <ion-col col-8>\n\n                        <ion-label no-margin>{{"coupon" | translate}} </ion-label>\n\n                    </ion-col>\n\n                    <ion-col class="text-right">\n\n                        <ion-label no-margin>{{1*orderSummary.discount_total | currency:values.currency:true:\'1.2-2\' }} </ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-8>\n\n                        <ion-label no-margin>{{"Shipping Total" | translate}} </ion-label>\n\n                    </ion-col>\n\n                    <ion-col class="text-right">\n\n                        <ion-label no-margin>{{1*orderSummary.shipping_total | currency:values.currency:true:\'1.2-2\' }} </ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row *ngIf="!orderSummary.shipping_tax == 0">\n\n                    <ion-col col-8>\n\n                        <ion-label no-margin>{{"Shipping Tax" | translate}} </ion-label>\n\n                    </ion-col>\n\n                    <ion-col class="text-right">\n\n                        <ion-label no-margin>{{1*orderSummary.shipping_tax | currency:values.currency:true:\'1.2-2\' }} </ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-8>\n\n                        <ion-label no-margin>{{"Total Tax" | translate}} </ion-label>\n\n                    </ion-col>\n\n                    <ion-col class="text-right">\n\n                        <ion-label no-margin>{{1*orderSummary.total_tax | currency:values.currency:true:\'1.2-2\' }} </ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row class="order-total">\n\n                    <ion-col col-8>\n\n                        <ion-label class="side-header"><b>{{"Total" |translate}}</b> </ion-label>\n\n                    </ion-col>\n\n                    <ion-col class="text-right">\n\n                        <ion-label> <b>{{1*orderSummary.total | currency:values.currency:true:\'1.2-2\' }}\n\n              </b> </ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-card>\n\n        <div class="continue-button"> <button ion-button full color="button-color" no-padding no-margin text-uppercase (click)="Continue()">\n\n          {{"Continue" | translate}}\n\n        </button> </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\checkout\order-summary\order-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], OrderSummary);
    return OrderSummary;
}());

//# sourceMappingURL=order-summary.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductService = /** @class */ (function () {
    function ProductService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/' + id + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.product = data;
                resolve(_this.product);
            });
        });
    };
    ProductService.prototype.getReviews = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/' + id + '/reviews/' + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reviews = data;
                resolve(_this.reviews);
            });
        });
    };
    ProductService.prototype.getRelatedProducts = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.related = data;
                resolve(_this.related);
            });
        });
    };
    ProductService.prototype.getUpsellProducts = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.upsell = data;
                resolve(_this.upsell);
            });
        });
    };
    ProductService.prototype.getCrossSellProducts = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.crossSell = data;
                resolve(_this.crossSell);
            });
        });
    };
    ProductService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    ProductService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    ProductService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService.prototype.submitComment = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("rating", form.rating);
        params.append("comment", form.comment);
        if (!this.values.isLoggedIn) {
            params.append("author", form.author);
            params.append("email", form.email);
        }
        params.append("comment_post_ID", form.id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-comments-post.php', params).subscribe(function (data) {
                resolve(true);
            });
        });
    };
    ProductService.prototype.getVariationProducts = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/' + id + '/variations' + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* LoadingController */]])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = /** @class */ (function () {
    function SearchPage(nav, service, values, params) {
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.has_more_items = true;
        this.page = 1;
        this.shouldShowCancel = true;
        this.showSearch = true;
        this.filter = {};
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.quantity = "1";
        this.myInput = "";
    }
    SearchPage.prototype.ionViewWillLeave = function () {
        this.showSearch = false;
    };
    SearchPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    SearchPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter['filter[q]'] = $event.srcElement.value;
        this.values.filter = {};
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.products = results; });
    };
    SearchPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    SearchPage.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], item);
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page += 1;
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    SearchPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    SearchPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id)
            .then(function (results) { return _this.status = results; });
    };
    SearchPage.prototype.addToCart = function (id) {
        var _this = this;
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            text += '"' + res[0] + '":"' + res[1] + '",';
        }
        text += '"product_id":"' + id + '",';
        text += '"quantity":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        this.service.addToCart(obj)
            .then(function (results) { return _this.updateCart(results); });
    };
    SearchPage.prototype.updateCart = function (a) {
    };
    SearchPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    SearchPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    SearchPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id)
            .then(function (results) { return _this.status = results; });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-searchbar\n\n      *ngIf="showSearch"\n\n     [(ngModel)]="myInput"\n\n     [showCancelButton]="shouldShowCancel"\n\n     (ionInput)="onInput($event)"\n\n     (ionCancel)="onCancel($event)">\n\n    </ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="search">\n\n\n\n  <div *ngIf="products" class="products-search">     \n\n      <h2 *ngIf="!products?.length" style="font-size: 15px;text-align: center;margin-top: 30px">No products found!.</h2>\n\n    <div *ngIf="products?.length">\n\n      <div *ngIf="values.listview">\n\n        <ion-item no-lines class="item-name">\n\n          <ion-label text-uppercase>{{"Products" | translate}}\n\n          </ion-label>\n\n          <button ion-button icon-only item-right clear color="button-color" (click)="setGridView()">\n\n            <ion-icon ios="ios-grid" md="md-grid">\n\n            </ion-icon>\n\n          </button>\n\n        </ion-item>\n\n        <ion-list *ngIf="products">\n\n          <div class="item-list" *ngFor="let item of products">\n\n            <ion-item no-lines class="price-list" >\n\n              <ion-thumbnail item-left class="stock-list">\n\n                <a (click)="getProduct(item)">\n\n                  <img [style.height.rem]="values.dimensions.imageListViewHeight" src="{{item.images[0].src}}">\n\n                  <button ion-button color="danger" *ngIf="item.stock_status == \'outofstock\'">{{"OUTOFSTOCK" | translate}}\n\n                  </button>\n\n                </a>\n\n              </ion-thumbnail> \n\n              <a (click)="getProduct(item)">\n\n                <div class="product-name-top">\n\n                  <h2>{{item.name}}\n\n                  </h2>\n\n                  <p class="max-lines" [innerHTML]="item.description">\n\n                  </p>\n\n                </div>\n\n                <div class="bottom-left">\n\n                  <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n                  <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n                  <h3 class="price-del" *ngIf="item.sale_price">\n\n                    <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </del>\n\n                  </h3>\n\n                </div>\n\n              </a>\n\n              <div class="bottom-right-button">\n\n                <button ion-button text-uppercase color="button-color" item-right outline *ngIf="item.stock_status != \'outofstock\' && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                  {{"Add" | translate}}\n\n                </button>\n\n                <button ion-button icon-only  item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n\n                  <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n\n                  </ion-icon>\n\n                </button>\n\n                <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                </button>\n\n                <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n\n                  <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n\n                  </ion-icon>\n\n                </button>\n\n                <button ion-button text-uppercase color="button-color" item-right [disabled]=\'disableSubmit\' clear *ngIf="!item.in_stock && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                  {{button}}\n\n                </button>\n\n              </div>\n\n            </ion-item>\n\n          </div>\n\n        </ion-list>\n\n      </div>\n\n      <div *ngIf="!values.listview">\n\n        <ion-item no-lines class="item-name">\n\n          <ion-label text-uppercase>{{"Products" | translate}}\n\n          </ion-label>\n\n          <button ion-button icon-only item-right clear color="button-color" (click)="setListView()">\n\n            <ion-icon ios="ios-list-box" md="ios-list-box">\n\n            </ion-icon>\n\n          </button>\n\n        </ion-item>\n\n        <div class="card-background-page grid" *ngIf="products">\n\n          <ion-row class="row unlimited-items">\n\n            <ion-col class="col" *ngFor="let item of products">\n\n              <ion-card>\n\n                <ion-card-content class="stock">\n\n                  <a (click)="getProduct(item)">\n\n                    <img [style.height.px]="values.dimensions.imageGridViewHeight" src="{{item.images[0].src}}">\n\n                    <button ion-button color="danger" *ngIf="item.stock_status == \'outofstock\'">{{"OUTOFSTOCK" | translate}}\n\n                    </button>\n\n                  </a>\n\n                </ion-card-content>\n\n                <ion-label class="product-label">{{item.name}}\n\n                </ion-label>\n\n                <ion-item no-padding class="price-list">\n\n                  <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n                  <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n                  <h3 class="price-delete" *ngIf="item.sale_price">\n\n                    <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </del>\n\n                  </h3>\n\n                  <button ion-button text-uppercase color="button-color" item-right [disabled]=\'disableSubmit\' clear *ngIf="item.stock_status != \'outofstock\' && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                    {{button}}\n\n                  </button>\n\n                  <button ion-button text-uppercase color="button-color" item-right clear *ngIf="item.stock_status != \'outofstock\' && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                    {{"Add" | translate}}\n\n                  </button>\n\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n\n                    <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n\n                    </ion-icon>\n\n                  </button>\n\n                  <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                  </button>\n\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n\n                    <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n\n                    </ion-icon>\n\n                  </button>\n\n                </ion-item>\n\n              </ion-card>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </div>\n\n    </div>    \n\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n    <ion-infinite-scroll-content\n\n       loadingSpinner="crescent"\n\n       loadingText="{{\'Loading more items..\' | translate}}">\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountRegister = /** @class */ (function () {
    function AccountRegister(nav, service, functions, oneSignal, values, platform) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.oneSignal = oneSignal;
        this.values = values;
        this.platform = platform;
        this.disableSubmit = false;
        this.Register = "Register";
        this.registerData = {};
        this.countries = {};
        this.registerData.billing_address = {};
        this.registerData.shipping_address = {};
        this.service.getNonce()
            .then(function (results) { return _this.handleResults(results); });
    }
    AccountRegister.prototype.handleResults = function (results) {
        this.countries = results;
    };
    AccountRegister.prototype.getBillingRegion = function (countryId) {
        this.billing_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.validateForm = function () {
        /* if (this.registerData.first_name == undefined || this.registerData.firstname == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false
        }
        if (this.registerData.last_name == undefined || this.registerData.lastname == "") {
            this.functions.showAlert("ERROR", "Please Enter Last Name ");
            return false
        } */
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false;
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false;
        }
        this.registerData.username = this.registerData.email;
        this.registerData.billing_address.email = this.registerData.email;
        this.registerData.billing_address.first_name = this.registerData.first_name;
        this.registerData.billing_address.last_name = this.registerData.last_name;
        this.registerData.shipping_address.first_name = this.registerData.first_name;
        this.registerData.shipping_address.last_name = this.registerData.last_name;
        this.registerData.shipping_address.company = this.registerData.billing_address.company;
        this.registerData.shipping_address.address_1 = this.registerData.billing_address.address_1;
        this.registerData.shipping_address.address_2 = this.registerData.billing_address.address_2;
        this.registerData.shipping_address.city = this.registerData.billing_address.city;
        this.registerData.shipping_address.state = this.registerData.billing_address.state;
        this.registerData.shipping_address.postcode = this.registerData.billing_address.postcode;
        this.registerData.shipping_address.country = this.registerData.billing_address.country;
        return true;
    };
    AccountRegister.prototype.registerCustomer = function () {
        var _this = this;
        this.errors = "";
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.service.registerCustomer(this.registerData)
                .then(function (results) { return _this.handleRegister(results); });
        }
    };
    AccountRegister.prototype.handleRegister = function (results) {
        var _this = this;
        console.log(results.errors);
        this.disableSubmit = false;
        if (!results.errors) {
            this.countries.checkout_login;
            this.service.login(this.registerData)
                .then(function (results) { return _this.loginStatus = results; });
            if (this.platform.is('cordova')) {
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({ email: this.registerData.email, pincode: this.registerData.billing_address.postcode, city: this.registerData.billing_address.city });
            }
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
        }
        else if (results.errors) {
            this.errors = results.errors;
        }
    };
    AccountRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\register\register.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Register" | translate}}\n\n    </ion-title> \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="account-register">\n\n  <img src="assets/image/register-ico.png" height="200" style="display: block;margin-bottom:10px;">\n\n  <img src="assets/image/logo.png" height="30" style="position: absolute;right:60px; top:180px;">\n\n    <h2>Register as a Member</h2>\n\n    <p>As a Komuniti4U member, we will create tailor-made offers and exclusive discounts just for you over and above any offers we have running in our app.</p>\n\n  <div>\n\n    <form #f="ngForm">\n\n      <ion-list>\n\n        <!-- <ion-list-header>\n\n          <b primary>{{"AccountInfo" | translate}}\n\n          </b>\n\n        </ion-list-header> -->\n\n        <!-- <ion-item>\n\n          <ion-label floating>{{"FirstName" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.first_name" name="firstname">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"LastName" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.last_name" name="lastname">\n\n          </ion-input>\n\n        </ion-item> -->\n\n        <ion-item>\n\n          <ion-label fixed>{{"Email" | translate}}:\n\n          </ion-label>\n\n          <ion-input type="email" [(ngModel)]="registerData.email" name="Email">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>{{"Password" | translate}}:\n\n          </ion-label>\n\n          <ion-input type="password" [(ngModel)]="registerData.password" name="password">\n\n          </ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n          <ion-label floating>{{"Company" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.company" name="billing_company">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Phone" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="number" [(ngModel)]="registerData.billing_address.phone" name="billing_phone">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"StreetAddress" | translate}} 1\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.address_1" name="billing_address_1">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"StreetAddress" | translate}} 2\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.address_2" name="billing_address_2">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"City" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.city" name="billing_city">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Postcode" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.postcode" name="postcode">\n\n          </ion-input>\n\n        </ion-item> -->\n\n        <!-- <ion-item *ngIf="countries.country">     \n\n          <ion-label>  \n\n            {{"Country" | translate}}\n\n          </ion-label>   \n\n          <ion-select [(ngModel)]="registerData.billing_address.country" (ngModelChange)="getBillingRegion(registerData.billing_address.country)" name="country">\n\n            <div *ngFor="let field of countries.country.countries | keys">\n\n              <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span></ion-option>\n\n            </div>\n\n          </ion-select>      \n\n        </ion-item>\n\n        <ion-item *ngIf="billing_states">  \n\n          <ion-label>  \n\n            {{"State" | translate}}\n\n          </ion-label>   \n\n          <ion-select  [(ngModel)]="registerData.billing_address.state" name="state">\n\n            <div *ngFor="let field of billing_states | keys">\n\n              <ion-option value="{{field.key}}">{{field.value}}\n\n              </ion-option>\n\n            </div>\n\n          </ion-select>\n\n        </ion-item>\n\n         <ion-item *ngIf="!billing_states">\n\n          <ion-label floating>{{"State" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.state" name="state">\n\n          </ion-input>\n\n        </ion-item> -->\n\n      </ion-list>\n\n\n\n        <div *ngIf="errors" class="error-message">\n\n            <h2 *ngFor="let item of errors | keys">{{item.value.message}}\n\n            </h2>\n\n        </div>\n\n\n\n      <div class="margin"> \n\n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="registerCustomer()">{{Register | translate}}\n\n        </button>\n\n      </div>\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], AccountRegister);
    return AccountRegister;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\notifications\notifications.html"*/'<!--\n\n  Generated template for the NotificationsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Notifications</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only>\n\n          <ion-icon color="icon-color" ios="ios-trash" md="md-trash">\n\n          </ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <small>21 October 2019</small>\n\n        Muat turun App Komuniti4u di Google Play Store Sekarang\n\n      </ion-item>\n\n      <ion-item>\n\n        <small>11 October 2019</small>\n\n        Test from one signal app from google playstore\n\n      </ion-item>\n\n      <ion-item>\n\n        <small>14 September 2019</small>\n\n        Test from one signal app from google playstore\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button button color="light" block outline>\n\n        Delete All Notifications\n\n    </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/notifications/notifications.module": [
		719,
		2
	],
	"../pages/signreferral/signreferral.module": [
		720,
		1
	],
	"../pages/whatsapplink/whatsapplink.module": [
		721,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartService = /** @class */ (function () {
    function CartService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CartService.prototype.loadCart = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteItem = function (item_key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_cart_item&item_key=' + item_key, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.checkout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.billing = data;
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', _this.config.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                });
                resolve(_this.billing);
            });
        });
    };
    CartService.prototype.addToCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity += 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] += 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity -= 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] -= 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.submitCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.removeCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
            });
        });
    };
    CartService.prototype.updateShipping = function (method) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping_method[0]", method);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_shipping_method', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CartService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_condition_terms_condition__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BillingAddressForm = /** @class */ (function () {
    function BillingAddressForm(iab, nav, oneSignal, platform, service, params, functions, values) {
        this.iab = iab;
        this.nav = nav;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.showCreateAccont = false;
        this.buttonSubmit = false;
        this.buttonSubmitLogin = false;
        this.buttonSubmitCoupon = false;
        this.buttonText = "Place order";
        this.buttonText1 = "Apply";
        this.buttonText2 = "Login";
        this.loginData = [];
        this.form = params.data;
        this.billing = {};
        this.billing.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
        this.getRegion(this.form.shipping_country);
        this.form.shipping = true;
        this.shipping = {};
        this.shipping.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
    }
    BillingAddressForm.prototype.getRegion = function (countryId) {
        var _this = this;
        this.states = this.form.state[countryId];
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.handleOrderReviews = function (results) {
        this.OrderReview = results;
        this.form.payment = this.OrderReview.payment;
        //this.chosen_shipping = this.OrderReview.chosen_shipping;
    };
    BillingAddressForm.prototype.checkout = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.buttonText = "Placing order...";
        if (this.platform.is('cordova'))
            this.oneSignal.getIds().then(function (data) {
                _this.form.onesignal_user_id = data.userId;
            });
        if (this.form.shipping) {
            this.form.shipping_first_name = this.form.billing_first_name;
            this.form.shipping_last_name = this.form.billing_last_name;
            this.form.shipping_company = this.form.billing_company;
            this.form.shipping_address_1 = this.form.billing_address_1;
            this.form.shipping_address_2 = this.form.billing_address_2;
            this.form.shipping_city = this.form.billing_city;
            this.form.shipping_country = this.form.billing_country;
            this.form.shipping_state = this.form.billing_state;
            this.form.shipping_postcode = this.form.billing_postcode;
        }
        if (this.form.payment_method == 'bacs' || this.form.payment_method == 'cheque' || this.form.payment_method == 'cod') {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handleBilling(results); });
        }
        else if (this.form.payment_method == 'payuindia') {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handlePayUPayment(results); });
        }
        else if (this.form.payment_method == 'stripe') {
            this.service.getStripeToken(this.form)
                .then(function (results) { return _this.handleStripeToken(results); });
        }
        else {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handlePayment(results); });
        }
    };
    BillingAddressForm.prototype.handlePayUPayment = function (results) {
        var _this = this;
        var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
        var browser = this.iab.create(results.redirect, '_blank', options);
        var str = results.redirect;
        var pos1 = str.lastIndexOf("/order-pay/");
        var pos2 = str.lastIndexOf("/?key=wc_order");
        var pos3 = pos2 - (pos1 + 11);
        this.orderId = str.substr(pos1 + 11, pos3);
        browser.on('loadstart').subscribe(function (data) {
            var browserActive = false;
            alert(data.url);
            if (data.url.indexOf('payumoney.com/transact') != -1 && !browserActive) {
                browserActive = true;
                browser.show();
            }
            else if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('/?key=wc_order_') != -1) {
                if (_this.orderId)
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], _this.orderId);
                browser.hide();
            }
            else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                browser.close();
                _this.buttonSubmit = false;
            }
        });
        browser.on('exit').subscribe(function (data) {
            _this.buttonSubmit = false;
        });
    };
    BillingAddressForm.prototype.handlePayment = function (results) {
        var _this = this;
        if (results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser_1 = this.iab.create(results.redirect, '_blank', options);
            browser_1.show();
            browser_1.on('loadstart').subscribe(function (data) {
                if (data.url.indexOf('order-received') != -1 && data.url.indexOf('return=') == -1) {
                    _this.values.cart = [];
                    _this.values.count = 0;
                    var str = data.url;
                    var pos1 = str.lastIndexOf("/order-received/");
                    var pos2 = str.lastIndexOf("/?key=wc_order");
                    var pos3 = pos2 - (pos1 + 16);
                    var order_id = str.substr(pos1 + 16, pos3);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], order_id);
                    browser_1.hide();
                }
                else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser_1.close();
                    _this.buttonSubmit = false;
                }
            });
            browser_1.on('exit').subscribe(function (data) {
                _this.buttonSubmit = false;
            });
        }
        else if (results.result == 'failure') {
            this.functions.showAlert("STATUS", results.messages);
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.checkoutStripe = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.buttonText = "Placing Order...";
        this.service.getStripeToken(this.form)
            .then(function (results) { return _this.handleStripeToken(results); });
    };
    BillingAddressForm.prototype.handleStripeToken = function (results) {
        var _this = this;
        if (results.error) {
            this.buttonSubmit = false;
            this.buttonText = "Place Order";
            this.functions.showAlert("ERROR", results.error.message);
        }
        else {
            this.service.stripePlaceOrder(this.form, results)
                .then(function (results) { return _this.handleBilling(results); });
        }
    };
    BillingAddressForm.prototype.handleBilling = function (results) {
        if (results.result == "success") {
            var str = results.redirect;
            var pos1 = str.lastIndexOf("/order-received/");
            var pos2 = str.lastIndexOf("/?key=wc_order");
            var pos3 = pos2 - (pos1 + 16);
            var order_id = str.substr(pos1 + 16, pos3);
            this.values.cart = [];
            this.values.count = 0;
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], order_id);
        }
        else if (results.result == "failure") {
            this.functions.showAlert("ERROR", results.messages);
        }
        this.buttonSubmit = false;
        this.buttonText = "Place Order";
    };
    BillingAddressForm.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.buttonSubmitLogin = true;
            this.buttonText2 = "Loading";
            this.service.login(this.form)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    BillingAddressForm.prototype.validateForm = function () {
        if (this.form.username == undefined || this.form.username == "") {
            return false;
        }
        if (this.form.password == undefined || this.form.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.handleResults = function (a) {
        this.buttonSubmitLogin = false;
        this.buttonText2 = "Login";
        //this.form.shipping = true;
        if (a.user_logged) {
            this.form = a;
            this.states = this.form.state[this.form.billing_country];
            this.values.isLoggedIn = a.user_logged;
            this.values.customerName = a.billing_first_name;
            this.values.customerId = a.user_id;
            this.values.logoutUrl = a.logout_url;
        }
        else {
            this.functions.showAlert("Error", 'Login unsuccessful. try again');
        }
    };
    BillingAddressForm.prototype.submitCoupon = function () {
        var _this = this;
        this.buttonSubmitCoupon = true;
        this.buttonText1 = "Loading";
        this.service.submitCoupon(this.form)
            .then(function (results) { return _this.handleCoupon(results); });
    };
    BillingAddressForm.prototype.handleCoupon = function (results) {
        var _this = this;
        this.buttonSubmitCoupon = false;
        this.buttonText1 = "Apply";
        this.couponStatus = results._body;
        this.functions.showAlert("STATUS", results._body);
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.OrderReview = results; });
    };
    BillingAddressForm.prototype.createAccount = function () {
        this.showCreateAccont = true;
    };
    BillingAddressForm.prototype.changePayment = function () {
        this.form.payment_instructions = this.form.payment[this.form.payment_method].description;
        this.buttonSubmit = false;
        this.buttonText = "Continue to " + this.form.payment[this.form.payment_method].method_title;
    };
    BillingAddressForm.prototype.terms = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__terms_condition_terms_condition__["a" /* TermsCondition */], this.form.terms_content);
    };
    BillingAddressForm.prototype.updateOrderReview = function () {
        var _this = this;
        this.form.shipping_method = this.OrderReview.chosen_shipping[0] ? this.OrderReview.chosen_shipping[0] : '';
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\checkout\billing-address-form\billing-address-form.html"*/'<ion-header>\n\n  <ion-navbar color="header"> \n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title text-wrap text-center>{{"Checkout" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="billing-address-form">\n\n <div>\n\n    <ion-item *ngIf="!values.isLoggedIn" class="side-heading-background Returningcustomer" no-lines>\n\n      <ion-label color="side-heading-color">{{"Returningcustomer?Loginhere.." | translate}}\n\n        <ion-icon ios="ios-log-in" md="md-log-in">\n\n        </ion-icon>\n\n      </ion-label>\n\n      <ion-toggle color="button-color" checked="true" [(ngModel)]="form.islogin" name="subscribe">\n\n      </ion-toggle>\n\n    </ion-item>\n\n    <div *ngIf="form.islogin" class="login-form">\n\n      <form #f="ngForm">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label floating>{{"username" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="email" [(ngModel)]="form.username" name="firstname">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"password" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n\n            </ion-input>\n\n          </ion-item>\n\n        </ion-list> \n\n        <div class="login-button">\n\n          <button ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="login(loginData)">{{buttonText2}}\n\n          </button> \n\n        </div>\n\n      </form>\n\n    </div>\n\n    <div *ngIf="form.iscoupon" class="coupon">\n\n      <form #f="ngForm">\n\n        <ion-item>\n\n          <ion-label floating>coupon\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="form.coupon_code" name="coupon">\n\n          </ion-input>\n\n        </ion-item> \n\n        <button ion-button color="button-color" block type="submit" [disabled]="buttonSubmitCoupon" (click)="submitCoupon()"> {{buttonText1}}\n\n        </button> \n\n      </form>\n\n    </div>\n\n    <div *ngIf="form">\n\n      <form #f="ngForm" class="form">\n\n        <ion-list no-margin>\n\n          <ion-item class="side-heading-background">\n\n            <ion-label class="col" color="side-heading-color">{{"BillingAddress" | translate}}\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"FirstName" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_first_name" name="firstname">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"LastName"| translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_last_name" name="lastname">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Company" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_company" name="company">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Phone" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="number" [(ngModel)]="form.billing_phone" name="telephone">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"StreetAddress" | translate}} 1\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_address_1" name="street1">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"StreetAddress" | translate}} 2\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_address_2" name="street2">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Email" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="email" [(ngModel)]="form.billing_email" name="email">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"City" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_city" name="city">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Postcode" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_postcode" name="postcode">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label> {{"Country" | translate}}\n\n            </ion-label>\n\n            <ion-select [(ngModel)]="form.billing_country" (ngModelChange)="getRegion(form.billing_country)" name="billing_country">\n\n              <div *ngFor="let field of form.country.countries | keys">\n\n                <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n                </ion-option>\n\n              </div>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="states">\n\n            <ion-label> {{"State" | translate}} \n\n            </ion-label>\n\n            <ion-select [(ngModel)]="form.billing_state" name="billing_state">\n\n              <div *ngFor="let field of states | keys">\n\n                <ion-option value="{{field.key}}">{{field.value}}\n\n                </ion-option>\n\n              </div>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="!states">\n\n            <ion-label floating> {{"State" | translate}} \n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_state" name="billing_state">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n        <div class="same-for-shipping">\n\n          <ion-item class="side-heading-background">\n\n            <ion-label color="side-heading-color">{{"SameForShipping" | translate}}\n\n            </ion-label>\n\n            <ion-toggle color="button-color" checked="true" [(ngModel)]="form.shipping" name="shipping">\n\n            </ion-toggle>\n\n          </ion-item>\n\n        </div>\n\n        <div *ngIf="!form.shipping" class="same-for-shipping-form">\n\n          <ion-list class="shipping-address-list">\n\n            <ion-item class="side-heading-background">\n\n              <ion-label color="side-heading-color">{{"ShippingAddress" | translate}}\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"FirstName" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_first_name" name="first_name">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"LastName"| translate}}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_last_name" name="last_name">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"Company" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_company" name="shipping_company">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"StreetAddress" | translate}} 1\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_1" name="address_1">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"StreetAddress" | translate}} 2\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_2" name="address_2">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"City" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_city" name="shipping_city">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label> {{"Country" | translate}}\n\n              </ion-label>\n\n              <ion-select [(ngModel)]="form.shipping_country" (ngModelChange)="getRegion(form.shipping_country)" name="shipping_country">\n\n                <div *ngFor="let field of form.country.countries | keys">\n\n                  <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n                  </ion-option>\n\n                </div>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item *ngIf="states">\n\n              <ion-label> {{"State" | translate}} \n\n              </ion-label>\n\n              <ion-select [(ngModel)]="form.shipping_state" name="form.shipping_state">\n\n                <div *ngFor="let field of states | keys">\n\n                  <ion-option value="{{field.key}}">{{field.value}}\n\n                  </ion-option>\n\n                </div>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item *ngIf="!states">\n\n              <ion-label floating>{{form.checkout_fields?.shipping?.shipping_state?.label}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_state" name="form.shipping_state">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"Postcode" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_postcode" name="shipping_postcode">\n\n              </ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </form>\n\n    </div>\n\n    <ion-item *ngIf="!values.isLoggedIn" no-lines class="side-heading-background create-account">\n\n      <ion-label color="side-heading-color">{{"Create Account" | translate}}\n\n      </ion-label>\n\n      <ion-toggle color="button-color" checked="true" [(ngModel)]="form.register" name="subscribe">\n\n      </ion-toggle>\n\n    </ion-item>\n\n    <div *ngIf="form.register" class="create-account-form">\n\n      <form #f="ngForm">\n\n        <ion-list>\n\n          <ion-label class="create-account-label"> {{"Createanaccounttext" | translate}} \n\n          </ion-label>\n\n          <ion-item>\n\n            <ion-label floating>{{"password" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n\n            </ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n    </div>\n\n\n\n    <ion-item *ngIf="OrderReview?.shipping">\n\n      <ion-label>{{"Select a shipping method" | translate}}\n\n      </ion-label>\n\n      <ion-select [(ngModel)]="OrderReview.chosen_shipping[0]" name="shipping_method" (ngModelChange)="updateOrderReview()">\n\n        <div *ngFor="let method of OrderReview.shipping | keys">\n\n          <ion-option value="{{method.value.id}}"><span [innerHTML]="method.value.label"></span> <b>-</b> <span>{{method.value.cost  | currency:values.currency:true:\'1.2-2\'}}</span>\n\n          </ion-option>\n\n        </div>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n\n\n    <!--div *ngIf="OrderReview?.shipping" class="shipping">\n\n      <div no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateOrderReview()">\n\n          <ion-item class="side-heading-background payment-method-header" no-lines>\n\n            <ion-label color="side-heading-color">{{"Select a shipping method" | translate}}\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item *ngFor="let method of OrderReview.shipping | keys" style="padding-left:20px">\n\n            <ion-label><span [innerHTML]="method.value.label"></span> <b>-</b> <span>{{method.value.cost  | currency:values.currency:true:\'1.2-2\'}}</span></ion-label>           \n\n            <ion-radio value="{{method.value.id}}">\n\n            </ion-radio>\n\n          </ion-item>\n\n      </div>\n\n    </div-->\n\n\n\n<ion-list *ngIf="OrderReview?.cart">\n\n      <ion-item class="side-heading-background order-review-header" no-lines>\n\n        <ion-label color="side-heading-color">{{"Your Orders" | translate}}\n\n        </ion-label>\n\n      </ion-item>\n\n      <div *ngFor="let item of OrderReview.cart.cart_contents | keys">\n\n        <ion-row>\n\n          <ion-col width-75>\n\n            <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}})\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label no-margin>{{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <div *ngIf="OrderReview.totals.discount_total && OrderReview.totals.discount_total != 0">\n\n        <ion-row>\n\n          <ion-col width-75>\n\n            <ion-label no-margin>{{"Coupon" | translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label no-margin> - {{1*OrderReview.totals.discount_total | currency:values.currency:true:\'1.2-2\'}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <ion-row>\n\n        <ion-col width-75>\n\n          <ion-label no-margin>{{"SubTotal" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label no-margin>{{1*OrderReview.totals.subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="OrderReview.totals.shipping_total != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Shipping" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="OrderReview.totals.fee_total != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Fee" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.fee_total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="OrderReview.totals.cart_contents_total != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Subtotal ex tax" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>  \n\n\n\n      <ion-row *ngIf="OrderReview.totals.total_tax != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Tax total" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.total_tax | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col width-75>\n\n          <ion-label no-margin>\n\n            <b>{{"Totals" | translate}}\n\n            </b>\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label no-margin>\n\n            <b>{{1*OrderReview.totals.total | currency:values.currency:true:\'1.2-2\'}}\n\n            </b>\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n    <ion-item class="side-heading-background payment-method-header" no-lines>\n\n      <ion-label color="side-heading-color">{{"Select shipping method" | translate}}\n\n      </ion-label>\n\n    </ion-item>\n\n    <div *ngIf="form.payment">\n\n      <ion-list no-margin text-wrap radio-group [(ngModel)]="form.payment_method" (ngModelChange)="changePayment()">\n\n        <ion-item *ngFor="let method of form.payment | keys">\n\n          <ion-label class="payment-method-title">{{method.value.title}}\n\n          </ion-label>\n\n          <ion-radio value="{{method.value.id}}">\n\n          </ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div *ngIf="form.payment_method != \'stripe\'" class="side-heading-background">\n\n        <ion-label class="payment-instructions">{{form.payment_instructions}}\n\n        </ion-label> \n\n      <ion-item *ngIf="form.terms_content" no-lines class="side-heading-background">\n\n      <ion-label>{{"IAgree" | translate}} <a (click)="terms()">{{"TermsConditions" | translate}}</a>\n\n      </ion-label>\n\n      <ion-toggle color="button-color" checked="true" [(ngModel)]="form.terms" name="terms">\n\n      </ion-toggle>\n\n      </ion-item>\n\n      <div class="button-margin">\n\n        <button ion-button color="button-color" text-uppercase [disabled]="buttonSubmit" block secondary type="submit" class="button button-block button-default" (click)="checkout()">{{"PlaceOrder" | translate}}\n\n        </button> \n\n      </div>\n\n        \n\n      </div>\n\n    </div>\n\n    <div *ngIf="form.payment_method ==\'stripe\'" class="side-heading-background stripe-payment">\n\n      <ion-label [innerHTML]="form.payment.stripe.description">\n\n      </ion-label>\n\n      <form #f="ngForm">\n\n        <ion-list no-margin>\n\n          <ion-item class="side-heading-background">\n\n            <ion-label color="side-heading-color">Stripe Card Details\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"CardNumber" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_number" name="stripe_number">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"ExpiryMonth" | translate}} (MM)\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_month" name="stripe_exp_year">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"ExpiryYear" |translate}} (YYYY)\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_year" name="stripe_exp_year">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"CardCode" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_code" name="stripe_code">\n\n            </ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form> \n\n     <ion-item class="side-heading-background" no-lines>\n\n      <ion-label>{{"IAgree" | translate}} <a (click)="terms()">{{"TermsConditions" | translate}}</a>\n\n      </ion-label>\n\n      <ion-toggle checked="true" [(ngModel)]="form.terms" name="terms">\n\n      </ion-toggle>\n\n    </ion-item>\n\n\n\n      <div class="button-margin">\n\n      <button ion-button color="button-color" text-uppercase *ngIf="form.payment_method ==\'stripe\'" [disabled]="buttonSubmit" (click)="checkout()" block secondary type="submit" class="button button-block button-default">{{"PlaceOrder" | translate}}\n\n      </button>\n\n      </div>\n\n    </div>\n\n    <br>\n\n    <br>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\checkout\billing-address-form\billing-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */]])
    ], BillingAddressForm);
    return BillingAddressForm;
}());

//# sourceMappingURL=billing-address-form.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Service = /** @class */ (function () {
    function Service(reqhttp, http, config, values, loadingCtrl, nativeStorage) {
        this.reqhttp = reqhttp;
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.dir = 'left';
        this.filter = {};
        this.options = {};
        this.options2 = {};
        this.has_more_items = true;
        this.blocks = [];
        this.mainCategories = [];
        this.filter.page = 1;
    }
    Service.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-keys').map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.getCategories(1);
                _this.values.data = data;
                _this.values.settings = data.settings;
                _this.blocks = data.blocks;
                var _loop_1 = function (item) {
                    if (_this.blocks[item].block_type == 'product_block') {
                        if (_this.blocks[item].filter_by == 'tag')
                            filter = { tag: _this.blocks[item].link_id, status: 'publish' };
                        else
                            filter = { category: _this.blocks[item].link_id, status: 'publish' };
                        _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter)).map(function (res) { return res.json(); }).subscribe(function (data) {
                            _this.blocks[item].products = data;
                        });
                    }
                    if (_this.blocks[item].block_type == 'flash_sale_block') {
                        if (_this.blocks[item].filter_by == 'tag')
                            filter = { tag: _this.blocks[item].link_id, status: 'publish' };
                        else
                            filter = { category: _this.blocks[item].link_id, status: 'publish' };
                        _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter)).map(function (res) { return res.json(); }).subscribe(function (data) {
                            _this.blocks[item].products = data;
                        });
                        _this.blocks[item].interval = setInterval(function () {
                            var countDownDate = new Date(_this.blocks[item].sale_ends).getTime();
                            var now = new Date().getTime();
                            var distance = countDownDate - now;
                            _this.blocks[item].days = Math.floor(distance / (1000 * 60 * 60 * 24));
                            _this.blocks[item].hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            _this.blocks[item].minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            _this.blocks[item].seconds = Math.floor((distance % (1000 * 60)) / 1000);
                            if (distance < 0) {
                                clearInterval(_this.blocks[item].interval);
                                _this.blocks[item].hide = true;
                            }
                        }, 1000);
                    }
                };
                var filter;
                for (var item in _this.blocks) {
                    _loop_1(item);
                }
                _this.values.currency = data.currency;
                _this.login_nonce = data.login_nonce;
                if (data.user && data.user.data != undefined) {
                    _this.values.isLoggedIn = data.user.data.status;
                    _this.values.customerId = data.user.data.ID;
                    _this.values.customerName = data.user.data.display_name;
                    //this.values.avatar = data.user.data.avatar_url;
                    _this.values.logoutUrl = _this.encodeUrl(data.user.data.url);
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                            //this.values.avatar = data.avatar;
                        }
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'woo') {
                            _this.login(data);
                        }
                        else if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                        }
                    }, function (error) { return console.error(error); });
                }
                _this.nativeStorage.setItem('blocks', data).then(function (data) { }, function (error) { return console.error(error); });
                _this.nativeStorage.getItem('loginData').then(function (data) { return _this.login(data); }, function (error) { return console.error(error); });
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.cart = data;
                    _this.values.cartNonce = data.cart_nonce;
                    _this.values.updateCart(_this.cart);
                });
                resolve(true);
            });
        });
    };
    Service.prototype.getCategories = function (page) {
        var _this = this;
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v2/products/categories?', {
            per_page: 100, page: page
        })).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (page == 1)
                _this.categories = data;
            else {
                _this.categories.push.apply(_this.categories, data);
            }
            if (data.length == 100)
                _this.getCategories(page + 1);
            else {
                _this.categories = _this.categories.filter(function (item) { return item.name !== 'Uncategorized'; });
                _this.categories = _this.categories.filter(function (item) { return item.name !== 'Promosi'; });
                _this.mainCategories = _this.categories.filter(function (item) { return item.parent === 0; });
                _this.nativeStorage.setItem('categories', _this.categories).then(function (data) { }, function (error) { return console.error(error); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    Service.prototype.getNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.login = function (loginData) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", loginData.username);
        params.append("password", loginData.password);
        params.append("_wpnonce", this.login_nonce);
        params.append("login", 'Login');
        params.append("redirect", this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-login', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (!data.errors) {
                    _this.values.isLoggedIn = data.data.status;
                    _this.values.customerName = data.data.display_name;
                    _this.values.customerId = data.data.ID;
                    _this.values.logoutUrl = _this.encodeUrl(data.data.url);
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append("customer_id", _this.values.customerId.toString());
                    _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        for (var item in data) {
                            _this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                    _this.nativeStorage.setItem('loginData', {
                        username: loginData.username,
                        password: loginData.password
                    }).then(function (data) { }, function (error) { return console.error(error); });
                }
                resolve(data);
            }, function (err) {
                resolve(JSON.parse(err._body));
            });
        });
    };
    Service.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    Service.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-logout', _this.config.options).subscribe(function (data) {
                _this.values.isLoggedIn = false;
                _this.values.customerName = "";
                _this.nativeStorage.setItem('loginData', {}).then(function (data) { }, function (error) { return console.error(error); });
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.cart = data;
                    _this.values.updateCart(_this.cart);
                });
                resolve(_this.cart);
            });
        });
    };
    Service.prototype.passwordreset = function (email, nonce, url) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("user_login", email);
        params.append("wc_reset_password", "true");
        params.append("_wpnonce", nonce);
        params.append("_wp_http_referer", '/my-account/lost-password/');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/my-account/lost-password/', params).subscribe(function (status) {
                resolve(status);
            });
        });
    };
    Service.prototype.passwordResetNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-passwordreset', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getAddress = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/customers/' + _this.values.customerId + '?', false), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.address = data;
                resolve(_this.address);
            });
        });
    };
    Service.prototype.saveAddress = function (address) {
        var _this = this;
        var params = {
            customer: address
        };
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp.put(_this.config.setUrl('PUT', '/wp-json/wc/v3/customers/' + _this.values.customerId + '?', false), params, {}).then(function (data) {
                resolve(JSON.parse(data.data));
            });
        });
    };
    Service.prototype.pushNotification = function (notification) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", notification.device_id);
        params.append("platform", notification.platform);
        params.append("email", notification.email);
        params.append("city", notification.city);
        params.append("state", notification.state);
        params.append("country", notification.country);
        params.append("pincode", notification.pincode);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.pushNotify = function (deviceId, platform) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", deviceId);
        params.append("platform", platform);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.getOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/orders/' + id + '?', false), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.order = data;
                resolve(_this.order);
            });
        });
    };
    Service.prototype.getCountry = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_country', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.country = data;
                resolve(_this.country);
            });
        });
    };
    Service.prototype.registerCustomer = function (customer) {
        var _this = this;
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
        return new Promise(function (resolve) {
            _this.http.post(_this.config.setUrl('POST', '/wp-json/wc/v1/customers?', false), params, _this.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.user = data;
                resolve(_this.user);
                alert("Account Created! Kindly check your email for more information");
            }, function (err) {
                alert("Opss! You've already registered with this email!");
                resolve(err.json());
            });
        });
    };
    Service.prototype.getOrders = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/orders?', filter), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.updateOrder = function (data, id) {
        var _this = this;
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp.put(_this.config.setUrl('PUT', '/wp-json/wc/v3/orders/' + id + '?', false), data, {}).then(function (data) {
                _this.status = JSON.parse(data.data);
                resolve(_this.status);
            }, function (err) {
                resolve(JSON.parse(err.error));
            });
        });
    };
    Service.prototype.presentLoading = function (text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    };
    Service.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Service.prototype.getPage = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("page_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-page_content', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    // Add MemberPromo Product ID To Prevent It To Display Inside Home Screen
    Service.prototype.getProducts = function () {
        var _this = this;
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products?exclude=5378,5377,5456,5457,5458&', false), this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.products = data;
        });
    };
    Service.prototype.loadMore = function () {
        var _this = this;
        this.filter.page += 1;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?exclude=5378,5377,5377,5456,5457,5458&', _this.filter), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.handleMore(data);
                resolve(true);
            });
        });
    };
    Service.prototype.handleMore = function (results) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
    };
    Service.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.subscribeNotification = function (data) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("onesignal_user_id", data.userId);
        params.append("onesignal_push_token", data.pushToken);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_user_notification', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Functions = /** @class */ (function () {
    function Functions(alert, loadingController, values) {
        this.alert = alert;
        this.loadingController = loadingController;
        this.values = values;
    }
    Functions.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    Functions.prototype.presentLoading = function () {
        this.loader = this.loadingController.create({
            content: this.values.lan.WaitTitle
        });
        this.loader.present();
    };
    Functions.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__values__["a" /* Values */]])
    ], Functions);
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsCondition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsCondition = /** @class */ (function () {
    function TermsCondition(nav) {
        this.nav = nav;
    }
    TermsCondition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\checkout\terms-condition\terms-condition.html"*/'<ion-header>\n\n   <ion-navbar color="header">\n\n      <ion-title>{{"TermsConditions" | translate}}</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="terms-condition">\n\n   <div class="terms">\n\n   <p>Add terms and conditions here</p>\n\n   </div>\n\n</ion-content>'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\checkout\terms-condition\terms-condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TermsCondition);
    return TermsCondition;
}());

//# sourceMappingURL=terms-condition.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryService = /** @class */ (function () {
    function CategoryService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CategoryService.prototype.load = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.loadMore = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', filter), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        console.log(this.values.cartNonce);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CategoryService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CategoryService.prototype.search = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* LoadingController */]])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewPage = /** @class */ (function () {
    function ReviewPage(nav, service, params, functions, values, toastCtrl) {
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.toastCtrl = toastCtrl;
        this.form = {};
        this.buttonSubmitLogin = false;
        this.showAddReview = false;
        this.count5 = 0;
        this.count4 = 0;
        this.count3 = 0;
        this.count2 = 0;
        this.count1 = 0;
        this.count5Percentage = '0' + '%';
        this.count4Percentage = '0' + '%';
        this.count3Percentage = '0' + '%';
        this.count2Percentage = '0' + '%';
        this.count1Percentage = '0' + '%';
        this.id = params.data.id;
        this.name = params.data.name;
        this.count = params.data.count;
        this.rating = params.data.rating;
        this.form.rating = 5;
        this.handleReview(params.data.reviews);
    }
    ReviewPage.prototype.handleReview = function (reviews) {
        var _this = this;
        this.reviews = reviews;
        console.log(this.reviews);
        this.reviews.forEach(function (review) {
            review.avatar = Object(__WEBPACK_IMPORTED_MODULE_5__md5__["a" /* md5 */])(review.email);
            if (review.rating == 5) {
                _this.count5 = _this.count5 + 1;
            }
            if (review.rating == 4) {
                _this.count4 = _this.count4 + 1;
            }
            if (review.rating == 3) {
                _this.count3 = _this.count3 + 1;
            }
            if (review.rating == 2) {
                _this.count2 = _this.count2 + 1;
            }
            if (review.rating == 1) {
                _this.count1 = _this.count1 + 1;
            }
        });
        // this.count5 = ((this.count5 / this.count)*100);
        this.count5Percentage = ((this.count5 / this.count) * 100) + '%';
        // this.count4 = ((this.count4 / this.count)*100);
        this.count4Percentage = ((this.count4 / this.count) * 100) + '%';
        // this.count3 = ((this.count3 / this.count)*100);
        this.count3Percentage = ((this.count3 / this.count) * 100) + '%';
        //  this.count2 = ((this.count2 / this.count)*100) + '%';
        this.count2Percentage = this.count2 + '%';
        // this.count1 = ((this.count1 / this.count)*100) + '%';
        this.count1Percentage = this.count1 + '%';
    };
    ReviewPage.prototype.dismiss = function () {
        this.nav.pop();
    };
    ReviewPage.prototype.yourRating = function (rating) {
        this.form.rating = rating;
    };
    ReviewPage.prototype.submitComment = function () {
        var _this = this;
        this.form.id = this.id;
        if (this.validate()) {
            this.buttonSubmitLogin = true;
            this.service.submitComment(this.form).then(function (results) {
                _this.status = results;
                _this.buttonSubmitLogin = false;
                _this.functions.showAlert("Success", "Thank you for your review! Your review is awaiting approval");
            });
        }
    };
    ReviewPage.prototype.validate = function () {
        if (!this.values.isLoggedIn) {
            if (this.form.author == undefined || this.form.author == "") {
                this.functions.showAlert("ERROR", "Please Enter Name");
                return false;
            }
            if (this.form.email == undefined || this.form.email == "") {
                this.functions.showAlert("ERROR", "Please Enter Email");
                return false;
            }
        }
        if (this.form.comment == undefined || this.form.comment == "") {
            this.functions.showAlert("ERROR", "Please Enter Comment");
            return false;
        }
        else
            return true;
    };
    ReviewPage.prototype.showSubmitReview = function () {
        if (this.showAddReview)
            this.showAddReview = false;
        else
            this.showAddReview = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ReviewPage.prototype, "content", void 0);
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <ion-title>{{"Rating & Feedback" | translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()">\n\n        <ion-icon name="md-close" style="color: #111; font-size: 20px; margin: 16px;"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar> \n\n</ion-header>\n\n\n\n<ion-content class="review-page">\n\n  <div class="spinner"><ion-spinner *ngIf="!reviews" name="ios-small"></ion-spinner></div>\n\n  \n\n  <div *ngIf="reviews">\n\n    <div class="review-info">\n\n      <ion-row>\n\n        <ion-col style="border-right: 1px solid #f1f1f1;max-width:36%">\n\n          <h2 *ngIf="rating">{{rating  | number : \'1.1-1\'}}<span style="font-size: 15px; color: #999">/5</span></h2>\n\n          <h2 *ngIf="!rating">0<span style="font-size: 15px; color: #999">/5</span></h2>\n\n          <h3 style="font-size:15px">\n\n            <span class="rating">\n\n              <span class="star-icon" [ngClass]="{full: rating >= 1, half: rating == 0.5}">&#x2605;</span>\n\n              <span class="star-icon" [ngClass]="{full: rating >= 2, half: rating == 1.5}">&#x2605;</span>\n\n              <span class="star-icon" [ngClass]="{full: rating >= 3, half: rating == 2.5}">&#x2605;</span>\n\n              <span class="star-icon" [ngClass]="{full: rating >= 4, half: rating == 3.5}">&#x2605;</span>\n\n              <span class="star-icon" [ngClass]="{full: rating >= 5, half: rating == 4.5}">&#x2605;</span>\n\n            </span>\n\n          </h3>\n\n          <h3 style="margin-top: 0px;">\n\n            <span style="font-size: 14px;">{{count}} {{"Ratings" | translate}}</span>\n\n          </h3>\n\n        </ion-col>\n\n\n\n        <ion-col class="review-star-group">\n\n          <ion-row>\n\n            <ion-col style="max-width:35%">\n\n              <h3 style="margin-top:6px;">\n\n                <span class="rating review-star">\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                </span>\n\n              </h3>\n\n            </ion-col>\n\n            <ion-col style="max-width:45%">\n\n              <div class="progress-bar" item-right>\n\n                <span [style.width]="count5Percentage"></span>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col style="max-width:20%">\n\n              <h4 item-right>\n\n                <span>{{count5 | number : \'1.0-0\'}}</span>\n\n              </h4>\n\n            </ion-col>\n\n          </ion-row>\n\n          \n\n          <ion-row>\n\n            <ion-col style="max-width:35%">\n\n              <h3 style="margin-top:6px;">\n\n                 <span class="rating review-star">\n\n                   <span class="star-icon full">&#x2605;</span>\n\n                   <span class="star-icon full">&#x2605;</span>\n\n                   <span class="star-icon full">&#x2605;</span>\n\n                   <span class="star-icon full">&#x2605;</span>\n\n                   <span class="star-icon">&#x2605;</span>\n\n                 </span>\n\n              </h3>\n\n            </ion-col>\n\n            <ion-col style="max-width:45%">\n\n              <div class="progress-bar" item-right>\n\n                <span [style.width]="count4Percentage"></span>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col style="max-width:20%">\n\n              <h4 item-right>\n\n                <span>{{count4 | number : \'1.0-0\'}}</span>\n\n              </h4>\n\n            </ion-col>\n\n          </ion-row>\n\n        \n\n          <ion-row>\n\n            <ion-col style="max-width:35%">\n\n              <h3 style="margin-top:6px;">\n\n                <span class="rating review-star">\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                 </span>\n\n              </h3>\n\n            </ion-col>\n\n            <ion-col style="max-width:45%">\n\n              <div class="progress-bar" item-right>\n\n                <span [style.width]="count3Percentage"></span>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col style="max-width:20%">\n\n              <h4 item-right>\n\n                <span>{{count3 | number : \'1.0-0\'}}</span>\n\n              </h4>\n\n            </ion-col>\n\n          </ion-row>\n\n        \n\n          <ion-row>\n\n            <ion-col style="max-width:35%">\n\n              <h3 style="margin-top:6px;">\n\n               <span class="rating review-star">\n\n                 <span class="star-icon full">&#x2605;</span>\n\n                 <span class="star-icon full">&#x2605;</span>\n\n                 <span class="star-icon">&#x2605;</span>\n\n                 <span class="star-icon">&#x2605;</span>\n\n                 <span class="star-icon">&#x2605;</span>\n\n               </span>\n\n              </h3>\n\n            </ion-col>\n\n            <ion-col style="max-width:45%">\n\n              <div class="progress-bar" item-right>\n\n                <span [style.width]="count2Percentage"></span>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col style="max-width:20%">\n\n              <h4 item-right>\n\n                <span>{{count2 | number : \'1.0-0\'}}</span>\n\n              </h4>\n\n            </ion-col>\n\n          </ion-row>\n\n        \n\n          <ion-row>\n\n            <ion-col style="max-width:35%">\n\n              <h3 style="margin-top:6px;">\n\n                <span class="rating review-star">\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                </span>\n\n              </h3>\n\n            </ion-col>\n\n            <ion-col style="max-width:45%">\n\n              <div class="progress-bar" item-right>\n\n                <span [style.width]="count1Percentage"></span>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col style="max-width:20%">\n\n              <h4 item-right>\n\n                <span>{{count1 | number : \'1.0-0\'}}</span>\n\n              </h4>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n\n\n    <ion-card>\n\n      <div class="devider"></div>\n\n      <ion-card-header tappable>\n\n        {{"Add a review" | translate}}\n\n        <!--ion-icon *ngIf="!showAddReview" style="float: right" name="ios-arrow-down" item-right></ion-icon-->\n\n        <!--ion-icon *ngIf="showAddReview" style="float: right" name="ios-arrow-up" item-right></ion-icon-->\n\n      </ion-card-header>\n\n\n\n      <ion-card-content class="new-review">\n\n          <ion-label style="margin: 10px 0 6px 26px; font-size:13px">{{form.name}}\n\n            <span style="margin-right: 10px" text-uppercase>{{"Your Rating" | translate}}</span>\n\n            <span class="rating">\n\n              <span tappable (click)="yourRating(1)" class="star-icon" [ngClass]="{full: form.rating >= 1, half: form.rating == 0.5}">&#x2605;</span>\n\n              <span tappable (click)="yourRating(2)" class="star-icon" [ngClass]="{full: form.rating >= 2, half: form.rating == 1.5}">&#x2605;</span>\n\n              <span tappable (click)="yourRating(3)" class="star-icon" [ngClass]="{full: form.rating >= 3, half: form.rating == 2.5}">&#x2605;</span>\n\n              <span tappable (click)="yourRating(4)" class="star-icon" [ngClass]="{full: form.rating >= 4, half: form.rating == 3.5}">&#x2605;</span>\n\n              <span tappable (click)="yourRating(5)" class="star-icon" [ngClass]="{full: form.rating >= 5, half: form.rating == 4.5}">&#x2605;</span>\n\n            </span>\n\n          </ion-label>\n\n\n\n          <div class="comment-form">\n\n            <form #f="ngForm">\n\n              <ion-list>\n\n                <ion-item *ngIf="!values.isLoggedIn">\n\n                  <ion-input required type="text" [(ngModel)]="form.author" name="name" placeholder="{{\'Name\' | translate}}">\n\n                  </ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="!values.isLoggedIn">\n\n                  <ion-input required type="email" [(ngModel)]="form.email" name="email" placeholder="{{\'Email\' | translate}}">\n\n                  </ion-input>\n\n                </ion-item>\n\n                <ion-item class="comment-area">\n\n                  <textarea rows="2" style="width: 100%; border: none;" required type="text" [(ngModel)]="form.comment" name="comment" placeholder="{{\'Comment\' | translate}}">\n\n                  </textarea>\n\n                </ion-item>\n\n              </ion-list> \n\n              <div class="login-button">\n\n                <button style="margin: 16px 16px 0 16px;width: calc(100% - 32px);" ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="submitComment()">{{"Submit" | translate}}\n\n                </button> \n\n              </div>\n\n            </form>\n\n          </div>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n    <ion-card *ngIf="reviews.length">\n\n      <div class="devider"></div>\n\n      <ion-card-header>\n\n        {{"Feedbacks" | translate}}\n\n      </ion-card-header>\n\n\n\n      <ion-card-content>\n\n        <div  *ngFor="let item of reviews" class="reviews">\n\n          <ion-item no-lines>\n\n            <ion-avatar item-start style="margin:8px">\n\n              <img src="https://www.gravatar.com/avatar/{{item.avatar}}">\n\n            </ion-avatar>\n\n            <h3 style="margin-bottom:6px;font-size:15px">{{item.name}}\n\n              <span class="rating review-star">\n\n                <span class="star-icon" [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}">&#x2605;</span>\n\n                <span class="star-icon" [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}">&#x2605;</span>\n\n                <span class="star-icon" [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}">&#x2605;</span>\n\n                <span class="star-icon" [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}">&#x2605;</span>\n\n                <span class="star-icon" [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}">&#x2605;</span>\n\n              </span>\n\n            </h3>\n\n      \n\n            <h3 style="color:#9e9898;margin-bottom:4px;font-size: 13px">{{item.date_created | date:\'MMM d, y hh:mm a\'}}\n\n            </h3>\n\n          </ion-item>\n\n          <p text-wrap>{{item.review}}</p>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </div> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\reviews\reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchService = /** @class */ (function () {
    function SearchService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    SearchService.prototype.getSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', filter), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    SearchService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberpromoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MemberpromoPage = /** @class */ (function () {
    function MemberpromoPage(toastCtrl, nav, service, values) {
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.has_more_items = true;
        this.loading = true;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
        this.options = [];
        this.service.getProducts();
    }
    MemberpromoPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.load().then(function (results) {
            _this.handleService(results);
            refresher.complete();
        });
    };
    MemberpromoPage.prototype.handleService = function (results) {
        // 
    };
    MemberpromoPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
    };
    MemberpromoPage.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    MemberpromoPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    MemberpromoPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    MemberpromoPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    MemberpromoPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    MemberpromoPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    MemberpromoPage.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    MemberpromoPage.prototype.getId = function () {
        var i;
        if (this.options.length >= 1)
            var resa = this.options[0].split(":");
        if (this.options.length >= 2)
            var resb = this.options[1].split(":");
        if (this.options.length >= 1)
            for (i = 0; i < this.product.product.variations.length; i++) {
                if (this.product.product.variations[i].attributes[0].option == resa[1]) {
                    if (this.options.length == 1) {
                        break;
                    }
                    else if (this.product.product.variations[i].attributes[1].option == resb[1]) {
                        break;
                    }
                }
            }
    };
    MemberpromoPage.prototype.goto = function (data) {
        var _this = this;
        if (data.description == "product") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], data.url);
        }
        else if (data.description == "category") {
            this.items.id = data.url;
            this.items.name = data.title;
            this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(_this.items.id); });
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
        }
        else if (data.description == "post") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__post_post__["a" /* Post */], data.url);
        }
    };
    MemberpromoPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.service.loadMore().then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    MemberpromoPage.prototype.handleMore = function (results, infiniteScroll) {
        if (!results) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    MemberpromoPage.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], item);
    };
    MemberpromoPage.prototype.hideLoading = function () {
        this.loading = false;
    };
    MemberpromoPage.prototype.getSubCategories = function (id) {
        var results = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        return results;
    };
    MemberpromoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memberpromo',template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\memberpromo\memberpromo.html"*/'<ion-header class="home-header">\n\n  <ion-navbar color="header">\n\n     <button ion-button menuToggle>\n\n        <ion-icon name="menu">\n\n        </ion-icon>\n\n     </button>\n\n     <ion-title>Member Promo\n\n     </ion-title>\n\n     <ion-buttons end>\n\n        <button ion-button icon-only (click)="getSearch()">\n\n           <ion-icon color="icon-color" ios="ios-search" md="md-search">\n\n           </ion-icon>\n\n        </button>\n\n        <button ion-button icon-only class="has-icon icon-only has-badge" (click)="getCart()">\n\n           <ion-icon color="icon-color" name="md-basket">\n\n           </ion-icon>\n\n           <ion-badge class="badge badge-light" *ngIf="values.count != 0">{{values.count}}\n\n           </ion-badge>\n\n        </button>\n\n     </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="home">\n\n     <div class="member_offers_style" (click)="getPromo()">{{values.customerName}}, This offers is just for you!</div>\n\n  <ion-refresher *ngIf="values.settings.pull_to_refresh == \'1\'" (ionRefresh)="doRefresh($event)">\n\n  <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-fab bottom right *ngIf="values.settings.enable_home_chat == \'1\'">\n\n     <a href="https://wa.me/{{values.settings.whatsapp_number}}">\n\n        <button ion-fab color="secondary" mini>\n\n           <ion-icon name="chatbubbles"></ion-icon>\n\n        </button>\n\n     </a>\n\n  </ion-fab>\n\n  <div *ngFor="let children of service?.blocks" hideWhen="loading" class="blocks">\n\n  <div *ngIf="children.block_type == \'product_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="product-block">\n\n  <div *ngIf="children.products" class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n\n  <!-- Products Scroll -->\n\n  <div *ngIf="children.products && children.style == \'scroll\'" class="product-scroll">\n\n     <div class="scroller" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n        <a *ngFor="let item of children.products" [style.width.%]="children.child_width">\n\n        <ion-card>\n\n           <ion-card-content (click)="getProduct(item)"> <img  [style.border-radius]="children.border_radius" src="{{item.images[0].src}}" /> </ion-card-content>\n\n           <h5 *ngIf="item.title">{{item.title}} </h5>\n\n           <h5 *ngIf="item.name">{{item.name}} </h5>\n\n           <ion-label>\n\n              <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n              </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n              </span> <span *ngIf="item.sale_price">\n\n              <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n              </del>\n\n              </span>\n\n           </ion-label>\n\n        </ion-card>\n\n        </a>\n\n     </div>\n\n  </div>\n\n  <!-- Products  Grid-->\n\n  <div class="product-grid" *ngIf="children.products && children.style == \'grid\'">\n\n     <ion-row class="row unlimited-items">\n\n        <ion-col class="col" *ngFor="let item of children.products" [style.padding]="children.padding">\n\n        <ion-card>\n\n           <ion-card-content>\n\n              <img tappable src="{{item.images[0].src}}" (click)="getProduct(item)"> \n\n              <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n              </button>\n\n              <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n              <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n              <div *ngIf="item.stock_status == \'instock\'">\n\n                 <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n              </div>\n\n           </ion-card-content>\n\n           <div tappable (click)="getProduct(item)" class="card-name">\n\n              <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n              <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n           </div>\n\n           <ion-label> \n\n              <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n              </span> \n\n              <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n              </span>\n\n              <span class="price-delete" *ngIf="item.sale_price">\n\n              <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n              </del>\n\n              </span>  \n\n           </ion-label>\n\n        </ion-card>\n\n        </ion-col>\n\n     </ion-row>\n\n  </div>\n\n  </div>\n\n  <div *ngIf="children.block_type == \'category_block\' && this.service.categories" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="category">\n\n  <div *ngIf="service?.categories" class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n\n  <!-- Category Scroll -->\n\n  <h3 padding>Exclusive Member Only Offers</h3>\n\n  <div *ngIf="service?.categories && children.style == \'scroll\'" class="category-slider-scroll">\n\n     <div class="scrollmenu2" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n        <a *ngFor="let item of getSubCategories(children.link_id)" class="{{item.slug}}" [style.width.%]="children.child_width">\n\n        <img *ngIf="item.image?.src" (load)="hideLoading()" [style.border-radius]="children.border_radius" src="{{item.image.src}}" (click)="getCategory(item.id, item.slug, item.name, item.image)"/>\n\n        <h5 *ngIf="item.image?.src" (click)="getCategory(item.id, item.slug, item.name, item.image)" [innerHTML]="item.name" [style.color]="children.title_color"></h5>\n\n        <div *ngIf="!item.image?.src" class="no-image">\n\n           <h5 (click)="getCategory(item.id, item.slug, item.name, item.image)" [innerHTML]="item.name" [style.color]="children.title_color"></h5>\n\n        </div>\n\n        </a>\n\n     </div>\n\n  </div>\n\n  <!-- Category Grid -->\n\n  <div *ngIf="service?.categories && children.style == \'grid\'" class="category-slider-grid">\n\n      <div class="spinner center-spinner">\n\n          <ion-spinner *ngIf="loading" name="crescent"> </ion-spinner>\n\n       </div>\n\n     <ion-row class="row unlimited-items">\n\n        <ion-col class="col {{item.slug}}" *ngFor="let item of getSubCategories(children.link_id)" [style.width.%]="children.child_width">\n\n        <div (click)="getCategory(item.id, item.slug, item.name, item.image)">\n\n           <ion-card>\n\n              <ion-card-content> \n\n                 <img *ngIf="item.image?.src" (load)="hideLoading()" [style.border-radius]="children.border_radius" src="{{item.image.src}}"/> \n\n              </ion-card-content>\n\n              <div text-center>\n\n                 <ion-label text-uppercase [innerHTML]="item.name" [style.color]="children.title_color"></ion-label>\n\n              </div>\n\n           </ion-card>\n\n        </div>\n\n        </ion-col>\n\n     </ion-row>\n\n  </div>\n\n  </div>\n\n  </div>\n\n\n\n  \n\n</ion-content>\n\n<!--ion-header class="home-header">\n\n  <ion-navbar color="header">\n\n     <button ion-button menuToggle>\n\n        <ion-icon name="menu">\n\n        </ion-icon>\n\n     </button>\n\n     <ion-title>\n\n        <img style="max-width: 200px;" src="{{values.avatar}}">\n\n     </ion-title>\n\n     <ion-buttons end>\n\n        <button ion-button icon-only color="icon-color" (click)="getSearch()">\n\n           <ion-icon color="icon-color" ios="ios-search" md="md-search">\n\n           </ion-icon>\n\n        </button>\n\n        <button ion-button icon-only color="icon-color" class="has-icon icon-only has-badge" (click)="getCart()">\n\n           <ion-icon color="icon-color" name="md-basket" class="item-icon">\n\n           </ion-icon>\n\n           <ion-badge class="badge badge-light" *ngIf="values.count != 0">{{values.count}}\n\n           </ion-badge>\n\n        </button>\n\n     </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="home">\n\n  <ion-refresher *ngIf="values.settings.pull_to_refresh == \'1\'" (ionRefresh)="doRefresh($event)">\n\n  <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-spinner *ngIf="!service?.blocks" name="crescent"></ion-spinner>\n\n  <div *ngFor="let children of service?.blocks" hideWhen="loading" class="blocks">\n\n     <div *ngIf="children.block_type == \'banner_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="banner_block">\n\n     <div class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n\n\n\n     <div *ngIf="children.children.length && children.style == \'slider\'">\n\n        <ion-slides pager="true" loop="true" autoplay="5800">\n\n           <ion-slide *ngFor="let image of children.children"> \n\n              <img src="{{image.image}}" (click)="goto(image)" (load)="hideLoading()" [style.border-radius]="children.border_radius">\n\n           </ion-slide>\n\n        </ion-slides>\n\n     </div>\n\n\n\n     <div *ngIf="children.children.length && children.style == \'scroll\'" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}" class="floating-header banner-scroll">\n\n     <img class="banner" tappable *ngFor="let image of children.children" (load)="hideLoading()" src="{{image.image}}" (click)="goto(image)" [style.border-radius]="children.border_radius" [style.width.%]="children.child_width"> \n\n  </div>\n\n\n\n  <div *ngIf="children.children.length && children.style == \'grid\'" class="banner-grid">\n\n     <ion-row class="row unlimited-items">\n\n        <ion-col *ngFor="let image of children.children" (load)="hideLoading()" [style.width.%]="children.child_width">\n\n        <img src="{{image.image}}" (click)="goto(image)" [style.border-radius]="children.border_radius" class="{{children.card_style}}"> \n\n        </ion-col>\n\n     </ion-row>\n\n  </div>\n\n  </div>\n\n  <div *ngIf="children.block_type == \'product_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" class="product-block">\n\n  <div *ngIf="children.products" class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n\n\n\n  <div *ngIf="children.products && children.style == \'scroll\'" class="product-scroll">\n\n     <div class="scroller" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n        <a *ngFor="let item of children.products" [style.width.%]="children.child_width">\n\n        <ion-card>\n\n           <ion-card-content (click)="getProduct(item)"> <img [style.border-radius]="children.border_radius" src="{{item.images[0].src}}" /> </ion-card-content>\n\n           <h5 *ngIf="item.title">{{item.title}} </h5>\n\n           <h5 *ngIf="item.name">{{item.name}} </h5>\n\n           <ion-label>\n\n              <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n              </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n              </span> <span *ngIf="item.sale_price">\n\n              <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n              </del>\n\n              </span>\n\n           </ion-label>\n\n        </ion-card>\n\n        </a>\n\n     </div>\n\n  </div>\n\n\n\n  <div class="product-grid" *ngIf="children.products && children.style == \'grid\'">\n\n     <ion-row class="row unlimited-items">\n\n        <ion-col class="col" *ngFor="let item of children.products">\n\n           <ion-card>\n\n              <ion-card-content>\n\n                 <img [style.height.px]="values.dimensions.imageGridViewHeight"  tappable src="{{item.images[0].src}}" (click)="getProduct(item)"> \n\n                 <button ion-button color="danger" class="stock" *ngIf="!item.in_stock">{{"No Stock" | translate}}\n\n                 </button>\n\n                 <ion-icon name="md-heart" color="icon-color" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                 <ion-icon name="md-heart-outline" color="icon-color" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                 <div *ngIf="item.in_stock">\n\n                    <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                 </div>\n\n              </ion-card-content>\n\n              <div tappable (click)="getProduct(item)" class="card-name">\n\n                 <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n                 <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n              </div>\n\n              <ion-label> \n\n                 <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                 </span> \n\n                 <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                 </span>\n\n                 <span class="price-delete" *ngIf="item.sale_price">\n\n                 <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                 </del>\n\n                 </span>  \n\n              </ion-label>\n\n           </ion-card>\n\n        </ion-col>\n\n     </ion-row>\n\n  </div>\n\n  </div>\n\n\n\n  <div *ngIf="children.block_type == \'flash_sale_block\' && !children.hide" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="product-block flash_sale">\n\n  <div *ngIf="children.products" class="{{children.header_align}}" [style.color]="children.title_color">\n\n  <ion-item no-lines class="flash-item-name">\n\n     <h2 [style.color]="children.title_color">\n\n        <ion-icon name="md-flash" style="margin-right: 6px;font-size: 18px;"></ion-icon>\n\n        {{children.title}}\n\n     </h2>\n\n\n\n     <div style="text-align: center;">\n\n        <h3 class=\'day\'><span>{{children.days}}</span></h3>\n\n        : \n\n        <h3 class=\'day\'><span>{{children.hours}}</span></h3>\n\n        : \n\n        <h3 class=\'day\'><span>{{children.minutes}}</span></h3>\n\n        : \n\n        <h3 class=\'day\'><span>{{children.seconds}}</span></h3>\n\n     </div>\n\n  </ion-item>\n\n  </div>\n\n\n\n  <div *ngIf="children.products && children.style == \'scroll\'" class="product-scroll">\n\n     <div class="scroller" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n        <a *ngFor="let item of children.products" [style.width.%]="children.child_width">\n\n        <ion-card>\n\n           <ion-card-content (click)="getProduct(item)"> <img [style.height.px]="values.dimensions.productSliderHeight" [style.border-radius]="children.border_radius" src="{{item.images[0].src}}" /> </ion-card-content>\n\n           <h5 *ngIf="item.title">{{item.title}} </h5>\n\n           <h5 *ngIf="item.name">{{item.name}} </h5>\n\n           <ion-label>\n\n              <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n              </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n              </span> <span *ngIf="item.sale_price">\n\n              <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n              </del>\n\n              </span>\n\n           </ion-label>\n\n        </ion-card>\n\n        </a>\n\n     </div>\n\n  </div>\n\n\n\n  <div class="product-grid" *ngIf="children.products && children.style == \'grid\'">\n\n     <ion-row class="row unlimited-items">\n\n        <ion-col class="col" *ngFor="let item of children.products" [style.padding]="children.padding">\n\n        <ion-card>\n\n           <ion-card-content>\n\n              <img [style.height.px]="values.dimensions.imageGridViewHeight"  tappable src="{{item.images[0].src}}" (click)="getProduct(item)"> \n\n              <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n              </button>\n\n              <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n              <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n              <div *ngIf="item.stock_status == \'instock\'">\n\n                 <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n              </div>\n\n           </ion-card-content>\n\n           <div tappable (click)="getProduct(item)" class="card-name">\n\n              <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n              <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n           </div>\n\n           <ion-label> \n\n              <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n              </span> \n\n              <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n              </span>\n\n              <span class="price-delete" *ngIf="item.sale_price">\n\n              <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n              </del>\n\n              </span>  \n\n           </ion-label>\n\n        </ion-card>\n\n        </ion-col>\n\n     </ion-row>\n\n  </div>\n\n  </div>\n\n  <div *ngIf="children.block_type == \'category_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="category">\n\n  <div *ngIf="service?.categories" class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n\n\n\n  <div *ngIf="service?.categories && children.style == \'scroll\'" class="category-slider-scroll">\n\n     <div class="scrollmenu2" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n        <a *ngFor="let item of getSubCategories(children.link_id)" class="{{item.slug}}" [style.width.%]="children.child_width">\n\n        <img *ngIf="item.image?.src" [style.border-radius]="children.border_radius" (load)="hideLoading()" src="{{item.image.src}}" (click)="getCategory(item.id, item.slug, item.name, item.image)"/>\n\n        <h5 *ngIf="item.image" (click)="getCategory(item.id, item.slug, item.name, item.image)" [innerHTML]="item.name"></h5>\n\n        <div *ngIf="!item.image" class="no-image">\n\n           <h5 (click)="getCategory(item.id, item.slug, item.name, item.image)" [innerHTML]="item.name" [style.color]="children.title_color"></h5>\n\n        </div>\n\n        </a>\n\n     </div>\n\n  </div>\n\n\n\n  <div *ngIf="service?.categories && children.style == \'grid\'" class="category-slider-grid">\n\n     <ion-row class="row unlimited-items">\n\n        <ion-col class="col {{item.slug}}" *ngFor="let item of getSubCategories(children.link_id)" [style.width.%]="children.child_width">\n\n        <div (click)="getCategory(item.id, item.slug, item.name, item.image)">\n\n           <ion-card>\n\n              <ion-card-content> \n\n                 <img *ngIf="item.image" (load)="hideLoading()" [style.border-radius]="children.border_radius" src="{{item.image}}"/> \n\n              </ion-card-content>\n\n              <div text-center>\n\n                 <ion-label text-uppercase [innerHTML]="item.name" [style.color]="children.title_color"></ion-label>\n\n              </div>\n\n           </ion-card>\n\n        </div>\n\n        </ion-col>\n\n     </ion-row>\n\n  </div>\n\n  </div>\n\n  </div>\n\n\n\n  <div *ngIf="service?.products" class="products-listing">\n\n     <div *ngIf="service?.products.length">\n\n        <ion-list>\n\n           <div class="card-background-page grid">\n\n              <ion-row class="row unlimited-items">\n\n                 <ion-col class="col" *ngFor="let item of service.products">\n\n                    <ion-card>\n\n                       <ion-card-content class="stock">\n\n                          <img [style.height.px]="values.dimensions.imageGridViewHeight" tappable src="{{item.images[0].src}}" (load)="hideLoading()" (click)="getProduct(item)">\n\n                          <button ion-button color="danger" *ngIf="!item.in_stock">{{"OUTOFSTOCK" | translate}}\n\n                          </button>\n\n                          <ion-icon name="md-heart" color="icon-color" class="wishlist-button-grid" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                          <ion-icon name="md-heart-outline" color="icon-color" class="wishlist-button-grid" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                       </ion-card-content>\n\n                       <div tappable (click)="getProduct(item)" class="card-name">\n\n                          <ion-label *ngIf="item.title">{{item.title}}\n\n                          </ion-label>\n\n                          <ion-label *ngIf="item.name">{{item.name}}\n\n                          </ion-label>\n\n                       </div>\n\n                       <ion-item no-padding class="price-list">\n\n                          <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n                          </span>\n\n                          <span class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n                          </span>\n\n                          <span class="price-delete" primary *ngIf="item.sale_price">\n\n                          <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n                          </del>\n\n                          </span>\n\n                       </ion-item>\n\n                    </ion-card>\n\n                 </ion-col>\n\n              </ion-row>\n\n           </div>\n\n        </ion-list>\n\n     </div>\n\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n  <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items...\' | translate}}"> </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content-->'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\memberpromo\memberpromo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], MemberpromoPage);
    return MemberpromoPage;
}());

//# sourceMappingURL=memberpromo.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//headers.append('Content-Type', 'application/json');
var Config = /** @class */ (function () {
    function Config() {
        this.url = 'https://komuniti4u.com';
        this.consumerKey = 'ck_d3e62fbfab4308dbff89321bf6d8f0bc58cd85a4';
        this.consumerSecret = 'cs_5d98d4ab1c579ee04482846ca18b00f2cf731c71';
        this.webClientId = '221746148249-q25a4qinbr8c12n5isjoui6a5d6qgmit.apps.googleusercontent.com';
        this.options = {};
        this.optionstwo = {};
        this.options.withCredentials = true;
        this.options.headers = headers;
        this.optionstwo.withCredentials = false;
        this.optionstwo.headers = headers;
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
    }
    Config.prototype.setOauthNonce = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    };
    Config.prototype.setUrl = function (method, endpoint, filter) {
        var key;
        var unordered = {};
        var ordered = {};
        if (this.url.indexOf('https') >= 0) {
            unordered = {};
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            return this.url + endpoint + this.searchParams.toString();
        }
        else {
            var url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;
            for (key in this.params) {
                unordered[key] = this.params[key];
            }
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return this.url + endpoint + this.searchParams.toString() + '&oauth_signature=' + this.encodedSignature;
        }
    };
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgotten_forgotten__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AccountLogin = /** @class */ (function () {
    function AccountLogin(nav, service, functions, values, platform, oneSignal, googlePlus, fb) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.googlePlus = googlePlus;
        this.fb = fb;
        this.disableSubmit = false;
        this.loginData = {};
        this.buttonText = "Login";
        this.service.getNonce()
            .then(function (results) { return _this.nonce = results; });
    }
    AccountLogin.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = "Logging In...";
            this.service.login(this.loginData)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    AccountLogin.prototype.validateForm = function () {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false;
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountLogin.prototype.handleResults = function (results) {
        var _this = this;
        this.disableSubmit = false;
        this.buttonText = "Login";
        if (!results.errors) {
            if (this.platform.is('cordova'))
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
        }
        else if (results.errors) {
            this.functions.showAlert('error', 'invalid username/password');
        }
    };
    AccountLogin.prototype.forgotten = function (loginData) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__forgotten_forgotten__["a" /* AccountForgotten */]);
    };
    AccountLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"LogIn"| translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="account-login">\n\n  <div class="margin">\n\n    <div>\n\n      <img class="w3-container w3-center w3-animate-zoom" src="{{values.avatar}}">\n\n    </div>\n\n    <form #f="ngForm" class="login">\n\n      <ion-list>\n\n        <ion-item>\n\n          <!--ion-label floating>{{"username" | translate}}</ion-label-->\n\n          <ion-input required type="email" [(ngModel)]="loginData.username" name="firstname" placeholder="Username">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <!--ion-label floating>{{"password" | translate}}</ion-label-->\n\n          <ion-input required type="password" [(ngModel)]="loginData.password" name="password" placeholder="Password">\n\n          </ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div class="margin"> \n\n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="login(loginData)">{{"LogIn" | translate}}\n\n        </button>\n\n        <br>\n\n        <button ion-button clear color="button-color" type="submit" class="button button-block button-clear" text-uppercase (click)="forgotten()">{{"Forgot Password" | translate}} ?\n\n        </button>\n\n      </div>\n\n    </form>\n\n<!--    <hr>-->\n\n<!--    <br>-->\n\n<!--    <div class="margin">-->\n\n<!--      <h2>Connect  With : </h2>-->\n\n<!--      <button ion-button block color="primary" type="submit" class="button button-block button-default" [disabled]="disableSubmit" (click)="facebookLogin()">{{"Facebook" | translate}}</button>-->\n\n<!--      <br>-->\n\n<!--      <button ion-button block color="danger" type="submit" class="button button-block button-default" [disabled]="disableSubmit" (click)="gmailLogin()">{{"Google" | translate}}</button>-->\n\n<!--    </div>-->\n\n    <br/>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */]])
    ], AccountLogin);
    return AccountLogin;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotten; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountForgotten = /** @class */ (function () {
    function AccountForgotten(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.reset = "reset";
        this.loadForgotten = null;
        this.forgottenData = [];
        this.service.passwordResetNonce()
            .then(function (results) { return _this.handleNonce(results); });
    }
    AccountForgotten.prototype.forgotten = function (email) {
        var _this = this;
        if (this.validateForm()) {
            this.reset = "resetting...";
            this.disableSubmit = true;
            this.service.passwordreset(email, this.nonce, this.url)
                .then(function (results) { return _this.handleResult(results, email); });
        }
    };
    AccountForgotten.prototype.validateForm = function () {
        if (this.forgottenData.email == undefined || this.forgottenData.email == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountForgotten.prototype.handleNonce = function (results) {
        this.nonce = results.nonce;
        this.url = results.url;
    };
    AccountForgotten.prototype.handleResult = function (results, email) {
        this.reset = "reset";
        this.disableSubmit = false;
        this.functions.showAlert("SUCCESS", "An email with password reset link has been sent to your mail address " + email);
        this.nav.pop();
    };
    AccountForgotten = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\forgotten\forgotten.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <ion-title>{{"ResetPassword" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="forgotten">\n\n  <div class="margin">\n\n    <form #f="ngForm">\n\n      <ion-item>\n\n        <ion-label floating>{{"Enteremailaddress"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="email" [(ngModel)]="forgottenData.email" name="email">\n\n        </ion-input>\n\n      </ion-item>\n\n      <h2>{{"Forgot PasswordReset" | translate}}\n\n      </h2>\n\n      <button ion-button block color="button-color" class="button button-block button-default" [disabled]="disableSubmit" (click)="forgotten(forgottenData.email)">{{reset | translate}}\n\n      </button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\forgotten\forgotten.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountForgotten);
    return AccountForgotten;
}());

//# sourceMappingURL=forgotten.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Address = /** @class */ (function () {
    function Address(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.service.getAddress()
            .then(function (results) {
            _this.addresses = results;
            console.log(_this.addresses);
        });
    }
    Address.prototype.editAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__["a" /* EditAddressForm */], this.addresses);
    };
    Address = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\address\address.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title text-wrap text-center>{{"AddressBook" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="account-address">\n\n<ion-spinner *ngIf="!addresses" name="crescent" style="display:block; margin-left: auto; margin-right:auto; margin-top: 5px; margin-bottom:5px" ></ion-spinner>\n\n   <div *ngIf="addresses" class="address">\n\n      <div *ngIf="addresses.billing">\n\n      <ion-card>\n\n        <ion-card-header style="background-color: #f9f9f9">\n\n          {{"BillingAddress" | translate}}\n\n        </ion-card-header>\n\n        <ion-card-content style="margin-top: 10px">\n\n          {{addresses.billing.first_name}} {{addresses.billing.last_name}}<br *ngIf="addresses.billing.first_name">\n\n          {{addresses.billing.address_1}}<br *ngIf="addresses.billing.address_1">\n\n          {{addresses.billing.address_2}}<br *ngIf="addresses.billing.address_2">\n\n          {{addresses.billing.city}} {{addresses.billing.state}}<br *ngIf="addresses.billing.city">\n\n          {{addresses.billing.phone}}<br *ngIf="addresses.billing.phone">\n\n          {{addresses.billing.email}}<br *ngIf="addresses.billing.email">\n\n          {{addresses.billing.country}} {{addresses.billing.postcode}}<br *ngIf="addresses.billing.postcode">\n\n        </ion-card-content>\n\n      </ion-card>\n\n      </div>\n\n      <div *ngIf="addresses.shipping">\n\n      <ion-card>\n\n        <ion-card-header style="background-color: #f9f9f9">\n\n          {{"ShippingAddress" | translate}}\n\n        </ion-card-header>\n\n        <ion-card-content style="margin-top: 10px">\n\n          {{addresses.shipping.first_name}} {{addresses.shipping.last_name}}<br *ngIf="addresses.shipping.first_name">\n\n          {{addresses.shipping.address_1}}<br *ngIf="addresses.shipping.address_1">\n\n          {{addresses.shipping.address_2}}<br *ngIf="addresses.shipping.address_2">\n\n          {{addresses.shipping.city}} {{addresses.shipping.state}}<br *ngIf="addresses.shipping.city">\n\n          {{addresses.shipping.phone}}<br *ngIf="addresses.shipping.phone">\n\n          {{addresses.shipping.email}}<br *ngIf="addresses.shipping.email">\n\n          {{addresses.shipping.country}} {{addresses.shipping.postcode}}<br>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      </div>\n\n      <div class="margin">\n\n         <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase (click)="editAddress()">{{"EditAddress" | translate}}</button>\n\n      </div>\n\n   </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\address\address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Address);
    return Address;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAddressForm = /** @class */ (function () {
    function EditAddressForm(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.regions = [];
        this.disableSubmit = false;
        this.Save = "Save";
        this.editAddress = params.data;
        console.log(params.data);
        //this.editAddress.shipping = true;
        this.service.getCountry()
            .then(function (results) { return _this.handleContries(results); });
    }
    EditAddressForm.prototype.handleContries = function (results) {
        this.country = results;
        this.billing = this.country.state[this.editAddress.billing.country];
        this.shipping = this.country.state[this.editAddress.shipping.country];
    };
    EditAddressForm.prototype.getBillingRegion = function (countryId) {
        this.billing = this.country.state[countryId];
    };
    EditAddressForm.prototype.getShippingRegion = function (countryId) {
        this.shipping = this.country.state[countryId];
    };
    EditAddressForm.prototype.saveAddress = function () {
        var _this = this;
        this.Save = "Save";
        this.disableSubmit = true;
        if (this.editAddress.shipping) {
            this.editAddress.shipping.first_name = this.editAddress.billing.first_name;
            this.editAddress.shipping.last_name = this.editAddress.billing.last_name;
            this.editAddress.shipping.company = this.editAddress.billing.company;
            this.editAddress.shipping.address_1 = this.editAddress.billing.address_1;
            this.editAddress.shipping.address_2 = this.editAddress.billing.address_2;
            this.editAddress.shipping.city = this.editAddress.billing.city;
            this.editAddress.shipping.country = this.editAddress.billing.country;
            this.editAddress.shipping.state = this.editAddress.billing.state;
            this.editAddress.shipping.postcode = this.editAddress.billing.postcode;
        }
        this.service.saveAddress(this.editAddress)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    EditAddressForm.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Saving...";
        this.nav.pop();
    };
    EditAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\edit-address-form\edit-address-form.html"*/'<ion-header no-border>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Edit Address" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="edit-address-form">\n\n  <div>\n\n    <ion-list>\n\n      <ion-item class="side-heading-background">\n\n        <h2 class="heading-label">{{"Billing Address" | translate}}\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"First Name" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.first_name" name="first_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Last Name"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.last_name" name="last_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <!--ion-item>\n\n        <ion-label floating>{{"Company" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.company" name="company">\n\n        </ion-input>\n\n      </ion-item-->\n\n      <ion-item>\n\n        <ion-label floating>{{"Phone" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.phone" name="phone">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Email" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="email" [(ngModel)]="editAddress.billing.email" name="email">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 1\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.address_1" name="address_1">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 2\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.address_2" name="address_2">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"City" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.city" name="city">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="country">\n\n        <ion-label>  \n\n          {{"Country" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.billing.country" (ngModelChange)="getBillingRegion(editAddress.billing.country)" name="country">\n\n          <div *ngFor="let field of country.country.countries | keys">\n\n            <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="billing_states">\n\n        <ion-label>  \n\n          {{"State" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.billing.state" name="state">\n\n          <div *ngFor="let field of billing_states | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>      \n\n      </ion-item>\n\n      <ion-item *ngIf="!billing_states">\n\n        <ion-label floating>{{"Country" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.state" name="state">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Postcode" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.postcode" name="postcode">\n\n        </ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <ion-item class="side-heading-background">\n\n    <ion-label class="heading-label">{{"Same For Shipping" | translate}}\n\n    </ion-label>\n\n    <ion-toggle color="button-color" checked="true" [(ngModel)]="editAddress.shipping_true" name="subscribe">\n\n    </ion-toggle>\n\n  </ion-item>\n\n  <br>\n\n  <div *ngIf="!editAddress.shipping_true">\n\n    <ion-list>\n\n      <ion-item class="side-heading-background">\n\n        <h2 class="heading-label">{{"Shipping Address" | translate}}\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"First Name" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.first_name" name="firstname">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Last Name"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.last_name" name="last_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Company" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.company" name="company">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 1\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.address_1" name="address_1">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 2\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.address_2" name="address_2">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"City" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.city" name="city">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="country">\n\n        <ion-label>  \n\n          {{"Country" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.shipping.country" (ngModelChange)="getShippingRegion(editAddress.shipping.country)" name="country">\n\n          <div *ngFor="let field of country.country.countries | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="shipping_states">\n\n        <ion-label>  \n\n          {{"State" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.shipping.state" name="state">\n\n          <div *ngFor="let field of shipping_states | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>      \n\n      </ion-item>\n\n      <ion-item *ngIf="!shipping_states">\n\n        <ion-label floating>{{"Country" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.state" name="state">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Postcode" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.postcode" name="postcode">\n\n        </ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div class="margin">\n\n    <button ion-button block color="button-color" type="submit" [disabled]="disableSubmit" class="button button-block button-default" text-uppercase (click)="saveAddress()">{{Save | translate}}\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\edit-address-form\edit-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], EditAddressForm);
    return EditAddressForm;
}());

//# sourceMappingURL=edit-address-form.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Orders = /** @class */ (function () {
    function Orders(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.filter['filter[customer_id]'] = this.values.customerId.toString();
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    }
    Orders.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Orders.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.orders.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Orders.prototype.getOrderDetails = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetails */], id);
    };
    Orders.prototype.cancelOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "cancelled"
            }
        }, id)
            .then(function (results) { return _this.handleCancelOrder(results); });
    };
    Orders.prototype.handleCancelOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been cancelled");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders.prototype.reOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "pending"
            }
        }, id)
            .then(function (results) { return _this.handleReOrder(results); });
    };
    Orders.prototype.handleReOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been placed successfully");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\orders\orders.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title  text-center>{{"LastOrders" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="account-order">\n\n  <ion-spinner *ngIf="!orders" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orders">\n\n\n\n    <div class="no-orders">\n\n    <h4 *ngIf="orders.length == 0" text-center no-lines>\n\n      <button ion-button full clear text-uppercase color="header">{{"Therearenoorders." | translate}}\n\n      </button>\n\n    </h4>\n\n    </div>\n\n\n\n    <div *ngIf="orders.length">\n\n      <ion-item *ngFor="let item of orders">\n\n        <h2>\n\n          <b>{{"OrderNumber" | translate}} :\n\n          </b> {{item.order_number}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Orderdate" | translate}} :\n\n          </b> {{item.created_at | date:\'medium\'}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Shipto" | translate}} :\n\n          </b> {{item.shipping.first_name}} {{item.shipping.last_name}}, {{item.shipping.address_1}}, {{item.shipping.address_2}}, {{item.shipping.city}}, {{item.shipping.state}}, {{item.shipping.country}}, {{item.shipping.postcode}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Status" | translate}} :\n\n          </b> {{item.status}}\n\n        </h2>\n\n        <!--h2>\n\n          <b>{{"Quantity" | translate}} :\n\n          </b> {{item.total_line_items_quantity}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"SubTotal" | translate}} :\n\n          </b> {{1*item.subtotal  }}\n\n        </h2-->\n\n        <h2>\n\n          <b>{{"Totals" | translate}} :\n\n          </b> {{1*item.total  }}\n\n        </h2>\n\n        <ion-row class="row-buttons">\n\n          <ion-col no-padding width-50>\n\n            <button ion-button icon-left clear no-margin color="button-color" small text-uppercase icon-only class="has-icon icon-only" (click)="getOrderDetails(item.id)">\n\n              <ion-icon name="ios-eye">\n\n              </ion-icon>\n\n              {{"ViewDetails" | translate}} \n\n            </button>\n\n          </ion-col>\n\n          <ion-col no-padding width-50>\n\n            <button *ngIf="item.status != \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="cancelOrder(item.id)">		\n\n              <ion-icon ios="ios-close" md="md-close">\n\n              </ion-icon>  		\n\n              {{"Cancel" | translate}} \n\n            </button>\n\n            <button *ngIf="item.status == \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="reOrder(item.id)">\n\n              <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n\n              </ion-icon>		  		\n\n              {{"Reorder" | translate}} \n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </div> \n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n      <ion-infinite-scroll-content\n\n      loadingSpinner="crescent"\n\n      loadingText="{{\'Loading more items..\' | translate}}">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], Orders);
    return Orders;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetails = /** @class */ (function () {
    function OrderDetails(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.id = params.data;
        this.service.getOrder(this.id)
            .then(function (results) { return _this.orderDetails = results; });
    }
    OrderDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\order-details\order-details.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"OrderInfo" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="order-details">\n\n  <ion-spinner *ngIf="!orderDetails" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orderDetails">\n\n    <ion-item-group>\n\n      <ion-item-divider>{{"OrderNumber" | translate }}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.number}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"Date" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.date_created | date:\'medium\'}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"PaymentMethod" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.payment_method_title}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"BillingAddress" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        {{orderDetails.billing.first_name}}\n\n        {{orderDetails.billing.last_name}},\n\n        <br>\n\n        {{orderDetails.billing.email}}\n\n        <br>\n\n        {{orderDetails.billing.phone}}\n\n        <br>\n\n        {{orderDetails.billing.address_1}},\n\n        <br>\n\n        {{orderDetails.billing.address_2}},\n\n        <br>\n\n        {{orderDetails.billing.city}}, \n\n        {{orderDetails.billing.state}}\n\n        <br>\n\n        {{orderDetails.billing.postcode}}\n\n      </ion-item>\n\n      <!--ion-item-divider>{{"ShippingMethod" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.shipping_methods}}\n\n      </ion-item-->\n\n      <ion-item-divider>{{"ShippingAddress" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        {{orderDetails.shipping.first_name}}\n\n        {{orderDetails.shipping.last_name}},\n\n        <br>\n\n        {{orderDetails.shipping.company}}\n\n        <br>\n\n        {{orderDetails.shipping.address_1}},\n\n        <br>\n\n        {{orderDetails.shipping.address_2}},\n\n        <br>\n\n        {{orderDetails.shipping.city}}, \n\n        {{orderDetails.shipping.state}}\n\n        <br>\n\n        {{orderDetails.shipping.country}}\n\n        <br>\n\n        {{orderDetails.shipping.postcode}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"ProductDetails" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item *ngFor="let item of orderDetails.line_items">\n\n        <h2>{{"ProductName" | translate}} : {{item.name}}\n\n        </h2>\n\n        <h2>{{"Price" | translate}} : {{item.price}}\n\n        </h2>\n\n        <h2>{{"Quantity" | translate}} : {{item.quantity}}\n\n        </h2>     \n\n        <h2>{{"SubTotal" | translate}} : {{1*item.subtotal}}\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item-divider>{{"Totals" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col>{{"SubTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{(1*orderDetails.total - 1*orderDetails.shipping_total - 1*orderDetails.total_tax) | currency:values.currency:symbol:\'1.2-2\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col> {{"ShippingTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.shipping_total | currency:values.currency:symbol:\'1.2-2\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"TaxTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.total_tax | currency:values.currency:symbol:\'1.2-2\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row text-uppercase>\n\n          <ion-col>{{"GrandTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.total | currency:values.currency:symbol:\'1.2-2\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], OrderDetails);
    return OrderDetails;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WishlistPage = /** @class */ (function () {
    function WishlistPage(nav, values, params, functions, service) {
        var _this = this;
        this.nav = nav;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.service = service;
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
    }
    WishlistPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.service.deleteItem(id)
            .then(function (results) { return _this.updateWish(results, id); });
    };
    WishlistPage.prototype.updateWish = function (results, id) {
        var _this = this;
        if (results.status == "success") {
            this.service.loadWishlist()
                .then(function (results) { return _this.wishlist = results; });
            this.values.wishlistId.splice(id, 0);
        }
    };
    WishlistPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    WishlistPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            this.service.addToCart(id)
                .then(function (results) { return _this.updateCart(results, id); });
        }
    };
    WishlistPage.prototype.updateCart = function (results, id) {
        var _this = this;
        if (results.error) {
            this.functions.showAlert("ERROR", "Unable to add to Wishlist");
        }
        else {
            this.service.deleteItem(id)
                .then(function (results) { return _this.updateWishlist(results); });
        }
    };
    WishlistPage.prototype.updateWishlist = function (results) {
        var _this = this;
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
        this.functions.showAlert("SUCCESS", "Item has been added to cart");
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\wishlist\wishlist.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Wishlist"| translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n\n        <ion-icon class="ion-ios-cart item-icon">\n\n        </ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="wishlistPage">\n\n\n\n<div *ngIf="wishlist?.error" class="margin">\n\n    <h2>{{"Your wishlist is empty!" | translate}}\n\n    </h2>\n\n</div>\n\n\n\n    <div *ngIf="wishlist">\n\n    <div *ngIf="wishlist.length">\n\n    <div *ngFor="let item of wishlist | keys"  class="wish-list">\n\n\n\n    <ion-item no-lines>\n\n    <ion-thumbnail item-left>\n\n        <img src="{{item.value.image_thumb}}">\n\n    </ion-thumbnail>\n\n\n\n            <h2 wrap-text>{{item.value.name}}\n\n            </h2>\n\n            <h3 wrap-text > {{"Price" | translate}}: {{item.value.price | currency:values.currency:true:\'1.2-2\'}}\n\n            </h3>\n\n\n\n            <ion-row class="add-remove-button">\n\n            <ion-col royal width-50>\n\n\n\n                <button ion-button full color="danger" clear text-uppercase no-padding  item-left no-margin (click)="removeFromWishlist(item.value.id)">\n\n                <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n                 REMOVE\n\n                </button>\n\n            </ion-col>\n\n            <ion-col royal width-50>\n\n                <button ion-button full no-padding no-margin clear text-uppercase item-right (click)="addToCart(item.value.id, item.value.type)">\n\n                <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n\n                  ADD TO CART\n\n                </button>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n    </ion-item>\n\n    </div>\n\n    </div>\n\n    </div>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\account\wishlist\wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__["a" /* WishlistService */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { LoadingController } from 'ionic-angular';




var WishlistService = /** @class */ (function () {
    function WishlistService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    WishlistService.prototype.loadWishlist = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.addToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("quantity", "1");
        params.append("product_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cartData = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(data.cart);
                resolve(_this.cartData);
            });
        });
    };
    WishlistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */]])
    ], WishlistService);
    return WishlistService;
}());

//# sourceMappingURL=wishlist-service.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(390);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_post_post__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_register_register__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_wishlist_wishlist__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_checkout_billing_address_form_billing_address_form__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_order_summary_order_summary__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkout_terms_condition_terms_condition__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_products_products__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_search_search__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_reviews_reviews__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_memberpromo_memberpromo__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notifications__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_storage__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_service_cart_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_service_wishlist_service__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_service_category_service__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_service_checkout_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_service_config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_service_product_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_service_search_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_pipe_pipe__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_photo_viewer__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_call_number__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_email_composer__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_app_rate__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_social_sharing__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_common_http__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ngx_translate_core__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ngx_translate_http_loader__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_onesignal__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_facebook__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_google_plus__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























/*------------------------Providers----------------------------------*/





























function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_47__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_8__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_20__pages_reviews_reviews__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_21__pages_memberpromo_memberpromo__["a" /* MemberpromoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_38__providers_pipe_pipe__["a" /* KeysPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_44__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_45__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signreferral/signreferral.module#SignreferralPageModule', name: 'SignreferralPage', segment: 'signreferral', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whatsapplink/whatsapplink.module#WhatsapplinkPageModule', name: 'WhatsapplinkPage', segment: 'whatsapplink', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_46__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_46__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_44__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_8__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_reviews_reviews__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_memberpromo_memberpromo__["a" /* MemberpromoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_search_search__["a" /* SearchPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__providers_service_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_29__providers_service_wishlist_service__["a" /* WishlistService */],
                __WEBPACK_IMPORTED_MODULE_30__providers_service_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_31__providers_service_checkout_service__["a" /* CheckoutService */],
                __WEBPACK_IMPORTED_MODULE_32__providers_service_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_33__providers_service_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_34__providers_service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_35__providers_service_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_36__providers_service_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_37__providers_service_values__["a" /* Values */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_billing_address_form_billing_address_form__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartPage = /** @class */ (function () {
    function CartPage(nav, service, values, params, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.addProduct = true;
        this.disableSubmit = false;
        this.buttonCoupon = false;
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.Checkout = "Checkout";
        this.quantity = 1;
        this.options = [];
        this.obj = params.data;
        this.service.loadCart()
            .then(function (results) { return _this.handleCartInit(results); });
    }
    CartPage.prototype.handleCartInit = function (results) {
        this.cart = results;
        this.shipping = results.zone_shipping;
        this.chosen_shipping = results.chosen_shipping;
    };
    CartPage.prototype.handleCart = function (results) {
        this.cart = results;
    };
    CartPage.prototype.delete = function (key) {
        var _this = this;
        this.service.deleteItem(key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.disableSubmit = true;
        this.Checkout = "PleaseWait";
        this.service.checkout()
            .then(function (results) { return _this.handleBilling(results); });
    };
    CartPage.prototype.handleBilling = function (results) {
        this.disableSubmit = false;
        this.Checkout = "Checkout";
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */], results);
    };
    CartPage.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        if (Object.keys(this.cart.cart_contents).length == 1) {
            if (this.cart.cart_contents[key].quantity == 1) {
                this.cart.cart_contents = {};
                console.log(this.cart);
            }
            ;
        }
        this.service.deleteFromCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.addToCart = function (id, key) {
        var _this = this;
        this.service.addToCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.updateCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleAddToCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.submitCoupon = function () {
        var _this = this;
        if (this.cart.coupon != undefined) {
            this.disableSubmitCoupon = true;
            this.Apply = "Apply";
            this.service.submitCoupon(this.cart.coupon)
                .then(function (results) { return _this.handleCoupon(results); });
        }
    };
    CartPage.prototype.removeCoupon = function () {
        var _this = this;
        this.service.removeCoupon(this.cart.applied_coupons)
            .then(function (results) { return _this.handleCoupon(results); });
    };
    CartPage.prototype.handleCoupon = function (results) {
        var _this = this;
        console.log(results);
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.functions.showAlert("STATUS", results._body);
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleResults = function (a) {
        if (a.message.status == 'success') {
            this.functions.showAlert(a.message.status, a.message.text);
        }
        else {
            this.functions.showAlert(a.message.status, a.message.text);
        }
    };
    CartPage.prototype.updateShipping = function (method) {
        var _this = this;
        this.chosen_shipping = method;
        this.service.updateShipping(method)
            .then(function (results) { return _this.handleShipping(results); });
    };
    CartPage.prototype.gohome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* Home */]);
    };
    CartPage.prototype.handleShipping = function (results) {
        this.cart = results;
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\cart\cart.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Cart"| translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only light class="has-icon icon-only has-badge">\n\n        <ion-icon name="md-basket" class="item-icon">\n\n        </ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="cart">\n\n  <ion-spinner *ngIf="!cart" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="cart">\n\n        <div class="empty" *ngIf="cart.cart_contents.length == 0"> \n\n            <ion-icon name="md-basket"></ion-icon>\n\n            <h4 color="side-heading-color" text-center no-lines>{{"Your cart is empty" | translate}}!</h4>\n\n            <h5 text-center no-lines>{{"Add some products available in our menu to checkout" | translate}}</h5> \n\n            <button ion-button class="butt" item-center medium color="button-color" text-uppercase (click)="gohome()">{{"Continue Shopping" | translate}}</button> \n\n        </div>\n\n    <div *ngIf="cart?.cart_contents">\n\n\n\n      <div class="cart-items">\n\n      <ion-list>\n\n        <div class="cart-list" *ngFor="let item of cart.cart_contents | keys">\n\n          <ion-item no-lines *ngIf="item.value.quantity != 0">\n\n            <ion-thumbnail item-left>\n\n              <img src="{{item.value.thumb}}">\n\n            </ion-thumbnail>\n\n            <h2 wrap-text>{{item.value.name}}\n\n            </h2>\n\n            <h3 wrap-text > {{"Price" | translate}}: {{item.value.price | currency:values.currency:true:\'1.2-2\'}}\n\n            </h3>\n\n            <h3 wrap-text> {{"Totals" | translate}}: {{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'  }}\n\n            </h3>\n\n            <a (click)="delete( item.key )">\n\n              <ion-icon name="trash">\n\n              </ion-icon>\n\n            </a>\n\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="deleteFromCart(item.value.product_id, item.key)">\n\n              <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n\n              </ion-icon>\n\n            </button>\n\n            <button ion-button item-right color="button-color" clear>{{item.value.quantity}}\n\n            </button>\n\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="addToCart(item.value.product_id, item.key)">\n\n              <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n\n              </ion-icon>\n\n            </button>\n\n          </ion-item>\n\n        </div>\n\n      </ion-list>\n\n      </div>\n\n\n\n      <div *ngIf="cart.cart_contents.length != 0">\n\n        <ion-list *ngIf="shipping" no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateShipping(chosen_shipping)" class="shipping-methods">\n\n          <ion-item-divider>\n\n            <h2>{{"Select shipping method" | translate}}\n\n            </h2>\n\n          </ion-item-divider>\n\n          <ion-item *ngFor="let method of shipping | keys" >\n\n            <ion-label>{{method.value.method_title}} \n\n              <span *ngIf="method.value.cost">{{ 1*method.value.cost | currency:values.currency:true:\'1.2-2\'}}\n\n              </span> \n\n            </ion-label>\n\n            <ion-radio value="{{method.value.id + \':\' + method.value.instance_id}}" >\n\n            </ion-radio>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <form #f="ngForm" class="coupon">\n\n          <ion-item>\n\n            <ion-label>{{"Coupon Code" | translate}}</ion-label>\n\n            <ion-input type="text" [(ngModel)]="cart.coupon" name="coupon">\n\n            </ion-input>\n\n            <h2 item-right>\n\n              <button ion-button color="button-color" block type="submit" text-uppercase [disabled]=\'disableSubmitCoupon\' (click)="submitCoupon()"> {{Apply | translate}}\n\n              </button>\n\n            </h2>\n\n          </ion-item>\n\n        </form>\n\n\n\n        <ion-list class="totals" *ngIf="cart.cart_totals">\n\n          <!--ion-item-divider>\n\n            <h2>{{"Totals" | translate}}\n\n            </h2>\n\n          </ion-item-divider-->\n\n          <ion-row>\n\n            <ion-col width-75>\n\n              <ion-label>{{"SubTotal" | translate}}\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label>{{1*cart.cart_totals.subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>  \n\n\n\n          <ion-row *ngIf="cart.cart_totals.cart_contents_total != 0">\n\n            <ion-col width-75>\n\n              <ion-label>{{"Subtotal ex tax" | translate}}\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label>{{1*cart.cart_totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>  \n\n\n\n          <ion-row *ngIf="cart.cart_totals.tax_total != 0">\n\n            <ion-col width-75>\n\n              <ion-label>{{"Tax total" | translate}}\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label>{{1*cart.cart_totals.total_tax | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="cart.cart_totals.discount_total && cart.cart_totals.discount_total != 0"> \n\n            <ion-col width-75 class="remove-coupon">\n\n              <ion-label>{{"Coupons" | translate}} - {{cart.applied_coupons}} \n\n                <a (click)="removeCoupon()"> (Remove)\n\n                </a>\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label>- {{1*cart.cart_totals.discount_total | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="cart.cart_totals.shipping_total != 0"> \n\n            <ion-col width-75>\n\n              <ion-label>{{"Shipping" | translate}}\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label >{{1*cart.cart_totals.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col width-75>\n\n              <ion-label>\n\n                <b> {{"Grand Total" | translate}}\n\n                </b>\n\n              </ion-label>\n\n            </ion-col >\n\n            <ion-col width-25 text-right>\n\n              <ion-label>{{1*cart.cart_totals.total | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </ion-list>\n\n        \n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<div *ngIf="cart">\n\n  <ion-footer *ngIf="cart.cart_contents.length != 0">\n\n    <button ion-button full class="btn-checkout" color="button-color" no-padding no-margin text-uppercase [disabled]=\'disableSubmit\' (click)="checkout()">{{Checkout | translate}}\n\n    </button>\n\n  </ion-footer>\n\n</div>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reviews_reviews__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProductPage = /** @class */ (function () {
    function ProductPage(iab, photoViewer, modalCtrl, nav, service, params, functions, values, toastCtrl, socialSharing, loadingCtrl) {
        var _this = this;
        this.iab = iab;
        this.photoViewer = photoViewer;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.toastCtrl = toastCtrl;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.options = {};
        this.disableSubmit = false;
        this.wishlistIcon = false;
        this.moreDescription = false;
        this.disableBuyNow = false;
        this.filter = {};
        this.usedVariationAttributes = [];
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        if (params.data.id) {
            this.product = params.data;
            this.usedVariationAttributes = this.product.attributes.filter(function (attribute) { return attribute.variation == true; });
            this.id = params.data.id;
            this.options.product_id = this.id;
            if ((this.product.type == 'variable') && this.product.variations.length)
                this.getVariationProducts();
            this.getRelatedProducts();
            this.getUpsellProducts();
            this.getCrossSellProducts();
            this.getReviews();
        }
        else {
            this.id = params.data;
            this.options.product_id = this.id;
            this.service.getProduct(this.id)
                .then(function (results) { return _this.handleProductResults(results); });
        }
        this.quantity = 1;
        this.AddToCart = "Add To Cart";
    }
    ProductPage_1 = ProductPage;
    ProductPage.prototype.handleProductResults = function (results) {
        this.product = results;
        this.usedVariationAttributes = this.product.attributes.filter(function (attribute) { return attribute.variation == true; });
        if ((this.product.type == 'variable') && this.product.variations.length)
            this.getVariationProducts();
        this.getRelatedProducts();
        this.getUpsellProducts();
        this.getCrossSellProducts();
        this.getReviews();
    };
    ProductPage.prototype.external = function (url) {
        var options = "location=yes,hidden=no,toolbar=yes";
        var browser = this.iab.create(url, '_blank', options);
        browser.show();
    };
    ProductPage.prototype.getVariationProducts = function () {
        var _this = this;
        this.service.getVariationProducts(this.product.id).then(function (results) { return _this.variations = results; });
    };
    ProductPage.prototype.getProduct = function (item) {
        this.nav.push(ProductPage_1, item);
    };
    ProductPage.prototype.addToCart = function (id) {
        var _this = this;
        if (this.setVariations()) {
            this.service.addToCart(this.options).then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductPage.prototype.buyNow = function (id) {
        var _this = this;
        if (this.setVariations()) {
            this.service.addToCart(this.options).then(function (results) { return _this.updateBuynowResults(results); });
        }
    };
    ProductPage.prototype.setVariations = function () {
        var _this = this;
        this.product.attributes.forEach(function (item) {
            if (item.selected) {
                _this.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
        });
        for (var i = 0; i < this.product.attributes.length; i++) {
            if (this.product.attributes[i].variation && this.product.attributes[i].selected == undefined) {
                this.functions.showAlert('Options', 'Please Select Product ' + this.product.attributes[i].name + ' Option');
                return false;
            }
        }
        return true;
    };
    ProductPage.prototype.updateBuynowResults = function (a) {
        this.disableBuyNow = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.updateCart = function (a) {
        this.disableSubmit = false;
        this.values.count += parseInt(this.quantity);
        this.AddToCart = "Add To Cart";
        this.presentToast();
    };
    ProductPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.getReviews = function () {
        var _this = this;
        this.service.getReviews(this.id).then(function (results) { return _this.handleReview(results); });
    };
    ProductPage.prototype.handleReview = function (result) {
        this.reviews = result;
        for (var item in this.reviews) {
            this.reviews[item].avatar = Object(__WEBPACK_IMPORTED_MODULE_5__md5__["a" /* md5 */])(this.reviews[item].email);
        }
    };
    ProductPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.service.addToWishlist(id).then(function (results) { return _this.update(results); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    ProductPage.prototype.update = function (a) {
        if (a.success == "Success") {
            this.values.wishlistId[this.product.id] = true;
            this.presentToastAddToWishlist();
        }
        else {
            this.functions.showAlert("error", "error");
        }
    };
    ProductPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductPage.prototype.showMore = function () {
        this.moreDescription = true;
    };
    ProductPage.prototype.showLess = function () {
        this.moreDescription = false;
    };
    ProductPage.prototype.getRelatedProduct = function (item) {
        this.nav.push(ProductPage_1, item);
    };
    ProductPage.prototype.getRelatedProducts = function () {
        var _this = this;
        if (this.product.related_ids != 0) {
            for (var item in this.product.related_ids)
                this.filter['include[' + item + ']'] = this.product.related_ids[item];
            this.service.getRelatedProducts(this.filter)
                .then(function (results) { return _this.related = results; });
        }
    };
    ProductPage.prototype.getUpsellProducts = function () {
        var _this = this;
        if (this.product.upsell_ids != 0) {
            for (var item in this.product.upsell_ids)
                this.filter['include[' + item + ']'] = this.product.upsell_ids[item];
            this.service.getUpsellProducts(this.filter)
                .then(function (results) { return _this.upsell = results; });
        }
    };
    ProductPage.prototype.getCrossSellProducts = function () {
        var _this = this;
        if (this.product.cross_sell_ids != 0) {
            for (var item in this.product.cross_sell_ids)
                this.filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
            this.service.getCrossSellProducts(this.filter)
                .then(function (results) { return _this.crossSell = results; });
        }
    };
    ProductPage.prototype.showMoreReviews = function (productName, count, rating) {
        this.items = [];
        this.items.reviews = {};
        this.items.id = this.id;
        this.items.count = count;
        this.items.rating = rating;
        this.items.name = productName;
        this.items.reviews = this.reviews;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__reviews_reviews__["a" /* ReviewPage */], this.items);
        modal.present();
    };
    ProductPage.prototype.viewPhotos = function (image) {
        this.photoViewer.show(image);
    };
    ProductPage.prototype.viewPhoto = function (index) {
        this.slides.slideTo(index + 1, 500);
    };
    ProductPage.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    ProductPage.prototype.presentToastAddToWishlist = function () {
        var toast = this.toastCtrl.create({
            message: 'Item added to wishlist',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    ProductPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Item added to cart',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    ProductPage.prototype.share = function (product, network, fab) {
        var options = {
            message: 'Hey check this product',
            subject: product.title,
            files: ['', ''],
            url: product.permalink,
            chooserTitle: 'Pick an app'
        };
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
        this.socialSharing.shareWithOptions(options);
    };
    ProductPage.prototype.chooseVariation = function (att, value) {
        var _this = this;
        this.product.attributes.forEach(function (item) {
            if (item.name == att.name) {
                item.selected = value;
            }
        });
        this.variations.forEach(function (variation) {
            var test = new Array(_this.usedVariationAttributes.length);
            test.fill(false);
            _this.usedVariationAttributes.forEach(function (attribute) {
                if (variation.attributes.length == 0) {
                    _this.options.variation_id = variation.id;
                    _this.product.in_stock = variation.in_stock;
                    _this.product.price = variation.price;
                    _this.product.sale_price = variation.sale_price;
                    _this.product.regular_price = variation.regular_price;
                }
                else {
                    variation.attributes.forEach(function (item, index) {
                        if (item.name == attribute.name && item.option == attribute.selected) {
                            test[index] = true;
                        }
                    });
                    if (test.every(function (v) { return v == true; })) {
                        _this.options.variation_id = variation.id;
                        _this.product.in_stock = variation.in_stock;
                        _this.product.price = variation.price;
                        _this.product.sale_price = variation.sale_price;
                        _this.product.regular_price = variation.regular_price;
                        test.fill(false);
                    }
                    ;
                }
            });
        });
    };
    ProductPage.prototype.openModal = function () {
        var whatsappModal = this.modalCtrl.create('WhatsapplinkPage');
        whatsappModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ProductPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], ProductPage.prototype, "slides", void 0);
    ProductPage = ProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\product\product.html"*/'<ion-header class="product-header">\n\n    <ion-navbar color="header">\n\n        <ion-title *ngIf="product?.name">\n\n            <h2 [innerHTML]="product.name" style="font-size: 18px;margin: 0"></h2>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n\n\n        <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="share(product)">\n\n        <ion-icon name="ios-share-outline">\n\n        </ion-icon>\n\n        </button> \n\n\n\n        <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n\n        <ion-icon color="icon-color" name="md-basket">\n\n        </ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n\n        </ion-badge>\n\n      </button> </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="product-page" #pageContent>\n\n    <div class="spinner center-spinner"><ion-spinner *ngIf="!product" name="crescent"> </ion-spinner></div>\n\n\n\n    <ion-fab bottom right>\n\n        <button ion-fab color="secondary" (click)="openModal()">\n\n           <ion-icon name="logo-whatsapp"></ion-icon>\n\n        </button>\n\n     </ion-fab>\n\n\n\n    <div class="product-details">\n\n\n\n        <div class="header-image">\n\n        <div *ngIf="product && product?.images?.length">\n\n            <ion-slides pager="true" loop="true" autoplay="5800">\n\n                <ion-slide *ngFor="let item of product.images"> <img [style.height.px]="values.dimensions.imageProductViewHeight" src="{{item.src}}" (click)="viewPhotos(item.src)"> </ion-slide>\n\n            </ion-slides>\n\n\n\n        <!--div class="scrollmenu2">\n\n          <a *ngFor="let item of product.images; let i = index">\n\n            <img src="{{item.src}}" (click)="viewPhoto(i)"/>\n\n          </a>\n\n        </div-->\n\n\n\n        </div>\n\n\n\n        <div *ngIf="product && !product?.images?.length" class="header-image">\n\n            <ion-slides pager="true" loop="true" autoplay="5800">\n\n                <ion-slide> <img src="assets/image/500.png"> </ion-slide>\n\n            </ion-slides>\n\n        </div>\n\n    </div>\n\n<div class="main-content">\n\n    <div *ngIf="product">\n\n         <!--button ion-button clear *ngIf="product.stock_status == \'outofstock\'" item-left class="stock" color="danger">{{"No Stock" | translate}}\n\n      </button-->\n\n\n\n\n\n        <div class="body-index">\n\n            <ion-label class="product-name" [innerHTML]="product.name" text-wrap></ion-label>\n\n            <ion-item class="price-label" no-lines style="padding-right: 0 !important">\n\n                <span class="regular_price" *ngIf="!product.sale_price">{{product.price | currency:values.currency:true:\'1.2-2\'}} </span>\n\n                <span class="regular_price" *ngIf="product.sale_price">{{product.sale_price | currency:values.currency:true:\'1.2-2\'}} </span>\n\n                <span class="regular_price" *ngIf="product.sale_price"><del>{{product.regular_price | currency:values.currency:true:\'1.2-2\'}}</del> <span class="offer">{{(product.regular_price - product.sale_price) /product.regular_price*100 | number : \'1.0-0\'}}% OFF</span> </span>\n\n            \n\n\n\n\n\n        <div class="button-in-stock"><button ion-button clear *ngIf="values.wishlistId[product.id]" item-right class="wishlist1" color="danger">\n\n      <ion-icon name="md-heart"  (click)="removeFromWishlist(product.id)"></ion-icon>\n\n      </button> <button ion-button clear *ngIf="!values.wishlistId[product.id]" item-right class="wishlist2" color="danger">\n\n      <ion-icon name="md-heart-outline"  (click)="addToWishlist(product.id)"></ion-icon>\n\n      </button> </div>\n\n\n\n      </ion-item>\n\n\n\n            \n\n\n\n            <!--variation product starts-->\n\n            <div class="variation-block" *ngIf="variations">\n\n                <div *ngFor="let attribute of usedVariationAttributes" class="variation-product">                 \n\n                    <div *ngIf="attribute.options.length" class="option-box">\n\n                        <button class="option-button" ion-button outline color="light" *ngFor="let option of attribute.options" (click)="chooseVariation(attribute, option)" [ngClass]="{\'selected-option\': attribute.selected == option}">{{option}}</button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n            <!--ion-grid class="add-to-cart">\n\n                <ion-row>\n\n                    <ion-col width-50 class="col1">\n\n                        <ion-item>\n\n                        <ion-label>{{"Quantity" | translate}}</ion-label>\n\n                        <ion-input required type="number" [(ngModel)]="quantity" min="1" name="quantity"></ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <button ion-button full text-uppercase color="button-color" *ngIf="product.type != \'external\'" [disabled]="disableSubmit || product.stock_status == \'outofstock\'" (click)="addToCart(product.id)" style="margin: 0;width: 100%; min-height: 50px;">\n\n                        {{AddToCart | translate}}\n\n                        </button>\n\n\n\n                        <button ion-button full text-uppercase color="button-color" *ngIf="product.type == \'external\'" (click)="external(product.external_url)" style="margin: 0;width: 100%; min-height: 50px;">\n\n                        {{"Buy Now" | translate}}\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid-->\n\n\n\n\n\n            <!--div class="quantity">\n\n            <ion-item>\n\n            <ion-label>{{"Quantity" | translate}}</ion-label>\n\n            <ion-input required type="number" [(ngModel)]="quantity" min="1" name="quantity"></ion-input>\n\n            </ion-item>\n\n            </div-->\n\n\n\n\n\n                <ion-grid class="add-to-cart" *ngIf="product.type == \'external\'">\n\n                    <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == \'outofstock\'" (click)="external(product?.external_url)" style="margin: 0;width: 100%; min-height: 50px; color: white; box-shadow: none;">\n\n                    {{"Buy now" | translate}}\n\n                    </button>\n\n                </ion-grid>\n\n\n\n                <ion-grid class="add-to-cart" *ngIf="product.type != \'external\'">\n\n                    <ion-row>\n\n                        <ion-col width-50>\n\n                            <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == \'outofstock\'" (click)="buyNow(product.id)" style="margin: 0;width: 100%; min-height: 50px;background-color: #E13635; color: white; box-shadow: none;">\n\n                            {{"Buy now" | translate}}\n\n                            </button>\n\n                        </ion-col>\n\n                        <ion-col width-50>\n\n                            <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == \'outofstock\'" (click)="addToCart(product.id)" style="margin: 0;width: 100%; min-height: 50px;box-shadow: none;">\n\n                            {{AddToCart | translate}}\n\n                            </button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n\n\n            <div *ngIf="product?.short_description" class="description">\n\n                <div class="devider"></div>\n\n                <ion-item no-lines class="item-background"> {{"Description" | translate}} </ion-item>\n\n                <ion-item text-wrap no-lines>\n\n                    <div [innerHTML]="product.short_description"> </div>\n\n                </ion-item>\n\n            </div>\n\n            <div *ngIf="product?.description" class="description">\n\n                <ion-item text-wrap no-lines>\n\n                    <div [innerHTML]="product.description"> </div>\n\n                </ion-item>\n\n            </div>\n\n            <!--ion-item no-lines class="show-more" *ngIf="!moreDescription && product.short_description">\n\n                <h2 (click)="showMore()"><span class="span1">{{"Read more" | translate}}</span><span class="span2"><ion-icon name="ios-more"></ion-icon></span></h2>\n\n            </ion-item>\n\n            <ion-item no-lines class="show-more" *ngIf="moreDescription">\n\n                <h2 (click)="showLess()"><span class="span1">{{"Read less" | translate}}</span></h2>\n\n            </ion-item-->\n\n            \n\n            <div *ngIf="related?.length" class="related-products">\n\n                <div class="devider"></div>\n\n                <ion-item *ngIf="related" class="related-item-name"> {{"Related Products" | translate}} </ion-item>\n\n                <div class="scroll-related-products">\n\n                    <a [style.width.%]="values.dimensions.productSliderWidth" *ngFor="let item of related">\n\n                        <ion-card>\n\n                            <ion-card-content (click)="getRelatedProduct(item)"> <img [style.height.px]="values.dimensions.scrollProductHeight" src="{{item?.images[0]?.src}}" /> </ion-card-content>\n\n                            <h5>{{item.name}}</h5>\n\n                            <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span *ngIf="item.sale_price">\n\n            <del class="price-delete">{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </del>\n\n            </span> </ion-label>\n\n                        </ion-card>\n\n                    </a>\n\n                </div>\n\n            </div>\n\n            <div *ngIf="upsell?.length" class="related-products">\n\n                <div class="devider"></div>\n\n                <ion-item *ngIf="upsell" class="related-item-name"> {{"You may also like" | translate}} </ion-item>\n\n                <div class="scroll-related-products">\n\n                    <a [style.width.%]="values.dimensions.productSliderWidth" *ngFor="let item of upsell">\n\n                        <ion-card>\n\n                            <ion-card-content (click)="getRelatedProduct(item)"> <img [style.height.px]="values.dimensions.scrollProductHeight" src="{{item?.images[0]?.src}}" /> </ion-card-content>\n\n                            <h5>{{item.name}}</h5>\n\n                            <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span *ngIf="item.sale_price">\n\n            <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </del>\n\n            </span> </ion-label>\n\n                        </ion-card>\n\n                    </a>\n\n                </div>\n\n            </div>\n\n            <div *ngIf="crossSell?.length" class="related-products">\n\n                <div class="devider"></div>\n\n                <ion-item *ngIf="crossSell" class="related-item-name"> {{"Recommended Products" | translate}} </ion-item>\n\n                <div class="scroll-related-products">\n\n                    <a [style.width.%]="values.dimensions.productSliderWidth" *ngFor="let item of crossSell">\n\n                        <ion-card>\n\n                            <ion-card-content (click)="getRelatedProduct(item)"> <img [style.height.px]="values.dimensions.scrollProductHeight" src="{{item?.images[0]?.src}}" /> </ion-card-content>\n\n                            <h5>{{item.name}}</h5>\n\n                            <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n              </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n              </span> <span *ngIf="item.sale_price">\n\n              <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n              </del>\n\n              </span> </ion-label>\n\n                        </ion-card>\n\n                    </a>\n\n                </div>\n\n            </div>\n\n            <div *ngIf="reviews?.length" style="margin-top: 5px;">\n\n                <div class="devider"></div>\n\n                <ion-item *ngIf="reviews" class="item-background"> {{"Reviews" | translate}} </ion-item>\n\n                <div *ngFor="let item of reviews | slice:0:2; let i=index" class="reviews">\n\n                    <ion-item no-lines>\n\n                        <ion-avatar item-start style="margin:8px"> <img src="https://www.gravatar.com/avatar/{{item.avatar}}"> </ion-avatar>\n\n                        <h3 style="margin-bottom:6px;font-size:15px">{{item.name}} <span class="rating review-star">\n\n             <span class="star-icon" [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}">&#x2605;</span> </span>\n\n                        </h3>\n\n                        <h3 style="color:#9e9898;margin-bottom:4px">{{item.date_created | date:\'MMM d, y hh:mm a\'}}</h3>\n\n                    </ion-item>\n\n                    <p text-wrap>{{item.review}}</p>\n\n                </div>\n\n                <ion-item no-lines class="show-more">\n\n                    <h2 (click)="showMoreReviews(product.name, product.rating_count, product.average_rating)"><span class="span1">{{"Show more" | translate}}</span><span class="span2"><ion-icon name="ios-more"></ion-icon></span></h2>\n\n                </ion-item>\n\n            </div>\n\n        </div>\n\n        </div>\n\n        </div>\n\n    </div> </ion-content>'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\product\product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ProductPage);
    return ProductPage;
    var ProductPage_1;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__memberpromo_memberpromo__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifications_notifications__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_register_register__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_post__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var Home = /** @class */ (function () {
    function Home(toastCtrl, nav, service, myModal, values) {
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.service = service;
        this.myModal = myModal;
        this.values = values;
        this.has_more_items = true;
        this.loading = true;
        this.pet = "mallitem";
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
        this.options = [];
        this.service.getProducts();
    }
    Home.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.load().then(function (results) {
            _this.handleService(results);
            refresher.complete();
        });
    };
    Home.prototype.handleService = function (results) {
        // 
    };
    Home.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
    };
    Home.prototype.getPromo = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__memberpromo_memberpromo__["a" /* MemberpromoPage */]);
    };
    Home.prototype.register = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__account_register_register__["a" /* AccountRegister */]);
    };
    Home.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    Home.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    Home.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    Home.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    Home.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    Home.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    Home.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    Home.prototype.getNoti = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__notifications_notifications__["a" /* NotificationsPage */]);
    };
    Home.prototype.getId = function () {
        var i;
        if (this.options.length >= 1)
            var resa = this.options[0].split(":");
        if (this.options.length >= 2)
            var resb = this.options[1].split(":");
        if (this.options.length >= 1)
            for (i = 0; i < this.product.product.variations.length; i++) {
                if (this.product.product.variations[i].attributes[0].option == resa[1]) {
                    if (this.options.length == 1) {
                        break;
                    }
                    else if (this.product.product.variations[i].attributes[1].option == resb[1]) {
                        break;
                    }
                }
            }
    };
    Home.prototype.goto = function (data) {
        var _this = this;
        if (data.description == "product") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], data.url);
        }
        else if (data.description == "category") {
            this.items.id = data.url;
            this.items.name = data.title;
            this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(_this.items.id); });
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
        }
        else if (data.description == "post") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_11__post_post__["a" /* Post */], data.url);
        }
    };
    Home.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.service.loadMore().then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Home.prototype.handleMore = function (results, infiniteScroll) {
        if (!results) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Home.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], item);
    };
    Home.prototype.hideLoading = function () {
        this.loading = false;
    };
    Home.prototype.getSubCategories = function (id) {
        var results = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        return results;
    };
    Home.prototype.openModal = function () {
        var whatsappModal = this.myModal.create('WhatsapplinkPage');
        whatsappModal.present();
    };
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\home\home.html"*/'<ion-header class="home-header">\n\n   <ion-navbar color="header">\n\n      <button ion-button menuToggle>\n\n         <ion-icon name="menu">\n\n         </ion-icon>\n\n      </button>\n\n      <ion-title><img src="assets/image/logo_white.png"> \n\n      </ion-title>\n\n      <ion-buttons end>\n\n         <!-- <button ion-button icon-only class="has-icon icon-only has-badge" (click)="getNoti()">\n\n            <ion-icon color="icon-color" ios="ios-notifications" md="md-notifications">\n\n            </ion-icon>\n\n            <ion-badge class="badge badge-light">3</ion-badge>\n\n         </button> -->\n\n         <button ion-button icon-only class="has-icon icon-only has-badge" (click)="getCart()">\n\n            <ion-icon color="icon-color" name="md-basket">\n\n            </ion-icon>\n\n            <ion-badge class="badge badge-light" *ngIf="values.count != 0">{{values.count}}\n\n            </ion-badge>\n\n         </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n<ion-content class="home">\n\n      <div *ngIf="!values.isLoggedIn" (click)="register()" class="register_style">\n\n         <!-- <ion-icon name="information-circle"></ion-icon> --><strong>Be Part Of As</strong><br />\n\n         Register Now! Click here to buy Hot Items.\n\n      </div>\n\n      <div *ngIf="values.isLoggedIn" class="member_offers_style">\n\n         <!-- <ion-icon name="star"></ion-icon>-->Welcome {{values.customerName}}!<br />\n\n         Enjoy the Best Promotion at Hot Items\n\n      </div>\n\n   <ion-refresher *ngIf="values.settings.pull_to_refresh == \'1\'" (ionRefresh)="doRefresh($event)">\n\n   <ion-refresher-content></ion-refresher-content>\n\n   </ion-refresher>\n\n   <ion-fab bottom right>\n\n      <button ion-fab color="secondary" (click)="openModal()">\n\n         <ion-icon name="logo-whatsapp"></ion-icon>\n\n      </button>\n\n   </ion-fab>\n\n   <div class="spinner center-spinner">\n\n      <ion-spinner *ngIf="loading" name="crescent"> </ion-spinner>\n\n   </div>\n\n   <div *ngFor="let children of service?.blocks" hideWhen="loading" class="blocks">\n\n      <ion-grid>\n\n            <div *ngIf="children.block_type == \'banner_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" class="banner_block">\n\n         <ion-row>\n\n            <ion-col col-12>\n\n               <!-- <div class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div> -->\n\n               <!-- Banner Slider -->\n\n               <div *ngIf="children.children?.length && children.style == \'slider\'">\n\n                  <ion-slides pager="true" loop="true" autoplay="5800">\n\n                     <ion-slide *ngFor="let image of children.children"> \n\n                        <img src="{{image.image}}" (click)="goto(image)" (load)="hideLoading()" [style.border-radius]="children.border_radius">\n\n                     </ion-slide>\n\n                  </ion-slides>\n\n               </div>\n\n            </ion-col>\n\n            <!-- <ion-col col-6>\n\n               <div class="non_member_banner" *ngIf="!values.isLoggedIn" (click)="register()">\n\n                  <img src="assets/image/banner-member-signup.jpg">\n\n               </div>\n\n               <div class="member_banner" *ngIf="values.isLoggedIn" (click)="getPromo()">\n\n                  <img src="assets/image/banner-member-buy.jpg">\n\n               </div>\n\n            </ion-col> -->\n\n         </ion-row>\n\n      </div>\n\n      </ion-grid>\n\n   </div>\n\n   <!--flash sale-->\n\n   <ion-segment [(ngModel)]="pet">\n\n      <ion-segment-button value="mallitem">\n\n        Mall Items\n\n      </ion-segment-button>\n\n      <ion-segment-button value="hotitem">\n\n        Hot Items\n\n      </ion-segment-button>\n\n   </ion-segment>\n\n\n\n    <div [ngSwitch]="pet">\n\n      <div *ngSwitchCase="\'mallitem\'">\n\n            <div *ngIf="service.products" class="products-listing">\n\n                  <!--ion-item no-lines class="item-name">\n\n                     <ion-label>{{"Latest Products" | translate}} </ion-label>\n\n                     </ion-item-->\n\n                  <div class="grid">\n\n                     <ion-row class="row unlimited-items">\n\n                        <ion-col class="col" *ngFor="let item of service.products">\n\n                           <ion-card>\n\n                              <ion-card-content>\n\n                                 <img [style.height.px]="values.dimensions.imageGridViewHeight" tappable src="{{item?.images[0]?.src}}" (load)="hideLoading()" (click)="getProduct(item)"> \n\n                                 <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n                                 </button>\n\n                                 <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                                 <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                                 <div *ngIf="item.stock_status == \'instock\'">\n\n                                    <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                                 </div>\n\n                              </ion-card-content>\n\n                              <div tappable (click)="getProduct(item)" class="card-name">\n\n                                 <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n                                 <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n                              </div>\n\n                              <ion-label> \n\n                                 <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                 </span> \n\n                                 <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                 </span>\n\n                                 <span class="price-delete" *ngIf="item.sale_price">\n\n                                 <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                 </del>\n\n                                 </span>  \n\n                              </ion-label>\n\n                           </ion-card>\n\n                        </ion-col>\n\n                     </ion-row>\n\n                  </div>\n\n                  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="service.has_more_items">\n\n                  <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading More Items\' | translate}}"> </ion-infinite-scroll-content>\n\n                  </ion-infinite-scroll>\n\n               </div>\n\n         \n\n      </div>\n\n      <div *ngSwitchCase="\'hotitem\'">\n\n      <div *ngFor="let children of service?.blocks" hideWhen="loading" class="blocks">\n\n         <div *ngIf="children.block_type == \'flash_sale_block\' && !children.hide" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="product-block flash_sale">\n\n            <!-- Products  Grid-->\n\n            <div class="product-grid" *ngIf="children.products && children.style == \'grid\'">\n\n               <ion-row class="row unlimited-items">\n\n                  <ion-col col-6 *ngFor="let item of children.products" [style.padding]="children.padding">\n\n                     <ion-card>\n\n                        <ion-card-content>\n\n                           <img tappable src="{{item.images[0].src}}" *ngIf="!values.isLoggedIn"> \n\n                           <img tappable src="{{item.images[0].src}}" (click)="getProduct(item)" *ngIf="values.isLoggedIn"> \n\n                           <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n                           </button>\n\n                           <!-- <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                           <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon> -->\n\n                           <div *ngIf="item.stock_status == \'instock\'">\n\n                              <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                           </div>\n\n                        </ion-card-content>\n\n                        <div tappable class="card-name" *ngIf="!values.isLoggedIn">\n\n                           <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n                           <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n                        </div>\n\n                        <div tappable (click)="getProduct(item)" class="card-name" *ngIf="values.isLoggedIn">\n\n                           <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n                           <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n                        </div>\n\n                        <ion-label> \n\n                           <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                           </span> \n\n                           <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                           </span>\n\n                           <span class="price-delete" *ngIf="item.sale_price">\n\n                           <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                           </del>\n\n                           </span>  \n\n                        </ion-label>\n\n                     </ion-card>\n\n                     </ion-col>\n\n                  </ion-row>\n\n               </div>\n\n            </div>\n\n         </div>\n\n      </div>\n\n    </div>\n\n\n\n   <ion-grid>\n\n      <ion-row>\n\n            <ion-col col-6>\n\n                  \n\n                     \n\n            </ion-col>\n\n            <ion-col col-6>\n\n               \n\n            </ion-col>\n\n      </ion-row>\n\n   </ion-grid>\n\n   <div class="spinner">\n\n      <ion-spinner *ngIf="!service.products && service?.banners" name="crescent"> </ion-spinner>\n\n   </div>\n\n  \n\n</ion-content>\n\n<!--ion-header class="home-header">\n\n   <ion-navbar color="header">\n\n      <button ion-button menuToggle>\n\n         <ion-icon name="menu">\n\n         </ion-icon>\n\n      </button>\n\n      <ion-title>\n\n         <img style="max-width: 200px;" src="{{values.avatar}}">\n\n      </ion-title>\n\n      <ion-buttons end>\n\n         <button ion-button icon-only color="icon-color" (click)="getSearch()">\n\n            <ion-icon color="icon-color" ios="ios-search" md="md-search">\n\n            </ion-icon>\n\n         </button>\n\n         <button ion-button icon-only color="icon-color" class="has-icon icon-only has-badge" (click)="getCart()">\n\n            <ion-icon color="icon-color" name="md-basket" class="item-icon">\n\n            </ion-icon>\n\n            <ion-badge class="badge badge-light" *ngIf="values.count != 0">{{values.count}}\n\n            </ion-badge>\n\n         </button>\n\n      </ion-buttons>\n\n   </ion-navbar>\n\n</ion-header>\n\n<ion-content class="home">\n\n   <ion-refresher *ngIf="values.settings.pull_to_refresh == \'1\'" (ionRefresh)="doRefresh($event)">\n\n   <ion-refresher-content></ion-refresher-content>\n\n   </ion-refresher>\n\n   <ion-spinner *ngIf="!service?.blocks" name="crescent"></ion-spinner>\n\n   <div *ngFor="let children of service?.blocks" hideWhen="loading" class="blocks">\n\n      <div *ngIf="children.block_type == \'banner_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="banner_block">\n\n      <div class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n\n\n\n      <div *ngIf="children.children.length && children.style == \'slider\'">\n\n         <ion-slides pager="true" loop="true" autoplay="5800">\n\n            <ion-slide *ngFor="let image of children.children"> \n\n               <img src="{{image.image}}" (click)="goto(image)" (load)="hideLoading()" [style.border-radius]="children.border_radius">\n\n            </ion-slide>\n\n         </ion-slides>\n\n      </div>\n\n\n\n      <div *ngIf="children.children.length && children.style == \'scroll\'" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}" class="floating-header banner-scroll">\n\n      <img class="banner" tappable *ngFor="let image of children.children" (load)="hideLoading()" src="{{image.image}}" (click)="goto(image)" [style.border-radius]="children.border_radius" [style.width.%]="children.child_width"> \n\n   </div>\n\n\n\n   <div *ngIf="children.children.length && children.style == \'grid\'" class="banner-grid">\n\n      <ion-row class="row unlimited-items">\n\n         <ion-col *ngFor="let image of children.children" (load)="hideLoading()" [style.width.%]="children.child_width">\n\n         <img src="{{image.image}}" (click)="goto(image)" [style.border-radius]="children.border_radius" class="{{children.card_style}}"> \n\n         </ion-col>\n\n      </ion-row>\n\n   </div>\n\n   </div>\n\n   <div *ngIf="children.block_type == \'product_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" class="product-block">\n\n   <div *ngIf="children.products" class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n\n\n\n   <div *ngIf="children.products && children.style == \'scroll\'" class="product-scroll">\n\n      <div class="scroller" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n         <a *ngFor="let item of children.products" [style.width.%]="children.child_width">\n\n         <ion-card>\n\n            <ion-card-content (click)="getProduct(item)"> <img [style.border-radius]="children.border_radius" src="{{item.images[0].src}}" /> </ion-card-content>\n\n            <h5 *ngIf="item.title">{{item.title}} </h5>\n\n            <h5 *ngIf="item.name">{{item.name}} </h5>\n\n            <ion-label>\n\n               <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n               </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n               </span> <span *ngIf="item.sale_price">\n\n               <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n               </del>\n\n               </span>\n\n            </ion-label>\n\n         </ion-card>\n\n         </a>\n\n      </div>\n\n   </div>\n\n\n\n   <div class="product-grid" *ngIf="children.products && children.style == \'grid\'">\n\n      <ion-row class="row unlimited-items">\n\n         <ion-col class="col" *ngFor="let item of children.products">\n\n            <ion-card>\n\n               <ion-card-content>\n\n                  <img [style.height.px]="values.dimensions.imageGridViewHeight"  tappable src="{{item.images[0].src}}" (click)="getProduct(item)"> \n\n                  <button ion-button color="danger" class="stock" *ngIf="!item.in_stock">{{"No Stock" | translate}}\n\n                  </button>\n\n                  <ion-icon name="md-heart" color="icon-color" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                  <ion-icon name="md-heart-outline" color="icon-color" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                  <div *ngIf="item.in_stock">\n\n                     <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                  </div>\n\n               </ion-card-content>\n\n               <div tappable (click)="getProduct(item)" class="card-name">\n\n                  <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n                  <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n               </div>\n\n               <ion-label> \n\n                  <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                  </span> \n\n                  <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                  </span>\n\n                  <span class="price-delete" *ngIf="item.sale_price">\n\n                  <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                  </del>\n\n                  </span>  \n\n               </ion-label>\n\n            </ion-card>\n\n         </ion-col>\n\n      </ion-row>\n\n   </div>\n\n   </div>\n\n\n\n   <div *ngIf="children.block_type == \'flash_sale_block\' && !children.hide" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="product-block flash_sale">\n\n   <div *ngIf="children.products" class="{{children.header_align}}" [style.color]="children.title_color">\n\n   <ion-item no-lines class="flash-item-name">\n\n      <h2 [style.color]="children.title_color">\n\n         <ion-icon name="md-flash" style="margin-right: 6px;font-size: 18px;"></ion-icon>\n\n         {{children.title}}\n\n      </h2>\n\n\n\n      <div style="text-align: center;">\n\n         <h3 class=\'day\'><span>{{children.days}}</span></h3>\n\n         : \n\n         <h3 class=\'day\'><span>{{children.hours}}</span></h3>\n\n         : \n\n         <h3 class=\'day\'><span>{{children.minutes}}</span></h3>\n\n         : \n\n         <h3 class=\'day\'><span>{{children.seconds}}</span></h3>\n\n      </div>\n\n   </ion-item>\n\n   </div>\n\n\n\n   <div *ngIf="children.products && children.style == \'scroll\'" class="product-scroll">\n\n      <div class="scroller" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n         <a *ngFor="let item of children.products" [style.width.%]="children.child_width">\n\n         <ion-card>\n\n            <ion-card-content (click)="getProduct(item)"> <img [style.height.px]="values.dimensions.productSliderHeight" [style.border-radius]="children.border_radius" src="{{item.images[0].src}}" /> </ion-card-content>\n\n            <h5 *ngIf="item.title">{{item.title}} </h5>\n\n            <h5 *ngIf="item.name">{{item.name}} </h5>\n\n            <ion-label>\n\n               <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n               </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n               </span> <span *ngIf="item.sale_price">\n\n               <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n               </del>\n\n               </span>\n\n            </ion-label>\n\n         </ion-card>\n\n         </a>\n\n      </div>\n\n   </div>\n\n\n\n   <div class="product-grid" *ngIf="children.products && children.style == \'grid\'">\n\n      <ion-row class="row unlimited-items">\n\n         <ion-col class="col" *ngFor="let item of children.products" [style.padding]="children.padding">\n\n         <ion-card>\n\n            <ion-card-content>\n\n               <img [style.height.px]="values.dimensions.imageGridViewHeight"  tappable src="{{item.images[0].src}}" (click)="getProduct(item)"> \n\n               <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n               </button>\n\n               <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n               <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n               <div *ngIf="item.stock_status == \'instock\'">\n\n                  <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n               </div>\n\n            </ion-card-content>\n\n            <div tappable (click)="getProduct(item)" class="card-name">\n\n               <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n               <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n            </div>\n\n            <ion-label> \n\n               <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n               </span> \n\n               <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n               </span>\n\n               <span class="price-delete" *ngIf="item.sale_price">\n\n               <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n               </del>\n\n               </span>  \n\n            </ion-label>\n\n         </ion-card>\n\n         </ion-col>\n\n      </ion-row>\n\n   </div>\n\n   </div>\n\n   <div *ngIf="children.block_type == \'category_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="category">\n\n   <div *ngIf="service?.categories" class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n\n\n\n   <div *ngIf="service?.categories && children.style == \'scroll\'" class="category-slider-scroll">\n\n      <div class="scrollmenu2" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n         <a *ngFor="let item of getSubCategories(children.link_id)" class="{{item.slug}}" [style.width.%]="children.child_width">\n\n         <img *ngIf="item.image?.src" [style.border-radius]="children.border_radius" (load)="hideLoading()" src="{{item.image.src}}" (click)="getCategory(item.id, item.slug, item.name, item.image)"/>\n\n         <h5 *ngIf="item.image" (click)="getCategory(item.id, item.slug, item.name, item.image)" [innerHTML]="item.name"></h5>\n\n         <div *ngIf="!item.image" class="no-image">\n\n            <h5 (click)="getCategory(item.id, item.slug, item.name, item.image)" [innerHTML]="item.name" [style.color]="children.title_color"></h5>\n\n         </div>\n\n         </a>\n\n      </div>\n\n   </div>\n\n\n\n   <div *ngIf="service?.categories && children.style == \'grid\'" class="category-slider-grid">\n\n      <ion-row class="row unlimited-items">\n\n         <ion-col class="col {{item.slug}}" *ngFor="let item of getSubCategories(children.link_id)" [style.width.%]="children.child_width">\n\n         <div (click)="getCategory(item.id, item.slug, item.name, item.image)">\n\n            <ion-card>\n\n               <ion-card-content> \n\n                  <img *ngIf="item.image" (load)="hideLoading()" [style.border-radius]="children.border_radius" src="{{item.image}}"/> \n\n               </ion-card-content>\n\n               <div text-center>\n\n                  <ion-label text-uppercase [innerHTML]="item.name" [style.color]="children.title_color"></ion-label>\n\n               </div>\n\n            </ion-card>\n\n         </div>\n\n         </ion-col>\n\n      </ion-row>\n\n   </div>\n\n   </div>\n\n   </div>\n\n\n\n   <div *ngIf="service?.products" class="products-listing">\n\n      <div *ngIf="service?.products.length">\n\n         <ion-list>\n\n            <div class="card-background-page grid">\n\n               <ion-row class="row unlimited-items">\n\n                  <ion-col class="col" *ngFor="let item of service.products">\n\n                     <ion-card>\n\n                        <ion-card-content class="stock">\n\n                           <img [style.height.px]="values.dimensions.imageGridViewHeight" tappable src="{{item.images[0].src}}" (load)="hideLoading()" (click)="getProduct(item)">\n\n                           <button ion-button color="danger" *ngIf="!item.in_stock">{{"OUTOFSTOCK" | translate}}\n\n                           </button>\n\n                           <ion-icon name="md-heart" color="icon-color" class="wishlist-button-grid" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                           <ion-icon name="md-heart-outline" color="icon-color" class="wishlist-button-grid" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                        </ion-card-content>\n\n                        <div tappable (click)="getProduct(item)" class="card-name">\n\n                           <ion-label *ngIf="item.title">{{item.title}}\n\n                           </ion-label>\n\n                           <ion-label *ngIf="item.name">{{item.name}}\n\n                           </ion-label>\n\n                        </div>\n\n                        <ion-item no-padding class="price-list">\n\n                           <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n                           </span>\n\n                           <span class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n                           </span>\n\n                           <span class="price-delete" primary *ngIf="item.sale_price">\n\n                           <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n                           </del>\n\n                           </span>\n\n                        </ion-item>\n\n                     </ion-card>\n\n                  </ion-col>\n\n               </ion-row>\n\n            </div>\n\n         </ion-list>\n\n      </div>\n\n   </div>\n\n   <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n   <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items...\' | translate}}"> </ion-infinite-scroll-content>\n\n   </ion-infinite-scroll>\n\n</ion-content-->\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_products_products__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_address_address__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_orders_orders__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkout_order_summary_order_summary__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_wishlist_wishlist__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_post_post__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_rate__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_storage__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { MemberPromoPage } from '../pages/memberpromo/memberpromo';



















var MyApp = /** @class */ (function () {
    function MyApp(statusBar, splashScreen, alertCtrl, config, oneSignal, emailComposer, appRate, platform, service, values, translateService, socialSharing, nativeStorage) {
        var _this = this;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.oneSignal = oneSignal;
        this.emailComposer = emailComposer;
        this.appRate = appRate;
        this.platform = platform;
        this.service = service;
        this.values = values;
        this.translateService = translateService;
        this.socialSharing = socialSharing;
        this.nativeStorage = nativeStorage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */];
        this.items = {};
        this.buttonLanguagesSettings = false;
        platform.ready().then(function () {
            statusBar.styleDefault();
            statusBar.backgroundColorByHexString('#f4f5f8');
            _this.service.load().then(function (results) { return _this.handleService(results); });
            _this.nativeStorage.getItem('blocks').then(function (data) {
                if (data) {
                    //this.splashScreen.hide();
                    _this.service.blocks = data.blocks;
                    _this.values.settings = data.settings;
                    _this.values.calc(platform.width());
                }
            }, function (error) { return console.error(error); });
            _this.nativeStorage.getItem('categories').then(function (data) {
                if (data) {
                    _this.service.categories = data;
                    _this.service.mainCategories = [];
                    for (var i = 0; i < _this.service.categories.length; i++) {
                        if (_this.service.categories[i].parent == '0') {
                            _this.service.mainCategories.push(_this.service.categories[i]);
                        }
                    }
                }
            }, function (error) { return console.error(error); });
        });
    }
    MyApp.prototype.handleService = function (results) {
        var _this = this;
        if (this.values.settings.app_dir == 'rtl')
            this.platform.setDir('rtl', true);
        this.translateService.setDefaultLang(this.values.settings.language);
        this.splashScreen.hide();
        this.values.calc(this.platform.width());
        if (this.platform.is('cordova') && this.values.settings.onesignal_app_id) {
            this.oneSignal.startInit(this.values.settings.onesignal_app_id, this.values.settings.google_project_id);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            /*this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload)
               
            ); */
            this.oneSignal.handleNotificationOpened().subscribe(function (result) {
                if (result.notification.payload.additionalData.category) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_products_products__["a" /* ProductsPage */], { id: result.notification.payload.additionalData.category });
                }
                else if (result.notification.payload.additionalData.product) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_18__pages_product_product__["a" /* ProductPage */], { id: result.notification.payload.additionalData.product });
                }
                else if (result.notification.payload.additionalData.post) {
                    _this.post({ id: result.notification.payload.additionalData.post });
                }
                else if (result.notification.payload.additionalData.order) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_16__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */], { id: result.notification.payload.additionalData.order });
                }
            });
            this.oneSignal.endInit();
        }
    };
    /*private onPushReceived(payload: OSNotificationPayload) {
        this.notification.save(
          payload.title,
          payload.body,
          payload.notificationID,
          payload.launchURL,
          payload.bigPicture
        ).then(() => this.notification.showAlert(payload.title, payload.body));
      } */
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.getCategory = function (id, slug, name) {
        this.items = [];
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_products_products__["a" /* ProductsPage */], this.items);
    };
    MyApp.prototype.getCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.logout = function () {
        this.service.logout();
        this.values.wishlistId = [];
        alert("Sucessfully Logout!");
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__["a" /* AccountLogin */]);
    };
    MyApp.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__["a" /* AccountRegister */]);
    };
    MyApp.prototype.address = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_account_address_address__["a" /* Address */]);
    };
    MyApp.prototype.order = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_account_orders_orders__["a" /* Orders */]);
    };
    MyApp.prototype.cart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.wishlist = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_account_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyApp.prototype.shop = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */]);
    };
    //getPromo() {
    //    this.nav.setRoot(MemberPromoPage);
    //}
    MyApp.prototype.rateApp = function () {
        if (this.platform.is('cordova')) {
            this.appRate.preferences.storeAppURL = {
                ios: this.values.settings.rate_app_ios_id,
                android: this.values.settings.rate_app_android_id,
                windows: 'ms-windows-store://review/?ProductId=' + this.values.settings.rate_app_windows_id
            };
            this.appRate.promptForRating(true);
        }
    };
    MyApp.prototype.shareApp = function () {
        if (this.platform.is('cordova')) {
            var url = '';
            if (this.platform.is('android'))
                url = this.values.settings.share_app_android_link;
            else
                url = this.values.settings.share_app_ios_link;
            var options = {
                message: '',
                subject: '',
                files: ['', ''],
                url: url,
                chooserTitle: ''
            };
            this.socialSharing.shareWithOptions(options);
        }
    };
    MyApp.prototype.contact = function () {
        var email = {
            to: this.values.settings.support_email,
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    MyApp.prototype.post = function (id) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_19__pages_post_post__["a" /* Post */], id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\app\app.html"*/'<ion-menu [content]="content" side="{{this.values?.settings?.app_dir}}">\n\n  <div class="menu-toolbar">\n\n    <ion-toolbar color="header">\n\n      <div class="profile-image">\n\n        <img src="assets/image/logo_white.png">\n\n        <!--img src="{{values.avatar}}"-->\n\n      </div>\n\n      <!--button ion-button full menuClose clear color="light" class="button-customername" *ngIf="values.isLoggedIn">\n\n        <strong>{{values.customerName}}\n\n        </strong>\n\n      </button>\n\n      <button ion-button full menuClose clear color="light" class="button-welcome" *ngIf="!values.isLoggedIn">\n\n        <strong>{{"Welcome" | translate}}\n\n        </strong>\n\n      </button-->  \n\n    </ion-toolbar>\n\n  </div>\n\n  <ion-content class="sidemenugrad">\n\n    <ion-list no-margin>\n\n      <div class="list-item-divider">\n\n        <ion-item-divider tappable menuClose (click)="shop()">\n\n          <ion-icon item-left ios="ios-home" md="md-home">\n\n          </ion-icon>\n\n          <strong>Home\n\n          </strong>\n\n        </ion-item-divider>\n\n      </div>       \n\n      <div *ngIf="service.categories" class="category-name">\n\n        <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)">\n\n          <ion-icon item-right class="ion-ios-arrow-forward item-icon">\n\n          </ion-icon>\n\n          <span [innerHTML]="item.name"></span>     \n\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list class="menu-items">\n\n      <ion-item-divider>\n\n        <ion-icon name="contact" item-left>\n\n        </ion-icon>\n\n        <strong>{{"Account" | translate}}\n\n        </strong>\n\n      </ion-item-divider>\n\n      <ion-item tappable menuClose (click)="login()" *ngIf="!values.isLoggedIn">\n\n        <ion-icon name="log-in" item-left>\n\n        </ion-icon>{{"LogIn" | translate}}\n\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="register()" *ngIf="!values.isLoggedIn">\n\n        <ion-icon item-left ios="ios-create" md="md-create">\n\n        </ion-icon>{{"Register" | translate}}\n\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="address()" *ngIf="values.isLoggedIn">\n\n        <ion-icon item-left name="locate">\n\n        </ion-icon>{{"Address" | translate}}\n\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="order()" *ngIf="values.isLoggedIn">\n\n        <ion-icon item-left name="reorder">\n\n        </ion-icon>{{"Your Orders" | translate}}\n\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="wishlist()" *ngIf="values.isLoggedIn">\n\n        <ion-icon name="heart" item-left>\n\n        </ion-icon>{{"Wishlist" | translate}}\n\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="cart()">\n\n        <ion-icon name="md-basket" item-left>\n\n        </ion-icon>\n\n        {{"Checkout" | translate}}\n\n      </ion-item>\n\n            <ion-item tappable menuClose (click)="contact()">\n\n               {{"Contact Us" | translate}}\n\n               <ion-icon name="mail" item-left></ion-icon>\n\n            </ion-item>\n\n            <ion-item tappable menuClose *ngIf="values.data?.pages?.about && values.data?.pages?.about != \'0\'" (click)="post(values.data?.pages?.about)">\n\n               {{"About Us" | translate}}\n\n               <ion-icon name="ios-information-circle" item-left></ion-icon>\n\n            </ion-item>\n\n            <ion-item tappable menuClose *ngIf="values.data?.pages?.terms && values.data?.pages?.terms != \'0\'" (click)="post(values.data?.pages?.terms)">\n\n               <ion-icon name="paper" item-left></ion-icon>\n\n               {{"Terms & Conditions" | translate}}\n\n            </ion-item>\n\n            <ion-item tappable menuClose no-line (click)="shareApp()">\n\n               <ion-icon name="share" item-left></ion-icon>\n\n               {{"Share App" | translate}}\n\n            </ion-item>\n\n            <ion-item tappable menuClose no-line (click)="rateApp()">\n\n               <ion-icon name="thumbs-up" item-left></ion-icon>\n\n               {{"Rate App" | translate}}\n\n            </ion-item>\n\n      <ion-item tappable menuClose (click)="logout()" *ngIf="values.isLoggedIn">\n\n        <ion-icon item-left name="md-log-out">\n\n        </ion-icon>{{"Logout" | translate}}\n\n      </ion-item>\n\n    </ion-list>\n\n    <br>\n\n    <br>\n\n    <br>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n\n</ion-nav>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_6__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keys'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsPage = /** @class */ (function () {
    function ProductsPage(nav, popoverCtrl, service, params, values, functions) {
        var _this = this;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.listview = false;
        this.shouldShowCancel = true;
        this.showFilters = false;
        this.sort = 0;
        this.data = {};
        this.filter = {};
        this.q = "";
        if (params.data.id)
            this.filter.category = params.data.id;
        this.categoryName = params.data.name;
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.subCategories = [];
        this.items = [];
        this.quantity = "1";
        this.subCategories = params.data.categories;
        this.service.load(this.filter)
            .then(function (results) { return _this.products = results; });
    }
    ProductsPage_1 = ProductsPage;
    ProductsPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.categories;
        this.nav.push(ProductsPage_1, this.items);
    };
    ProductsPage.prototype.parseText = function (id, count, offset, obj2) {
        var text = '{';
        text += '"category' + '":"' + id + '"}';
        var obj1 = JSON.parse(text);
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };
    ProductsPage.prototype.getProducts = function (item) {
        this.nav.push(ProductsPage_1, item);
    };
    ProductsPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
    };
    ProductsPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.loadMore(this.filter).then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ProductsPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    ProductsPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    ProductsPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id).then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id).then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductsPage.prototype.updateCart = function (a) { };
    ProductsPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter['filter[q]'] = $event.srcElement.value;
        console.log(this.filter['filter[q]']);
        this.service.search(this.filter).then(function (results) { return _this.products = results; });
    };
    ProductsPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    ProductsPage.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    ProductsPage.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    ProductsPage.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        if (sort == 0) {
            this.filter['filter[order]'] = "ASC";
            this.filter['filter[orderby]'] = "date";
        }
        if (sort == 1) {
            this.filter['filter[order]'] = "ASC";
            this.filter['filter[orderby]'] = "name";
        }
        else if (sort == 2) {
            this.filter['filter[order]'] = "DESC";
            this.filter['filter[orderby]'] = "name";
        }
        else if (sort == 3) {
            this.filter['filter[order]'] = "ASC";
            this.filter['filter[orderby]'] = "meta_value_num";
            this.filter['filter[orderby_meta_key]'] = "_price";
        }
        else if (sort == 4) {
            this.filter['filter[order]'] = "DESC";
            this.filter['filter[orderby]'] = "meta_value_num";
            this.filter['filter[orderby_meta_key]'] = "_price";
        }
        /*this.filter['filter[meta_query][key]'] = "_price";
        this.filter['filter[meta_query][value]'] = '[0,10]';
        this.filter['filter[meta_query][compare]'] = "BETWEEN";*/
        this.service.load(this.filter).then(function (results) { return _this.products = results; });
    };
    ProductsPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    };
    ProductsPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    ProductsPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductsPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductsPage = ProductsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\products\products.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="categoryName"><span [innerHTML]="categoryName"></span>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n\n        <ion-icon color="icon-color" name="md-basket" class="item-icon">\n\n        </ion-icon>\n\n        <ion-badge class="badge badge-light"  *ngIf="values.count">{{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="products">\n\n  <div *ngIf="showFilters" class="filter">\n\n    <ion-list radio-group [(ngModel)]="sort" (ngModelChange)="chnageFilter(sort)">\n\n      <ion-list-header>\n\n        <b>\n\n          {{"Sort" | translate}}\n\n        </b>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Default" | translate}}\n\n        </ion-label>\n\n        <ion-radio value="0">\n\n        </ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Name" | translate}} (A - Z)\n\n        </ion-label>\n\n        <ion-radio value="1">\n\n        </ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Name" | translate}} (Z - A)\n\n        </ion-label>\n\n        <ion-radio value="2">\n\n        </ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Price" | translate}} (Low - High)\n\n        </ion-label>\n\n        <ion-radio value="3">\n\n        </ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Price" | translate}} (High - Low)\n\n        </ion-label>\n\n        <ion-radio value="4">\n\n        </ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="button-color" (click)="cancel()">\n\n      {{"CANCEL" | translate}}\n\n    </button> \n\n  </div>\n\n\n\n\n\n  <div *ngIf="!showFilters">\n\n    <ion-searchbar\n\n                   [(ngModel)]="q"\n\n                   [showCancelButton]="shouldShowCancel"\n\n                   (ionInput)="onInput($event)"\n\n                   (ionCancel)="onCancel($event)">\n\n    </ion-searchbar>\n\n    <div *ngIf="!this.filter[\'filter[q]\'] || this.filter[\'filter[q]\'] == \'\'">\n\n    <div *ngIf="subCategories" class="category">\n\n      <ion-item *ngIf="subCategories.length" no-lines class="category-name"> \n\n        <ion-label>{{"Categories" | translate}}\n\n        </ion-label>\n\n      </ion-item>\n\n      <div class="sub-category">\n\n        <ion-item *ngFor="let item of subCategories">\n\n          <ion-thumbnail item-left>\n\n            <a (click)="getCategory(item.id, item.slug)">\n\n              <img *ngIf="item.image?.src" src="{{item.image.src}}"/>\n\n            </a>\n\n          </ion-thumbnail>\n\n          <a (click)="getCategory(item.id, item.slug)">\n\n            <h2>\n\n              <span [innerHTML]="item.name"></span>\n\n            </h2>\n\n          </a>\n\n          <ion-icon item-right ios="ios-arrow-forward" md="md-arrow-forward" (click)="getCategory(item.id, item.slug, item.name)">\n\n          </ion-icon>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n    </div>\n\n    \n\n    <ion-spinner *ngIf="!products" name="crescent">\n\n    </ion-spinner>\n\n    <div *ngIf="products">\n\n      <h2 *ngIf="!products.length" style="font-size: 15px;text-align: center;margin-top: 30px">No products found!.</h2>\n\n    </div>\n\n    <div *ngIf="products" class="products-listing">\n\n      <div *ngIf="products.length">\n\n        <div *ngIf="values.listview">\n\n          <ion-item no-lines class="item-name">\n\n            <ion-label>{{"Products" | translate}}\n\n            </ion-label>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="setGridView()">\n\n              <ion-icon ios="ios-grid" md="md-grid">\n\n              </ion-icon>\n\n            </button>\n\n          </ion-item>\n\n          <ion-list>\n\n            <div class="item-list" *ngFor="let item of products">\n\n              <ion-item class="left-padding" no-lines>\n\n                  <ion-thumbnail item-left class="stock-list">\n\n                    <img [style.height.rem]="values.dimensions.imageListViewHeight" tappable (click)="getProduct(item)" src="{{item.images[0].src}}">\n\n                    <button class="out-of-stock-button" ion-button color="danger" *ngIf="item.stock_status == \'outofstock\'">{{"OUTOFSTOCK" | translate}}\n\n                    </button>             \n\n                  </ion-thumbnail> \n\n\n\n                <!--div tappable (click)="getProduct(item.id)"-->\n\n                  <div class="product-name-top">                  \n\n                  <ion-row>                 \n\n                  <ion-col width-80 class="product-label">\n\n                   <div tappable (click)="getProduct(item)">\n\n                  <h2 *ngIf="item.title">{{item.title}}\n\n                    </h2>\n\n                    <h2 *ngIf="item.name">{{item.name}}\n\n                    </h2>\n\n                    </div>\n\n                  </ion-col>\n\n                  <ion-col width-20 class="wishlist-label">\n\n                  <ion-icon name="md-heart" color="icon-color" class="wishlist-button" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                  <ion-icon name="md-heart-outline" color="icon-color" class="wishlist-button" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                  </ion-col>\n\n                  </ion-row>\n\n                    <p tappable (click)="getProduct(item)" class="max-lines" [innerHTML]="item.description">\n\n                    </p>\n\n                  </div>\n\n\n\n\n\n                  <div class="price-bottom-list">\n\n                    <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-del" *ngIf="item.sale_price">\n\n                      <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n                      </del>\n\n                    </h3>\n\n                  </div>\n\n                <!--/div-->\n\n\n\n                <div class="bottom-right-button">\n\n                  <button ion-button [disabled]="item.stock_status == \'outofstock\'" text-uppercase color="button-color"  item-right outline *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                    {{"Add"  | translate}}\n\n                  </button>\n\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n\n                    <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n\n                    </ion-icon>\n\n                  </button>\n\n                  <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                  </button>\n\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n\n                    <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n\n                    </ion-icon>\n\n                  </button>\n\n                </div>\n\n              </ion-item>\n\n            </div>\n\n          </ion-list>\n\n        </div>\n\n        <div *ngIf="!values.listview">\n\n          <ion-item no-lines class="item-name">\n\n            <ion-label>{{"Products" | translate}}\n\n            </ion-label>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="setListView()">\n\n              <ion-icon ios="ios-list-box" md="ios-list-box">\n\n              </ion-icon>\n\n            </button>\n\n          </ion-item>\n\n          <div class="card-background-page grid">\n\n            <ion-row class="row unlimited-items">\n\n              <ion-col class="col" *ngFor="let item of products">\n\n                <ion-card>\n\n                  <ion-card-content class="stock">\n\n\n\n                      <img [style.height.px]="values.dimensions.imageGridViewHeight" tappable src="{{item.images[0].src}}" (click)="getProduct(item)">\n\n                      <button ion-button color="danger" *ngIf="item.stock_status == \'outofstock\'">{{"OUTOFSTOCK" | translate}}\n\n                      </button>\n\n                  <ion-icon name="md-heart" color="icon-color" class="wishlist-button-grid" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                  <ion-icon name="md-heart-outline" color="icon-color" class="wishlist-button-grid" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>                  \n\n                  </ion-card-content>\n\n                  <div tappable (click)="getProduct(item)" class="card-name">\n\n                  <ion-label *ngIf="item.title">{{item.title}}\n\n                  </ion-label>\n\n                  <ion-label *ngIf="item.name">{{item.name}}\n\n                  </ion-label>\n\n                  </div>\n\n                  <ion-item no-padding class="price-list">\n\n                    <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-delete" primary *ngIf="item.sale_price">\n\n                      <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n                      </del>\n\n                    </h3>\n\n                    <button ion-button [disabled]="item.stock_status == \'outofstock\'" text-uppercase color="button-color" item-right clear *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                      {{"Add"  | translate}}\n\n                    </button>\n\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n\n                      <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n\n                      </ion-icon>\n\n                    </button>\n\n                    <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                    </button>\n\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n\n                      <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n\n                      </ion-icon>\n\n                    </button>\n\n                  </ion-item>\n\n                </ion-card>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n        <ion-infinite-scroll-content\n\n         loadingSpinner="crescent"\n\n         loadingText="{{\'Loading more items..\' | translate}}">\n\n        </ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\products\products.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], ProductsPage);
    return ProductsPage;
    var ProductsPage_1;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Post = /** @class */ (function () {
    function Post(service, values, params) {
        var _this = this;
        this.service = service;
        this.values = values;
        this.id = params.data;
        this.service.getPage(this.id)
            .then(function (results) { return _this.post = results; });
    }
    Post = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\post\post.html"*/'<ion-header class="settings-header">\n\n    <ion-navbar color="header"> <button ion-button menuToggle>\n\n    <ion-icon name="menu"></ion-icon>\n\n     </button>\n\n        <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="post" padding>\n\n    <ion-spinner *ngIf="!post" name="crescent"> </ion-spinner>\n\n    <div *ngIf="post">\n\n        <div [innerHTML]="post.post_content"></div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\post\post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Post);
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ })

},[385]);
//# sourceMappingURL=main.js.map