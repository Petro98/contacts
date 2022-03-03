import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contacts-filter',
  templateUrl: './contacts-filter.component.html',
  styleUrls: ['./contacts-filter.component.scss']
})
export class ContactsFilterComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  public formFilter = new FormGroup({
    select: new FormControl('option0'),
    input: new FormControl(''),
    toggleOne: new FormControl(false),
    toggleTwo: new FormControl(true)
  });


  public selectOptions = new Array(5);
  public isFocus: boolean;


  constructor() {
  }

  ngOnInit() {

    const $ = this.formFilter.valueChanges.subscribe(res => {
      console.log(res);
    });

    this.subscriptions.add($);
  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
