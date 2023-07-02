import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
