import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../../services/userapi.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  users: any[] = [];
  channels: any[] = [];
  pageUIndex: Number = 1;
  pageUSize: Number = 15;
  pageCIndex: Number = 1;
  pageCSize: Number = 15;
  isPaneDisble = false;

  constructor(private userapiService: UserapiService, private menuController: MenuController) {
    //console.log('manoj', this.routes)

  }

 async ngOnInit() {
  const {users, channels} = await this.getData();
  this.users = users;
  this.channels = channels;
  console.log('called');
   
  }

  ionViewWillEnter() {
    //this.menuController.enable(true, "main");
    //this.isPaneDisble = false;
    console.log('will enter')
  }

  ionViewWillLeave() {
    //this.isPaneDisble = true;
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

