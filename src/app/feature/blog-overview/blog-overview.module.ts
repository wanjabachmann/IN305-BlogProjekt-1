import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogOverviewComponent } from './blog-overview.component';
import { BlogOverviewCardModule } from '../../shared/blog-overview-card/blog-overview-card.module';
import { FlexLayoutModule } from '@angular/flex-layout';
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
    RouterModule.forChild(routes),
    BlogOverviewCardModule,
    FlexLayoutModule,
  ],
})
export class BlogOverviewModule {}
