import {Component} from '@angular/core';

@Component({
  selector: 'app-template-master-page',
  templateUrl: './template-master-page.component.html',
  styleUrls: ['./template-master-page.component.scss']
})
export class TemplateMasterPageComponent {

  showMenu = true;

  togleMenu() {
    this.showMenu = !this.showMenu;
  }
}
