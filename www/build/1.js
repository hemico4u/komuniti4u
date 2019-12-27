webpackJsonp([1],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignreferralPageModule", function() { return SignreferralPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signreferral__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignreferralPageModule = /** @class */ (function () {
    function SignreferralPageModule() {
    }
    SignreferralPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signreferral__["a" /* SignreferralPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signreferral__["a" /* SignreferralPage */]),
            ],
        })
    ], SignreferralPageModule);
    return SignreferralPageModule;
}());

//# sourceMappingURL=signreferral.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignreferralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(52);
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
 * Generated class for the SignreferralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignreferralPage = /** @class */ (function () {
    function SignreferralPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* Home */];
    }
    SignreferralPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignreferralPage');
    };
    SignreferralPage.prototype.shop = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* Home */]);
    };
    SignreferralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signreferral',template:/*ion-inline-start:"D:\Documents\komuniti4u\src\pages\signreferral\signreferral.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Referral</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <img src="assets/image/referral-signup.jpg">\n\n  <h3 txt-center>Greate! Account Created!</h3>\n\n  <p>Do you have any referral?</p>\n\n\n\n   <!-- <ion-item>     \n\n     <ion-label>  \n\n      Select Referral Name\n\n    </ion-label>   \n\n    <ion-select>\n\n      <div>\n\n        <ion-option value=""><span>User 1</span></ion-option>\n\n        <ion-option value=""><span>User 2</span></ion-option>\n\n        <ion-option value=""><span>User 3</span></ion-option>\n\n      </div>\n\n    </ion-select>\n\n  </ion-item> -->\n\n\n\n  <ion-grid class="add-to-cart grid">\n\n      <ion-row class="row">\n\n          <ion-col class="col" width-50="">\n\n              <button (click)="shop()" color="button-color" full ion-button style="margin: 0;width: 100%; min-height: 50px;background-color: #E13635; color: white; box-shadow: none;" text-uppercase class="button button-md button-default button-default-md button-full button-full-md button-md-button-color"><span class="button-inner">\n\n              No\n\n              </span><div class="button-effect"></div></button>\n\n          </ion-col>\n\n          <ion-col class="col" width-50="">\n\n              <button color="button-color" full ion-button style="margin: 0;width: 100%; min-height: 50px;box-shadow: none;background-color: #009C4D;" text-uppercase class="button button-md button-default button-default-md button-full button-full-md button-md-button-color"><span class="button-inner">\n\n              Yes\n\n              </span><div class="button-effect"></div></button>\n\n          </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\komuniti4u\src\pages\signreferral\signreferral.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SignreferralPage);
    return SignreferralPage;
}());

//# sourceMappingURL=signreferral.js.map

/***/ })

});
//# sourceMappingURL=1.js.map