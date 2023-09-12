import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ladning-page',
  templateUrl: './ladning-page.component.html',
  styleUrls: ['./ladning-page.component.scss']
})
export class LadningPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  routeToAdd() {
    this.router.navigateByUrl(`/add`)
  }

  routeToUpdate() {
    this.router.navigateByUrl(`/update`)
  }

  routeToNotifications() {
    this.router.navigateByUrl(`/notifications`)
  }

}
