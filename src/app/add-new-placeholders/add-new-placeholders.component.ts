import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-placeholders',
  templateUrl: './add-new-placeholders.component.html',
  styleUrls: ['./add-new-placeholders.component.scss']
})
export class AddNewPlaceholdersComponent extends APIService {

  constructor(http: HttpClient, toast: ToastService, private router: Router) {
    super(http, toast);
  }

  templateId: any = '';
  QTemplate: any = [];
  templatePlaceholder = {
    templateId: '',
    name: '',
    isRequired: '',
    description: ''
  }


  addNewPlaceholder($item: any) {
    $item.templateId = this.templateId;
    this.QTemplate.push($item);
    this.templatePlaceholder = {
      templateId: '',
      name: '',
      isRequired: '',
      description: ''
    }

  }

  removeItemFromQ($item: any) {
    this.QTemplate.splice(this.QTemplate.indexOf($item), 1)
  }

  postMany() {
    if (this.templateId == '') {
      this.toast.error({ message: "Please enter a Template ID" });
      return;
    }
    else {
      this.QTemplate.forEach((element: any) => {
        element.templateId = this.templateId;
      });
      debugger
      this.postForm("http://localhost:8767/v1/private/post-many-placeholder", this.QTemplate).subscribe((tt: any) => {

      });
    }



  }
  Back() {

    this.router.navigateByUrl(`/notifications`)

  }
}
