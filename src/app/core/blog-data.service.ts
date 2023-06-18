import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

import { z } from 'zod';
import { map } from 'rxjs';

export const BlogSchema = z.object({
  id: z.number(),
  title: z.string(),
  contentPreview: z.string(),
  author: z.string(),
  likes: z.number(),
  comments: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
});

const BlogArraySchema = z.array(BlogSchema);

export type Blog = z.infer<typeof BlogArraySchema>;

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  constructor(private httpClient: HttpClient) {}

  getBlogPosts() {
    return this.httpClient
      .get<Blog[]>(`${environment.serviceUrl}/entries`)
      .pipe(map((blogs) => BlogArraySchema.parse(blogs)));
  }

  getBlogById(id: number) {
    return this.httpClient
      .get<Blog>(`${environment.serviceUrl}/entries/${id}`)
      .pipe(map((blog) => BlogSchema.parse(blog)));
  }
}
