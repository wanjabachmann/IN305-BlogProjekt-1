import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDataService, BlogResponse } from 'src/app/core/blog-data.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
})
export class BlogOverviewComponent {
  blogs$: Observable<BlogResponse>;

  constructor(private blogService: BlogDataService) {
    // saves the observable
    this.blogs$ = this.blogService.getBlogPosts();
  }
}
