import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {

  @Output()
  togleMenu = new EventEmitter();

  menuTogle() {
    this.togleMenu.emit();
  }
}
