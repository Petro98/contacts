import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsHeaderComponent } from './components/contacts-header/contacts-header.component';
import { ContactsFilterComponent } from './components/contacts-filter/contacts-filter.component';
import { ContactsMainComponent } from './components/contacts-main/contacts-main.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactsRoutingModule } from './contacts-routing.module';



@NgModule({
	declarations: [
		ContactsHeaderComponent,
		ContactsFilterComponent,
		ContactsMainComponent,
		ContactCardComponent
	],
	imports: [
		CommonModule,
		ContactsRoutingModule
	]
})
export class ContactsModule { }
