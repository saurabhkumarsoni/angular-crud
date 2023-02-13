import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { IUserDetails } from '../models/IUserDetails';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userDetails: IUserDetails | null = null;
  apiKey = 'AIzaSyAXajwxefWR0jxinLfkdFhIq1RFBrKh5vU';
  loggedInEvent = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<IUserDetails> {
    return this.http
      .post<IUserDetails>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}
    `,
        { email, password, returnSecureToken: true }
      )
      .pipe(
        delay(10000),
        tap((data) => {
          this.userDetails = data;
          this.saveDataInLocalStorage();
        })
      );
  }

  register(email: string, password: string): Observable<IUserDetails> {
    return this.http
      .post<IUserDetails>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}
    `,
        { email, password, returnSecureToken: true }
      )
      .pipe(
        tap((data) => {
          this.userDetails = data;
          this.saveDataInLocalStorage();
        })
      );
  }
  saveDataInLocalStorage() {
    let userDetailsJSON = JSON.stringify(this.userDetails);
    localStorage.setItem('userDetails', userDetailsJSON);
  }

  getUserDetailsFromLocalStorage() {
    let userDetailsJSON = localStorage.getItem('userDetails');
    if (userDetailsJSON) {
      this.userDetails = JSON.parse(userDetailsJSON);
      this.loggedInEvent.emit(true);
    }
  }

  logout() {
    localStorage.removeItem('userDetails');
    this.userDetails = null;
    this.loggedInEvent.emit(false);
  }
}
