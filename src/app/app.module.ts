import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { UpdateFieldsComponent } from './update-fields/update-fields.component';
import { AddFieldsComponent } from './add-fields/add-fields.component';
import { LadningPageComponent } from './ladning-page/ladning-page.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AddNewNotificationsComponent } from './add-new-notifications/add-new-notifications.component';
import { AddNewPlaceholdersComponent } from './add-new-placeholders/add-new-placeholders.component';
import { UpdatePlaceholdersComponent } from './update-placeholders/update-placeholders.component';
import { HtmlRenderComponent } from './html-render/html-render.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateFieldsComponent,
    AddFieldsComponent,
    LadningPageComponent,
    NotificationsComponent,
    AddNewNotificationsComponent,
    AddNewPlaceholdersComponent,
    UpdatePlaceholdersComponent,
    HtmlRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
