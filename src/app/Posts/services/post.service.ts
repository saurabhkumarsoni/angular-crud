import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/IPost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl = `https://angular-basics-8f86a-default-rtdb.firebaseio.com/`;
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.baseUrl}posts.json`);
  }

  addPost(post: IPost) {
    return this.http.post<IPost[]>(`${this.baseUrl}posts.json`, post);
  }
}
