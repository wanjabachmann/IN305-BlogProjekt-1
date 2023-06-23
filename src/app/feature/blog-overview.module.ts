import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../shared/home/home.module';

const routes = [
  {
    path: '',
    component: BlogOverviewComponent,
  },
];

@NgModule({
  declarations: [BlogOverviewComponent],
  imports: [CommonModule, HomeModule, RouterModule.forChild(routes)],
})
export class BlogOverviewModule {}
