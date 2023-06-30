import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewCardComponent } from './blog-overview-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogOverviewCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
  ],
  exports: [BlogOverviewCardComponent],
  providers: [],
})
export class BlogOverviewCardModule {}
