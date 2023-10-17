import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copy-paste-page',
  templateUrl: './copy-paste-page.component.html',
  styleUrls: ['./copy-paste-page.component.scss']
})
export class CopyPastePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  componentProp() {
    this.router.navigateByUrl(`/copy-paste/component-property`)
  }

  formFields() {
    this.router.navigateByUrl(`/copy-paste/form-fields`)
  }

  fieldsValues() {
    this.router.navigateByUrl(`/copy-paste/fields-values`)
  }

  

  Back() {

    this.router.navigateByUrl(`/homepage`)

  }

}
