import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'moviesApp',
    loadChildren: () => import('./movies/movies.module').then(
      module => module.MoviesModule
    )
  },
  {
    path: '**',
    redirectTo: 'moviesApp'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
