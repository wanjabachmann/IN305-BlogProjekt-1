import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BlogDataService,
  BlogOverviewResponse,
} from 'src/app/core/blog-data.service';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
})
export class BlogOverviewComponent {
  blogs$: Observable<BlogOverviewResponse> | undefined;
  serviceUrl: string = environment.serviceUrl;

  constructor(
    private blogService: BlogDataService,
    private pageRouter: Router
  ) {
    // saves the observable
    this.blogs$ = this.blogService.getBlogPosts();
  }

  selectBlog(id: number) {
    this.pageRouter.navigate(['blog-details', id]);
  }
}
