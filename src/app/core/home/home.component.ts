import { Component, Input } from '@angular/core';

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
  // ! --> form Input - require if Input is correc
  @Input({ required: true }) blogs!: Blog[];
}
