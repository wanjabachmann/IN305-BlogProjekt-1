import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogDataService } from 'src/app/core/blog-data.service';
import { StateService, Person } from 'src/app/core/state.service';

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
  blog$: Observable<BlogDetails> | undefined;
  currentState!: Person;
  name = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogDataService,
    private stateService: StateService
  ) {
    // Update the current state if the observable emits a new value
    this.stateService.state$.subscribe((state) => {
      this.currentState = state;
    });
  }

  updateName(name: string) {
    // calls the set method on the service
    this.stateService.setName(name);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.blog$ = this.blogService.getBlogById(id);
    });
  }
}
