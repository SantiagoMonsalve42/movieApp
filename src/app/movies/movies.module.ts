import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { GetMoviesComponent } from './pages/get-movies/get-movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';



@NgModule({
  declarations: [
  
    GetMoviesComponent,
       MovieCardComponent,
       PaginatorComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  
})
export class MoviesModule { }
