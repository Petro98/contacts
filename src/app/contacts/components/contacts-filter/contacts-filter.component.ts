import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-contacts-filter',
	templateUrl: './contacts-filter.component.html',
	styleUrls: ['./contacts-filter.component.scss']
})
export class ContactsFilterComponent implements OnInit {

	public selectOptions = new Array(5);
	public fg = new FormGroup({
		select: new FormControl(),
		input: new FormControl()
	});
	constructor() { }

	ngOnInit() {
	}

}
