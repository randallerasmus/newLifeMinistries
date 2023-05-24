import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router
    ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onCancel(): void {
    // Handle cancel button action
  }

  onLogin(): void {
    if (this.loginForm?.valid) {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    // Perform login logic with username and password
      this._router.navigate(['/dashboard']);
  }
}
}
