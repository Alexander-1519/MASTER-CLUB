import {Component, OnInit} from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {auditTime, debounceTime, throttleTime} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UIX';

  checkActive$?: Observable<Event>;

  ngOnInit() {
    // this.checkActive$ = fromEvent(document, 'mousemove')
    // this.checkActive$.pipe(throttleTime(1000)).subscribe(data=>console.log(data))
  }
}
