import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './home/home.component';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  constructor(private httpClient: HttpClient) {}

  getBlogPosts() {
    return this.httpClient.get<Blog[]>(`${environment.serviceUrl}/entries`);
  }
}
