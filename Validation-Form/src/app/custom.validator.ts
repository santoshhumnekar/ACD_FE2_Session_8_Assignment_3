import { AbstractControl } from '@angular/forms';

//Custom validations
export function usernameMatcher(control: AbstractControl): { [key: string]: boolean } {
	//const user = control.get('username');
	let userpatt = /^([a-zA-Z0-9])\w+$/g;
	
	if (control.value.match(userpatt) && control.value.length > 8) {
		
		return null;
	}
	else{
		//console.log("USERs:" + user.value);
		return {nomatchuser:true};
	
	}
};

export function passwordMatcher(control: AbstractControl): { [key: string]: boolean } {
	
	let passpatt = /^([a-z0-9])\w+$/g;;
	
	if (control.value.match(passpatt) && control.value.length > 6) {

		return null;
	}
	else {
		
		return { nomatchpass: true };

	}
};