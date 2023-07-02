import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BlogDataService,
  BlogOverviewResponse,
} from 'src/app/core/blog-data.service';
import { StateService, Person } from 'src/app/core/state.service';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
})
export class BlogOverviewComponent {
  blogs$: Observable<BlogOverviewResponse> | undefined;
  currentState!: Person;
  serviceUrl: string = environment.serviceUrl;

  constructor(
    private blogService: BlogDataService,
    private stateService: StateService,
    private pageRouter: Router
  ) {
    // saves the observable
    this.blogs$ = this.blogService.getBlogPosts();

    // Update the current state if the observable emits a new value
    this.stateService.state$.subscribe((state) => {
      this.currentState = state;
    });
  }

  selectBlog(id: number) {
    this.pageRouter.navigate(['blog-details', id]);
  }
}
