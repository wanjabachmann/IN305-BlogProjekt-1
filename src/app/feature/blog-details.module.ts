import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: BlogDetailsComponent,
  },
];

@NgModule({
  declarations: [BlogDetailsComponent],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class BlogDetailsModule {}
