import {inject, Injectable, signal} from '@angular/core';
import {environments} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {AuthStatus, User} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = environments.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  constructor() {
  }
}
