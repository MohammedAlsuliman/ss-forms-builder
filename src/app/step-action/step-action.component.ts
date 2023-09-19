import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap, catchError, of } from 'rxjs';
import { NewResultSet } from '../NewResultSet';
import { ToastService } from '../toast.service';
import { APIService } from '../api.service';

@Component({
  selector: 'app-step-action',
  templateUrl: './step-action.component.html',
  styleUrls: ['./step-action.component.scss']
})
export class StepActionComponent extends APIService implements OnInit {

  constructor(http: HttpClient, toast: ToastService, private router: Router) {
    super(http, toast);
  }
  ngOnInit() {
    this.getActions()
    this.getSteps()
  }
  stepsActions: any;
  searchForm: any;
  toPost = {
    serviceId: '',
    actionId: '',
    stepId: ''
  }
  actions: any;
  steps: any;


  Search() {
    this.getForm("http://localhost:8666/v1/private/services/steps-actions/" + this.searchForm).subscribe((tt: any) => {
      this.stepsActions = tt;
    });
  }

  getActions() {
    this.getForm("http://localhost:8666/v1/private/services/actions/get-all").subscribe((tt: any) => {
      this.actions = tt;

    });
  }

  getSteps() {
    this.getForm("http://localhost:8666/v1/private/services/steps/get-all").subscribe((tt: any) => {
      this.steps = tt;
    });
  }

  update($item: any) {
    this.postForm("http://localhost:8767/v1/private/update-placeholder", $item).subscribe((tt: any) => {

    });
  }

  postNew($item: any) {

    this.postForm("http://localhost:8666/v1/private/services/new/steps-actions", $item).subscribe((tt: any) => {

    });
  }

  Back() {

    this.router.navigateByUrl(`/homepage`)

  }
}
