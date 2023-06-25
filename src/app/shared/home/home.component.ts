import { Component, Input } from '@angular/core';
import { BlogResponse } from 'src/app/core/blog-data.service';
// Recommended to define it directly in the componenet for reuse
export type Blog = {
  author: string;
  comments: number;
  contentPreview: string;
  createdByMe: boolean;
  id: number;
  likedByMe: boolean;
  likes: number;
  title: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input({ required: true }) blogs!: BlogResponse;
}
