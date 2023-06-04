import { Component } from '@angular/core';
import { BlogDataService } from './core/blog-data.service';
import { Blog } from './core/home/home.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-blog-app-Wanja-Bachmann';
  blogs$: Observable<Blog[]>;

  constructor(private blogService: BlogDataService) {
    // saves the observable
    this.blogs$ = this.blogService.getBlogPosts();
  }
}
