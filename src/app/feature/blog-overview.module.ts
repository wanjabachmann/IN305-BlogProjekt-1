import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../shared/blog-overview-card/blog-overview-card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

const routes = [
  {
    path: '',
    component: BlogOverviewComponent,
  },
];

@NgModule({
  declarations: [BlogOverviewComponent],
  imports: [
    CommonModule,
    HomeModule,
    MatProgressSpinnerModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ],
})
export class BlogOverviewModule {}
