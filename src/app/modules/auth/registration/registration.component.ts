import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registorForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.registorForm = this.fb.group({
      username: '',
      email: '',
      password: '',
    });
  }

  submitForm(): void {
    console.log(this.registorForm.getRawValue());
    this.http.post('http://localhost:8000/api/register', this.registorForm.getRawValue())
    .subscribe( () => this.router.navigate(['/login']));
  }
}
