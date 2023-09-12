import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-notifications',
  templateUrl: './add-new-notifications.component.html',
  styleUrls: ['./add-new-notifications.component.scss']
})
export class AddNewNotificationsComponent extends APIService implements OnInit {

  constructor(http: HttpClient, toast: ToastService, private router: Router) {
    super(http, toast);
  }
  ngOnInit() { }
  isLoading = false;
  isAdded = false;
  newForm: any;
  template = {
    templateKey: '',
    smsTemplate: '',
    emailTemplate: '',
    title: ''
  }

  addItem($item: any) {
    this.isLoading = true;
    this.postForm("http://localhost:8767/v1/private/add-new-template", $item).subscribe((tt: any) => {

      this.isLoading = false;
      this.isAdded = true;
      this.newForm = tt;

    });
  }

  Back() {

    this.router.navigateByUrl(`/notifications`)

  }
}