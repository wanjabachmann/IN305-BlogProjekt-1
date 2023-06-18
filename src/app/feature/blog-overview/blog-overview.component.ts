import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDataService } from 'src/app/core/blog-data.service';
import { Blog } from 'src/app/shared/home/home.component';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
})
export class BlogOverviewComponent {
  blogs$: Observable<Blog[]>;

  constructor(private blogService: BlogDataService) {
    // saves the observable
    this.blogs$ = this.blogService.getBlogPosts();
  }
}
