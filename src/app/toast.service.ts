import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastParams } from "./toast-params.model";




@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private defaultSuccessMessages = {
    save: 'Saved Successfully',
    delete: 'Deleted Successfully',
  };
  private defaultErrorMessages = {
    save: 'Save Failed',
    delete: 'Delete Failed',
  };

  constructor(private _snackBar: MatSnackBar) {
  }


  success(params: ToastParams) {
    let { message, value, actionName = "Dismiss", duration = 3500 } = params;
    if (typeof message === 'object') message = 'Saved Successfully';
    this._snackBar.open(message + (value ? ' ' + value : ''), actionName, {
      duration: duration, verticalPosition: 'top',
      horizontalPosition: 'center', panelClass: ['green-snackbar']
    });

  }

  error(params: ToastParams) {
    let { message, value, actionName = "Dismiss", duration = 3500 } = params;
    if (typeof message === 'object') message = 'Save Failed';
    this._snackBar.open(message + (value ? ' ' + value : ''), actionName, { duration: duration, panelClass: ['red-snackbar'] },);
  }

}
