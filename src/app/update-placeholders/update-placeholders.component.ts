import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-placeholders',
  templateUrl: './update-placeholders.component.html',
  styleUrls: ['./update-placeholders.component.scss']
})
export class UpdatePlaceholdersComponent extends APIService {

  constructor(http: HttpClient, toast: ToastService, private router: Router) {
    super(http, toast);
  }
  exsistingTemplate: any;
  searchForm: any;


  Search() {
    this.getForm("http://localhost:8767/v1/private/get-all-placeholder/" + this.searchForm).subscribe((tt: any) => {
      this.exsistingTemplate = tt;
    });
  }

  update($item: any) {
    this.postForm("http://localhost:8767/v1/private/update-placeholder", $item).subscribe((tt: any) => {

    });
  }

  Back() {

    this.router.navigateByUrl(`/notifications`)

  }
}
