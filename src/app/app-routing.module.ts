import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/auth/login.guard';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { ErrorPageNotFoundPageComponent } from './core/error-page-not-found-page/error-page-not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/blog-overview/blog-overview.module').then(
        (m) => m.BlogOverviewModule
      ),
  },
  {
    path: 'blog-details/:id',
    loadChildren: () =>
      import('./feature/blog-details/blog-details.module').then(
        (m) => m.BlogDetailsModule
      ),
  },
  {
    path: 'add-blog-page',
    loadChildren: () =>
      import('./feature/add-blog-page/add-blog-page.module').then(
        (m) => m.AddBlogPageModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  { path: '**', component: ErrorPageNotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
