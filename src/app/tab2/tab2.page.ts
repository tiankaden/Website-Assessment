import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
@Component ({})
export class Tab2Page implements OnInit {

  username: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username')
  }
}
