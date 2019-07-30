import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  email: string;
  password: string;
  constructor(private auth: AuthService, private fb: FormBuilder, private route: Router) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login(): void {
    if (this.form.valid) {
      // this.auth.sendToken(this.form.value.email)
      // console.log(this.form.value);
      this.auth.login(this.form.value).subscribe(
        (data) => {
          // console.log(data);
          this.route.navigate(['home'])
        }
        // this.route.navigate(['home'])
      );

    }
  }



}
