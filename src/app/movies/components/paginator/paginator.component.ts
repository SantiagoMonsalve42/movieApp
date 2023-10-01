import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input()
  currentPage: number = 1;
  @Input()
  totalPages: number=2;
  @Output() itemSelected = new EventEmitter<number>();
  constructor(){
  }
  calcularPaginasVisibles(): number[]{
    return [this.currentPage-2,this.currentPage-1,this.currentPage,this.currentPage+1,this.currentPage+2];
  }
  emitSelected(type: string|number): void{
    switch(type){
      case 'anterior':
        this.itemSelected.emit(this.currentPage-1);
        break;
      case 'siguiente':
        this.itemSelected.emit(this.currentPage+1);
        break;
      default:
        this.itemSelected.emit(Number(type));
          break;
    }
  }
}
