import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../model/IUsers';

@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>('https://api.escuelajs.co/api/v1/users');
  }

}
