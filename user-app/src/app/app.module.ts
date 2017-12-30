import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QRScanner } from '@ionic-native/qr-scanner';

import { IonicStorageModule } from '@ionic/storage';
import { ComponentsModule } from '../components/components.module'

import { UserApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { PointListPage } from '../pages/point-list/point-list';
import { OfferCreatePage } from '../pages/offer-create/offer-create';

import { TokenListPage } from '../pages/token-list/token-list';
import { TokenListPageModule } from '../pages/token-list/token-list.module';

import { PointTransferPageModule } from '../pages/point-transfer/point-transfer.module';
import { PointTransferPage } from '../pages/point-transfer/point-transfer';

import { AddressCodePageModule } from '../pages/address-code/address-code.module';
import { AddressCodePage } from '../pages/address-code/address-code';

import { ProfilePage } from '../pages/profile/profile';
import { ProfilePageModule } from '../pages/profile/profile.module';

import { DonatePage } from '../pages/donate/donate';
import { DonatePageModule } from '../pages/donate/donate.module';

import { BadgeListPage } from '../pages/badge-list/badge-list';
import { BadgeListPageModule } from '../pages/badge-list/badge-list.module';

import { ErrorPage } from "../pages/error/error";
import { ErrorPageModule } from '../pages/error/error.module';

import { UserData } from '../providers/user-data';


@NgModule({
	declarations: [
		UserApp,
		LoginPage,
		SignupPage,
		TabsPage,
		TutorialPage,
		PointListPage,
		OfferCreatePage
	],
	imports: [
		BrowserModule,
		HttpModule,
		AddressCodePageModule,
		TokenListPageModule,
		PointTransferPageModule,
		ErrorPageModule,
		ComponentsModule,
		ProfilePageModule,
		DonatePageModule,
		BadgeListPageModule,
		IonicModule.forRoot(UserApp, {}, {
			links: [
				{ component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
				{ component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
				{ component: LoginPage, name: 'LoginPage', segment: 'login' },
				{ component: SignupPage, name: 'SignupPage', segment: 'signup' },
				{ component: ErrorPage, name: 'ErrorPage', segment: 'error' },
				{ component: DonatePage, name: 'DonatePage', segment: 'donateCode' },
				{ component: AddressCodePage, name: 'AddressCodePage', segment: 'addressCode' },
				{ component: TokenListPage, name: 'TokenListPage', segment: 'tokenList' },
				{ component: PointListPage, name: 'PointListPage', segment: 'pointList/:tokenIndex' },
				{ component: PointTransferPage, name: 'PointTransferPage', segment: 'pointTransfer/:tokenIndex' },
				{ component: ProfilePage, name: 'ProfilePage', segment: 'profile' },
				{ component: BadgeListPage, name: 'BadgeListPage', segment: 'badgeListPage'}
				
			]
		}),
		IonicStorageModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [
		UserApp,
		LoginPage,
		SignupPage,
		ErrorPage,
		TabsPage,
		TutorialPage,
		PointListPage,
		OfferCreatePage,
		PointTransferPage,
		TokenListPage,
		AddressCodePage
	],
	providers: [
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		UserData,
		InAppBrowser,
		SplashScreen
	]
})
export class AppModule { }
