import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
} from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public checkAuth$ = new EventEmitter();

  constructor(loginService: LoginService) {
    this.checkAuth$.subscribe(() => {
      loginService.login();
    });
  }
}
