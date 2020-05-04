import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  id: String;

  constructor(private route: ActivatedRoute,
    private router: Router) { 

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
