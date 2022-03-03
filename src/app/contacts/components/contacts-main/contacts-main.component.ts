import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../../models/contact';
import {ApiService} from '../../services/api.service';
import {map, scan} from 'rxjs/operators';
import 'rxjs-compat/add/observable/range';

@Component({
  selector: 'app-contacts-main',
  templateUrl: './contacts-main.component.html',
  styleUrls: ['./contacts-main.component.scss']
})
export class ContactsMainComponent implements OnInit {

  public contacts: Observable<Contact[]>;

  public interval$: Observable<Array<number>>;
  public intervalLength = 5;
  public paginatorChanged = 0;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.interval$ = this.getIntervalObservable(1, this.intervalLength);
    this.contacts = this.apiService.contacts$;
  }


  public getIntervalObservable(start: number, count: number): Observable<Array<number>> {
    return Observable.range(start, count).pipe(
      map(res => [res]),
      scan((acc, value) => acc.concat(value), [])
    );
  }
}
