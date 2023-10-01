import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

import { MoviesService } from '../../services/movies-service.service';
import { TipoBusqueda } from '../../interfaces/movies-interfaces';


@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html',
  styleUrls: ['./get-movies.component.css']
})
export class GetMoviesComponent {
  //#region variables
  formBusqueda!:FormGroup;
  intNumeroPagina: number = 1;
  intTotalPaginas!: number;
  peliculasListado:any[]=[];
  listadoTipo:TipoBusqueda[]=[
    {id:1,tipo:'cartelera'},
    {id:3,tipo:'mejores'},
    {id:4,tipo:'proximas'},
    {id:2,tipo:'popular'},
  ]
  //#endregion
  
  constructor(private moviesService:MoviesService,
              private fb: FormBuilder){
    this.initForm();
    this.onChangeBusqueda(this.intNumeroPagina);
  }
  //#region init variables
  initForm():void{
    this.formBusqueda = this.fb.group( {
      tipo_busqueda:[1]
    });
  }
  //#endregion
  //#region eventos
  paginaActualChanges(value: number){
   
    this.intNumeroPagina=value;
    const TipoBusqueda = this.formBusqueda.value.tipo_busqueda;
    this.onChangeBusqueda(TipoBusqueda,false);
  }
  onChangeBusqueda(value: any,cambia: boolean = true){
    if(cambia){
      this.intNumeroPagina=1;
    }
    if(!Number(value)){
      value=Number(value.target.value);
    }
    console.log(value);
    switch(Number(value)){
      case 1:
        this.buscarCartelera();
        break;
      case 2:
        this.buscarPopulares();
        break;
      case 3:
        this.buscarMejores();
        break;
      case 4:
        this.buscarProximas();
        break;
      default:
        new Error("no valido");
        break;
    }
  }
  //#endregion
  //#region suscripciones
  buscarCartelera():void{
    this.moviesService
        .getEnCartelera(this.intNumeroPagina)
        .subscribe( response =>{
          this.peliculasListado = response.results;
          this.intTotalPaginas=response.total_pages;
        })
  }
  buscarMejores():void{
    this.moviesService
        .getMejores(this.intNumeroPagina)
        .subscribe( response =>{
          this.peliculasListado = response.results;
          this.intTotalPaginas=response.total_pages;
        })
  }
  buscarPopulares():void{
    this.moviesService
        .getPopulares(this.intNumeroPagina)
        .subscribe( response =>{
          this.peliculasListado = response.results;
          this.intTotalPaginas=response.total_pages;
        })
  }
  buscarProximas():void{
    this.moviesService
        .getProximas(this.intNumeroPagina)
        .subscribe( response =>{
          this.peliculasListado = response.results;
          this.intTotalPaginas=response.total_pages;
        })
  }
  //#endregion
}
