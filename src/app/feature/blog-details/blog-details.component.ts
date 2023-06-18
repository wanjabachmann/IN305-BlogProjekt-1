import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogDataService } from 'src/app/core/blog-data.service';
import { Blog } from 'src/app/shared/home/home.component';

/* export type BlogDetails = {
  title: string
  content: string
  comments: Comment[]
  author: string
  likes: number
  likedByMe: boolean
}

export type BlogAll = BlogDetails & Blog

export type Comment = {
  content: string
  date: string
  author: string
} */

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent {
  @Input({ required: true }) blogs!: Blog[];

  blog$: Observable<Blog> | undefined;

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
