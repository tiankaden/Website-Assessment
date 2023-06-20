import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  username = "";
  class = "";

  // stores the character name and class
  constructor(private router: Router, private storage: Storage) {
    storage.get("username").then(val => {
      this.username = val;
    });
    storage.get("class").then(val => {
      this.class = val;
    });
  }

  //stores login
  login() {
    this.storage.set ("username", this.username);
    this.router.navigateByUrl('/tab2' + this.username)
    this.storage.set ("class", this.class);
    this.router.navigateByUrl('/tab2' + this.class)
  }

  ngOnInit() {
  }
}
