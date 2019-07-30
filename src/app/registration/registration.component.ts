import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DATEPICKER_VALIDATORS, getMatFormFieldMissingControlError } from '@angular/material';
import { FormBuilder, Validators, FormGroup, NgForm, AbstractFormGroupDirective } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppServiceService } from '../services/app-service.service';
import { Observable } from 'rxjs';
import { group } from '@angular/animations';
import { Iregistration } from '../registration';
import { Config } from 'protractor/built/config';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form;
  // route: any;
  constructor(private fb: FormBuilder, private service: AppServiceService, private auth: AuthService, private route: Router) {
    this.form = fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
  property;
  ngOnInit() {
    // this.getRegister();
  }
  /*getRegister(): void {
    this.service.getRegister()
      .subscribe(
        arg => this.property = arg
      );
    console.log(this.property);
  }*/
  addRegister(): void {
    if (this.form.valid) {
      // console.log(this.form.value.username);
      // console.log(this.form.value.email);
      // console.log(this.form.value.password);
      this.service.addRegister(this.form.value)
        .subscribe(
          // (data: Config) => this.config = {
          //   heroesUrl: data['email'],
          //   textfile: data['password'],
          //   console.log(heroesUrl),
          //   console.log(textfile)
          // }

          (data) => {
            // tslint:disable-next-line: ban-types
            // console.log(data['email']);
            // const email: string = data['email'],
            // const password: string = data['password']
            this.auth.login(data)
              .pipe(first())
              .subscribe(
                data => {
                  // console.log(data);
                  this.route.navigate(['home']);
                },
                error => {

                }
                // this.route.navigate(['home'])
              );
          }
        );
    }
  }


}
