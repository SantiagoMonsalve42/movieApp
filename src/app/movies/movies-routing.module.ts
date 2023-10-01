import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetMoviesComponent } from './pages/get-movies/get-movies.component';

const routes: Routes = [
  {
    path: 'getAll',
    component: GetMoviesComponent
  },
  {
    path: '**',
    redirectTo: 'getAll'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
