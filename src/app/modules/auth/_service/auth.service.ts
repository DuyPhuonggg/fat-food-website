import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription, Observable, catchError, of, mapTo } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
 
  private unsubscribe: Subscription[] = [];

  constructor(private http: HttpClient) {}

  cartSubject = new Subject<any>();

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
