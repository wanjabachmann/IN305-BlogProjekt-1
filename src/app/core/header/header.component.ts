import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  preferredUsername = '';

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.updateAuth();
    this.loginService.getUsernameObservable().subscribe((username) => {
      this.preferredUsername = username;
    });
  }

  login() {
    this.loginService.login();
  }

  logout() {
    this.loginService.logout();
  }
}
