import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/home';
/**
 * Generated class for the SignreferralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signreferral',
  templateUrl: 'signreferral.html',
})
export class SignreferralPage {
  rootPage: any = Home;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignreferralPage');
  }

  shop() {
    this.navCtrl.setRoot(Home);
}

}
