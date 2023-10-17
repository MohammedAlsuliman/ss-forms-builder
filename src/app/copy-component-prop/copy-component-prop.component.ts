import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-copy-component-prop',
  templateUrl: './copy-component-prop.component.html',
  styleUrls: ['./copy-component-prop.component.scss']
})
export class CopyComponentPropComponent extends APIService implements OnInit {

  constructor(http: HttpClient, toast: ToastService, private router: Router) {
    super(http, toast);
  }
  ngOnInit() {
    this.getAllSubs();
  }
  subs: any;
  stepsActions: any;
  searchForm: any;
  toPost = {
    formId: '',
    subToCopy: '',
    subToPaste: ''
  }
  actions: any;
  steps: any;

  postNew($item: any) {
    if ($item.formId == '') {
      this.toast.error({ message: "Please enter a Form ID" });
      return;
    }
    if ($item.subToCopy == '') {
      this.toast.error({ message: "Please select a Subsidiary" });
      return;
    }
    if ($item.subToPaste == '') {
      this.toast.error({ message: "Please select a Subsidiary" });
      return;
    }
    this.getForm("http://localhost:8666/internal/copy-properties/" + $item.formId + "/" + $item.subToCopy + "/" + $item.subToPaste).subscribe((tt: any) => {
      let mesg = "Added Successful !";
      this.toast.success({ message: mesg });
    });
  }

  getAllSubs() {

    this.getForm("http://localhost:8666/internal/all-sub").subscribe((tt: any) => {
      this.subs = tt;
    });
  }

  Back() {

    this.router.navigateByUrl(`/copy-paste`)

  }

}
