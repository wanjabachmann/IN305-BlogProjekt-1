import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

import { z } from 'zod';
import { Observable, catchError, map, of, startWith } from 'rxjs';

export const BlogsPreviewSchema = z.object({
  author: z.string(),
  comments: z.number(),
  contentPreview: z.string(),
  createdByMe: z.boolean(),
  id: z.number(),
  likedByMe: z.boolean(),
  likes: z.number(),
  title: z.string(),
});

export const commentSchema = z.object({
  author: z.string(),
  content: z.string(),
  date: z.string(),
});

export const BlogSchema = z.object({
  author: z.string(),
  comments: z.array(commentSchema),
  content: z.string(),
  likedByMe: z.boolean(),
  likes: z.number(),
  title: z.string(),
});

const BlogOverviewArraySchema = z.array(BlogsPreviewSchema);
const BlogDetailSchema = BlogSchema;

export type BlogOverview = z.infer<typeof BlogsPreviewSchema>;
export type BlogDetail = z.infer<typeof BlogSchema>;

export type BlogOverviewResponse = {
  isLoading: boolean;
  data: BlogOverview[] | null;
  error: Error | null;
};

export type BlogDetailResponse = {
  isLoading: boolean;
  data: BlogDetail | null;
  error: Error | null;
};

export class YourComponent {
  serviceUrl: string = environment.serviceUrl;
}

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  constructor(private httpClient: HttpClient) {}

  getBlogPosts(): Observable<BlogOverviewResponse> {
    return this.httpClient
      .get<BlogOverview[]>(`${environment.serviceUrl}/entries`)
      .pipe(
        map((blogs) => BlogOverviewArraySchema.parse(blogs)),
        map((blogs) => ({ isLoading: false, data: blogs, error: null })),
        startWith({ isLoading: true, data: null, error: null }),
        catchError((error) => of({ isLoading: false, data: null, error }))
      );
  }

  getBlogById(id: number) {
    return this.httpClient
      .get<BlogOverview>(`${environment.serviceUrl}/entries/${id}`)
      .pipe(
        map((blog) => BlogDetailSchema.parse(blog)),
        map((blog) => ({ isLoading: false, data: blog, error: null })),
        startWith({ isLoading: true, data: null, error: null }),
        catchError((error) => of({ isLoading: false, data: null, error }))
      );
  }
}
