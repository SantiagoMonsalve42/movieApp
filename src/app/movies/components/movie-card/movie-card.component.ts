import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent{
  @Input()
  movie: any;
  constructor(){
  }
 
}
