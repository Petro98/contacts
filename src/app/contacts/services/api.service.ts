import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Contact } from '../models/contact';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	private contacts: BehaviorSubject<Contact[]> = new BehaviorSubject([]);
	public contacts$: Observable<Contact[]> = this.contacts.asObservable().pipe(delay(200));
	constructor() {
		const contactsArray = new Array(15).fill(SAMPLE_CONTACT);
		this.contacts.next(contactsArray);
	}
}

const SAMPLE_CONTACT: Contact = {
	firstName: 'Иван',
	lastName: 'Иванов',
	middleName: 'Иванович',
	organization: 'ООО "Ромашки"',
	department: 'Главное отделение',
	position: 'Эксперт',
	email: 'ivan.ivanov@romashki.com',
	phone: '+380443456789'
};
