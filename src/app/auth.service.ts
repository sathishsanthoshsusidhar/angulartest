import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Iregistration } from './registration';
import { Observable, } from 'rxjs';
import { throwError, concat, of, from } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// Observable

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000';
  constructor(private route: Router, private http: HttpClient) {
  }

  login(form: any): Observable<any> {
    // console.log(form);
    const email = form.email;
    const password = form.password;
    return this.http.get<any>(this.url + '/registrations?email=' + email + '&password=' + password, httpOptions).pipe(
      tap(ev => this.sendToken(ev[0].email)),
      catchError(this.handleError)
    )
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

  sendToken(token: string) {
    localStorage.setItem('LoggedInUser', token);
  }

  getToken() {
    return localStorage.getItem('LoggedInUser');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('LoggedInUser');
    this.route.navigate(['login']);
    // location.reload(true);
    // tslint:disable-next-line: deprecation
    location.reload(true);
  }
}
