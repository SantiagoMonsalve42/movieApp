import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = environment.apiBase;
  constructor(private httpClient: HttpClient) {
  }
  getEnCartelera(page:number): Observable<any>{
    return this.httpClient.get(this.apiUrl+'movie/now_playing?page='+page);
  }
  getPopulares(page:number): Observable<any>{
    return this.httpClient.get(this.apiUrl+'movie/popular?page='+page);
  }
  getMejores(page:number): Observable<any>{
    return this.httpClient.get(this.apiUrl+'movie/top_rated?page='+page);
  }
  getProximas(page:number): Observable<any>{
    return this.httpClient.get(this.apiUrl+'movie/upcoming?page='+page);
  }
}
