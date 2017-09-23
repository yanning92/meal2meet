import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyC0G-jwbLWo8PmxlZNGqEeLvCj97ts9Aw8",
  authDomain: "mealtomeat.firebaseapp.com",
  databaseURL: "https://mealtomeat.firebaseio.com",
  projectId: "mealtomeat",
  storageBucket: "",
  messagingSenderId: "1072662515798"
};;

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
