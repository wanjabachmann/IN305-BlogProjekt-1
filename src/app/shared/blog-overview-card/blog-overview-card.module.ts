import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewCardComponent } from './blog-overview-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogOverviewCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [BlogOverviewCardComponent],
  providers: [],
})
export class HomeModule {}
