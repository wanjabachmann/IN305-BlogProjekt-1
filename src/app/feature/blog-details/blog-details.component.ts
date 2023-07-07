import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  BlogDataService,
  BlogDetailResponse,
} from 'src/app/core/blog-data.service';

export type BlogDetails = {
  author: string;
  comments: Comment[];
  content: string;
  likedByMe: boolean;
  likes: number;
  title: string;
};

export type Comment = {
  author: string;
  content: string;
  date: string;
};

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent {
  blog$: Observable<BlogDetailResponse> | undefined;
  name = '';

  @Input({ required: true }) blog!: BlogDetails;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.blog$ = this.blogService.getBlogById(id);
    });
  }
}
