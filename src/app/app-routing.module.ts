import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFieldsComponent } from './add-fields/add-fields.component';
import { LadningPageComponent } from './ladning-page/ladning-page.component';
import { UpdateFieldsComponent } from './update-fields/update-fields.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AddNewNotificationsComponent } from './add-new-notifications/add-new-notifications.component';
import { AddNewPlaceholdersComponent } from './add-new-placeholders/add-new-placeholders.component';
import { UpdatePlaceholdersComponent } from './update-placeholders/update-placeholders.component';
import { HtmlRenderComponent } from './html-render/html-render.component';
import { StepActionComponent } from './step-action/step-action.component';
import { CopyComponentPropComponent } from './copy-component-prop/copy-component-prop.component';
import { CopyPastePageComponent } from './copy-paste-page/copy-paste-page.component';
import { CopyFormFiledsComponent } from './copy-form-fileds/copy-form-fileds.component';
import { CopyFiledsValuesComponent } from './copy-fileds-values/copy-fileds-values.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: LadningPageComponent,
  },
  {
    path: 'add',
    component: AddFieldsComponent,
  },
  {
    path: 'update',
    component: UpdateFieldsComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'notifications/add-new',
    component: AddNewNotificationsComponent,
  },
  {
    path: 'notifications/add-new-placeholder',
    component: AddNewPlaceholdersComponent,
  },
  {
    path: 'notifications/update-placeholder',
    component: UpdatePlaceholdersComponent,
  },
  {
    path: 'steps-actions',
    component: StepActionComponent,
  },
  {
    path: 'html',
    component: HtmlRenderComponent,
  },
  {
    path: 'copy-paste',
    component: CopyPastePageComponent,
  },
  {
    path: 'copy-paste/component-property',
    component: CopyComponentPropComponent,
  },
  {
    path: 'copy-paste/form-fields',
    component: CopyFormFiledsComponent,
  },
  {
    path: 'copy-paste/fields-values',
    component: CopyFiledsValuesComponent,
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
