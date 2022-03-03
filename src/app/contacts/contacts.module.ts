import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsHeaderComponent } from './components/contacts-header/contacts-header.component';
import { ContactsFilterComponent } from './components/contacts-filter/contacts-filter.component';
import { ContactsMainComponent } from './components/contacts-main/contacts-main.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
	declarations: [
		ContactsHeaderComponent,
		ContactsFilterComponent,
		ContactsMainComponent,
		ContactCardComponent
	],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactsModule { }
