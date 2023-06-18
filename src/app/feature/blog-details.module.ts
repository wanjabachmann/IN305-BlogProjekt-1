import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { HomeComponent } from '../shared/home/home.component';
import { HomeModule } from '../shared/home/home.module';

const routes: Routes = [
  {
    path: '',
    component: BlogDetailsComponent,
  },
];

@NgModule({
  declarations: [BlogDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BlogDetailsModule {}
