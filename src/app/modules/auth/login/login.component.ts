import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../_service/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;

  // private fields
  private unsubscribe: Subscription[] = [];

  errorMessage = '';

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  submitForm() {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('client_id', environment.KEYCLOAK_CLIENT_ID)
      .set('username', this.loginForm.value.username)
      .set('password', this.loginForm.value.password);

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post<any>(`${environment.apiDevUrl}/auth/realms/${environment.KEYCLOAK_REALM}/protocol/openid-connect/token`, body.toString(), {
      headers: headers
    }).subscribe( (res)=>{
     
      if (res.access_token) {
        this.setAuthFromLocalStorage(res);
        this.router.navigate(['home']);
      }
    }, error => {
      this.errorMessage = 'Username hoặc Password không đúng!';
    })

  }
  
  private setAuthFromLocalStorage(auth: any): void {
    localStorage.setItem('access_token', auth.access_token);
  }

  isControlValid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
