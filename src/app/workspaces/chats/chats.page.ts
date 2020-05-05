import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../../services/userapi.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  

  constructor(private userapiService: UserapiService, private menuController: MenuController) {
    //console.log('manoj', this.routes)

  }

  ngOnInit() {
    console.log('called');
  }

  ionViewWillEnter() {
    //this.menuController.enable(true, "main");
    //this.isPaneDisble = false;
    console.log('will enter')
  }

}

