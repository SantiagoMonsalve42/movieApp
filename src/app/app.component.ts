import { Component, OnInit } from '@angular/core';
import { LoaderService } from './common/service/loader.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'moviesApp';
  loading: boolean = false;

  constructor(
    private _loading: LoaderService
  ){ }
  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) 
      .subscribe((loading:boolean) => {
        this.loading = loading;
      });
  }
}
