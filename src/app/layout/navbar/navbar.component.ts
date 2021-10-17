import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  titleApp: string = 'Football Ranking App';
  isCollapsed: boolean = true;

  links = [
    { path: 'home', title: 'Strona główna' },
    { path: 'ranking', title: 'Ranking' },
  ];
}
