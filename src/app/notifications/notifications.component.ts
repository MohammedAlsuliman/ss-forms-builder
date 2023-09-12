import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  routeToAdd() {
    this.router.navigateByUrl(`/notifications/add-new`)
  }

  update() {
    this.router.navigateByUrl(`/notifications/update-placeholder`)
  }

  routeToUpdate() {
    this.router.navigateByUrl(`/notifications/add-new-placeholder`)
  }

  Back() {

    this.router.navigateByUrl(`/homepage`)

  }
}
