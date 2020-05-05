import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserapiService } from './services/userapi.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  users: any[] = [];
  channels: any[] = [];
  pageUIndex: Number = 1;
  pageUSize: Number = 15;
  pageCIndex: Number = 1;
  pageCSize: Number = 15;
  isPaneDisble = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userapiService: UserapiService,
    private menuController: MenuController
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    const {users, channels} = await this.getData();
    this.users = users;
    this.channels = channels;
    console.log('AppCOmponent onInit()');
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async getData() {
    const [users, channels] = await Promise.all([this.userapiService.getUsers(this.pageUIndex, this.pageUSize),
      this.userapiService.getChannels(this.pageCIndex, this.pageCSize)]);
    return {users, channels};
  }

  async loadDataUsers(event) {
    this.pageUIndex = +this.pageUIndex + 1;
    const prev = [...this.users];
    const res = await this.userapiService.getUsers(this.pageUIndex, this.pageUSize);
    this.users = [...prev, ...res];
    event.target.complete();

    if (this.users.length == 1000) {
      event.target.disabled = true;
    }
  }

  async loadDataChannels(event) {
    this.pageCIndex = +this.pageCIndex + 1;
    const prev = [...this.channels];
    const res = await this.userapiService.getChannels(this.pageCIndex, this.pageCSize);
    this.channels = [...prev, ...res];
    event.target.complete();

    if (this.channels.length == 1000) {
      event.target.disabled = true;
    }
  }

}
