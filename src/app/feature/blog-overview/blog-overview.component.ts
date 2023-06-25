import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDataService, BlogResponse } from 'src/app/core/blog-data.service';
import { StateService, Person } from 'src/app/core/state.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
})
export class BlogOverviewComponent {
  blogs$: Observable<BlogResponse>;
  currentState!: Person;

  constructor(
    private blogService: BlogDataService,
    private stateService: StateService
  ) {
    // saves the observable
    this.blogs$ = this.blogService.getBlogPosts();

    // Update the current state if the observable emits a new value
    this.stateService.state$.subscribe((state) => {
      this.currentState = state;
    });
  }
}
