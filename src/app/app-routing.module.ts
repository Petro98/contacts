import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'contacts'
			},
			{
				path: 'contacts',
				loadChildren: './contacts/contacts.module#ContactsModule'
			},
			{
				path: '**',
				redirectTo: 'contacts',
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
