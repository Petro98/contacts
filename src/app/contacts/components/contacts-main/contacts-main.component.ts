import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-contacts-main',
	templateUrl: './contacts-main.component.html',
	styleUrls: ['./contacts-main.component.scss']
})
export class ContactsMainComponent implements OnInit {

	public contacts: Observable<Contact[]>;
	constructor(private apiService: ApiService) {
	}

	ngOnInit() {
		this.contacts = this.apiService.contacts$;
	}

}
