import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { interval } from 'rxjs';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private httpService: HttpService) {
    console.log('blah');
    this.httpService.getData().subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
}
