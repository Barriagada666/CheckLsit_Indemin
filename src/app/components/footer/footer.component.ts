import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  async openUrl(){
    const url = 'https://www.linkedin.com/in/borisarriagadacv/';
    await Browser.open({ url: url });
  }
}
