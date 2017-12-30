import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BadgeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-badge-list',
  templateUrl: 'badge-list.html',
})
export class BadgeListPage {
  badges = [
    { src: "assets/img/badges/clean-energy.png", text: 'Clean Energy', textColor: 'black', backgroundColor: '#51D2B7', reason: 'Being energy concern'},
    { src: "assets/img/badges/environment-saver.png", text: 'Environment Saver', textColor: 'black', backgroundColor: '#51D2B7', reason: 'Being environment saver'},
    { src: "assets/img/badges/helper.png", text: 'Helper', textColor: 'black', backgroundColor: '#51D2B7', reason: 'Being a helper for peopler'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BadgeListPage');
  }

}