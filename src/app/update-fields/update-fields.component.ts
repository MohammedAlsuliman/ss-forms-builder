import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap, catchError, of } from 'rxjs';
import { NewResultSet } from '../NewResultSet';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-fields',
  templateUrl: './update-fields.component.html',
  styleUrls: ['./update-fields.component.scss']
})
export class UpdateFieldsComponent implements OnInit {

  constructor(private http: HttpClient, public toast: ToastService, private router: Router) { }
  ngOnInit() { }

  searchForm: any;
  allForms: any;
  allvali: any;

  Search() {
    // http://localhost:8666/internal/get-custom-fields/16

    this.http.get<NewResultSet<any>>("http://localhost:8666/internal/get-custom-fields/" + this.searchForm).pipe(
      tap((result) => {

      }),
      catchError((errorResponse: HttpErrorResponse) => {

        return of();
      })
    ).subscribe((result: any) => {
      this.allForms = result;
      debugger
    });
  }

  update(item: any) {
    this.http.post<NewResultSet<any>>("http://localhost:8666/internal/update-field", item).pipe(
      tap((result) => {

      }),
      catchError((errorResponse: HttpErrorResponse) => {

        return of();
      })
    ).subscribe((result: any) => {
      debugger
    });
  }
  updateComponent(item: any) {
    debugger
    this.http.post<NewResultSet<any>>("http://localhost:8666/internal/update-component", item).pipe(
      tap((result) => {

      }),
      catchError((errorResponse: HttpErrorResponse) => {

        return of();
      })
    ).subscribe((result: any) => {
      debugger
    });
  }

  Back() {

    this.router.navigateByUrl(`/homepage`)

  }
}
