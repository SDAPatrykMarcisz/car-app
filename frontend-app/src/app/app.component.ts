import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap"
import {AuthenticationService} from './_services';
import {User} from './_models';
import {AddTaskComponent} from "@app/addTask";

@Component({selector: 'app', templateUrl: 'app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  getInitials() {
    return this.currentUser.firstName.charAt(0) + this.currentUser.lastName.charAt(0);
  }
}
