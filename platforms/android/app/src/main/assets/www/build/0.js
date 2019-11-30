webpackJsonp([0],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsapplinkPageModule", function() { return WhatsapplinkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__whatsapplink__ = __webpack_require__(723);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WhatsapplinkPageModule = /** @class */ (function () {
    function WhatsapplinkPageModule() {
    }
    WhatsapplinkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__whatsapplink__["a" /* WhatsapplinkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__whatsapplink__["a" /* WhatsapplinkPage */]),
            ],
        })
    ], WhatsapplinkPageModule);
    return WhatsapplinkPageModule;
}());

//# sourceMappingURL=whatsapplink.module.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsapplinkPage; });
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
 * Generated class for the WhatsapplinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhatsapplinkPage = /** @class */ (function () {
    function WhatsapplinkPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    WhatsapplinkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhatsapplinkPage');
    };
    WhatsapplinkPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    WhatsapplinkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-whatsapplink',template:/*ion-inline-start:"D:\Documents\GitHub\komuniti4U-2019\src\pages\whatsapplink\whatsapplink.html"*/'<!--\n\n  Generated template for the WhatsapplinkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>WhatsApp</ion-title>\n\n    <ion-buttons end>\n\n            <button ion-button icon-only (click)="dismiss()">\n\n                <ion-icon name="md-close" style="font-size: 25px"></ion-icon>\n\n              </button>\n\n        </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div padding class="whatsapp_header">\n\n    <h5>Contact Us</h5>\n\n    <h2>We are here to help</h2>\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n              <ion-card>\n\n              <a href="https://wa.me/60194161656?text=AppKomuniti">\n\n                <h2>Hajar</h2>\n\n                <p>Customer Service</p>\n\n                <button ion-button  button>\n\n                  Start Chat\n\n                </button>\n\n              </a>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n              <ion-card>\n\n              <a href="https://wa.me/60194164656?text=AppKomuniti">\n\n                <h2>Azra</h2>\n\n                <p>Customer Service</p>\n\n                <button ion-button button>\n\n                  Start Chat\n\n                </button>\n\n              </a>\n\n              </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  </div><!-- whatsapp_header -->\n\n  <div class="support_text" padding>\n\n      <p style="font-size: 30px; color: rgb(245,206,48)"><b>Hotline</b></p>\n\n    <p class="call">019-4124656</p>\n\n    <p>Product and services, order management, billing enquiries available 9.00am - 5.00pm (Daily, Except Sunday Close)</p>\n\n    <img src="assets/image/support-icon.png">\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\GitHub\komuniti4U-2019\src\pages\whatsapplink\whatsapplink.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], WhatsapplinkPage);
    return WhatsapplinkPage;
}());

//# sourceMappingURL=whatsapplink.js.map

/***/ })

});
//# sourceMappingURL=0.js.map