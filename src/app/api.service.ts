import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { tap, catchError, of } from "rxjs";
import { NewResultSet } from "./NewResultSet";
import { ToastService } from "./toast.service";








export class APIService {

    constructor(private http: HttpClient, public toast: ToastService) { }

    postForm(fullUrl: any, body: any) {

        return this.http.post<NewResultSet<any>>(fullUrl, body).pipe(
            tap((result) => {

                let mesg = "Successful Request !";
                this.toast.success({ message: mesg });
            }),
            catchError((errorResponse: HttpErrorResponse) => {

                let mesg = "Error xD";
                this.toast.error({ message: mesg });
                return of();
            })
        );

    }
    getForm(fullUrl: any) {

        return this.http.get<NewResultSet<any>>(fullUrl).pipe(
            tap((result) => {

                // let mesg = "Successful Request !";
                // this.toast.success({ message: mesg });
                return result;
            }),
            catchError((errorResponse: HttpErrorResponse) => {

                let mesg = "Error xD";
                this.toast.error({ message: mesg });
                return of();
            })
        );

    }
}