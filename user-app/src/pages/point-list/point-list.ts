import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

import { OfferCreatePage } from '../offer-create/offer-create';
import { PointTransferPage } from '../point-transfer/point-transfer';

import { LoyaltyFactoryProvider } from '../../providers/loyalty-factory/loyalty-factory';
import { LoyaltyTokenProvider } from '../../providers/loyalty-token/loyalty-token';

/**
 * Generated class for the PointListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
	selector: 'page-point-list',
	templateUrl: 'point-list.html',
})
export class PointListPage {
	vouchers: Array<{ price: number, points: number }> = [];

	tokens: any;
	tokenIndex: any;
	token: any;
	balance: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
		public platform: Platform, public viewCtrl: ViewController, public loyaltyFactoryProvider: LoyaltyFactoryProvider, public loyaltyTokenProvider: LoyaltyTokenProvider) {
		this.token = this.navParams.get("token");
	}

	presentOfferCreate() {
		let OfferCreateModal = this.modalCtrl.create(OfferCreatePage, { brandId: 1 });
		OfferCreateModal.present();
	}

	presentPointTransfer() {
		/*let PointTransferPageModal = this.modalCtrl.create(PointTransferPage, { token: this.token });
		PointTransferPageModal.present();*/

		this.navCtrl.push('PointTransferPage',  { token: this.token, tokenIndex: this.tokenIndex });
	}



	async ionViewDidLoad() {
		this.tokenIndex = this.navParams.get("tokenIndex");
		this.token = this.navParams.get("token");

		if(!this.token && this.tokenIndex) {
			this.tokens = await this.loyaltyFactoryProvider.getTokens();
			this.token = this.tokens[this.tokenIndex];
		}

		let tempBalance = (await this.loyaltyTokenProvider.getBalance(this.token.address));
		this.balance = tempBalance.dividedBy(Math.pow(10, this.token.decimal)).toString(10);

		this.vouchers = [
			{ price: 25, points: 50 },
			{ price: 50, points: 100 },
			{ price: 100, points: 200 },
			{ price: 25, points: 50 }
		];

	}

}
