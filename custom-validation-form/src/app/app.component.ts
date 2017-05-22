import { Component } from '@angular/core';
import { usernameMatcher, passwordMatcher } from './custom.validator';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	complexForm: FormGroup;
  passwordpatt = '[a-z0-9]{7,20}';

	constructor(fb: FormBuilder) {
		this.complexForm = fb.group({

			Username: ['', Validators.compose([Validators.required, usernameMatcher])],
			password: ['', Validators.compose([Validators.required, passwordMatcher])]
			
		})
	
	}
	
	submitForm(form:any)
	{
		console.log("values:");
		console.log(form);
	}
}
