import { ViewportScroller, Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap, catchError, of } from 'rxjs';
import { NewResultSet } from '../NewResultSet';
import { ToastService } from '../toast.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-fields',
  templateUrl: './add-fields.component.html',
  styleUrls: ['./add-fields.component.scss']
})
export class AddFieldsComponent implements OnInit {

  constructor(private http: HttpClient, public toast: ToastService, private viewportScroller: ViewportScroller, private router: Router) { }
  customInput = "";
  isOther = false;
  isOtherExtra = false;
  onOptionSelected(): void {

    console.log('Selected option:', this.allForm.formField.fieldTypeName);
    if (this.allForm.formField.fieldTypeName == 'other') {
      this.allForm.formField.fieldTypeName = ''
      this.isOther = true
      this.isOtherExtra = true
    }
    else {
      this.getPropiertyName(this.allForm.formField.fieldTypeName)
    }

  }

  onOptionSelectedForVali(): void {

    console.log('Selected option:', this.allForm.extraValidation);


  }

  onCustomInputChange(): void {

    console.log('Custom input:', this.allForm.formField.fieldTypeName);
  }
  isLoading = false;
  title = 'forms-builder';
  showSourceForm = false;
  forms: any = []
  fieldTypeProperty: any = []

  extraValidationList: any = [];
  sourceList: any = [];
  I18nSource = {
    ar: '',
    en: ''
  }
  I18n = {
    ar: '',
    en: ''
  }

  source = {
    title: this.I18nSource,
    value: '',
    order: ''
  }

  formField = {
    fieldName: '',
    title: this.I18n,
    api: '',
    order: '',
    fieldTypeName: '',
    stepName: '',
    formId: '',
    source: ''
  };
  extraValidation = {
    key: '',
    value: ''
  }
  allForm = {
    formField: this.formField,
    isRequired: '',
    maxLength: '',
    minLength: '',
    extraValidation: ''
  }





  ngOnInit() {

  }

  submitForm() {

  }

  addItem($item: any) {
    $item.formField.source = this.sourceList;
    $item.extraValidation = this.extraValidationList;
    this.forms.push($item)
    this.I18n = {
      ar: '',
      en: ''
    };
    this.I18nSource = {
      ar: '',
      en: ''
    }
    this.source = {
      title: this.I18nSource,
      value: '',
      order: ''
    }
    this.formField = {
      fieldName: '',
      title: this.I18n,
      api: '',
      order: '',
      fieldTypeName: '',
      stepName: '',
      formId: '',
      source: ''
    };
    this.extraValidation = {
      key: '',
      value: ''
    }
    this.allForm = {
      formField: this.formField,
      isRequired: '',
      maxLength: '',
      minLength: '',
      extraValidation: ''
    };
    this.sourceList = [];
    this.extraValidationList = [];
    this.isOther = false
    this.isOtherExtra = false;
  }
  showLOVForm() {
    this.showSourceForm = true;
  }
  addListOfValues($item: any) {
    debugger
    this.sourceList.push($item);
    this.I18nSource = {
      ar: '',
      en: ''
    }
    this.source = {
      title: this.I18nSource,
      value: '',
      order: ''
    }
    debugger
  }

  AddExtraValidation($item: any) {
    debugger
    this.extraValidationList.push($item);
    this.extraValidation = {
      key: '',
      value: ''
    }

  }
  removeItem($item: any) {
    this.forms.splice(this.forms.indexOf($item), 1)
  }
  removeLOVItem($item: any) {
    this.sourceList.splice(this.sourceList.indexOf($item), 1)
  }

  removeExtraValiItem($item: any) {
    this.extraValidationList.splice(this.sourceList.indexOf($item), 1)
  }

  Back() {

    this.router.navigateByUrl(`/homepage`)

  }
  PostForm() {
    this.scrollToTop()

    this.isLoading = true;
    this.http.post<NewResultSet<any>>("http://localhost:8666/internal/add-form-fields", this.forms).pipe(
      tap((result) => {
        this.isLoading = false;
        let mesg = "The Records has been Added successfully";
        this.toast.success({ message: mesg });
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        this.isLoading = false;
        let mesg = "There was a problem adding the form";
        this.toast.error({ message: mesg });
        return of();
      })
    ).subscribe((result: any) => {
      debugger
    });
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  getPropiertyName(ss: any) {
    
    this.http.get<NewResultSet<any>>("http://localhost:8666/internal/all-property-by-field-name/" + ss).pipe(
      tap((result) => {

      }),
      catchError((errorResponse: HttpErrorResponse) => {

        return of();
      })
    ).subscribe((result: any) => {
      this.fieldTypeProperty = result
      debugger
    });

  }

}
