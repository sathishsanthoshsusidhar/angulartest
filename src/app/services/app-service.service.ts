import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { Iregistration } from '../registration';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { map, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class AppServiceService {
  private url = 'http://localhost:3000/registrations';
  constructor(private http: HttpClient) { }
  /*getRegister(): Observable<Iregistration[]> {
    return this.http.get<Iregistration[]>(this.url);
    // .map((res: Response) => <IRergistration[]>res.json())
    // .catch(this.handleError);
  }*/

  addRegister(register: Iregistration): Observable<Iregistration> {
    // console.log(register);
    // console.log(JSON.stringify(register));
    const data = JSON.stringify(register);
    // console.log(this.http.post<Iregistration>(this.url, data, httpOptions));
    return this.http.post<Iregistration>(this.url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
  getRegisterList(): Observable<Iregistration[]> {
    return this.http.get<Iregistration[]>(this.url);
  }

}
