import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(payload: any) {
    console.log('Payload', payload);
    return this._http.post(
      'https://jsonplaceholder.typicode.com/todos',
      payload
    );
  }

  signup(payload: any) {
    return this._http.post('http://api.example.com', payload);
  }

  logout() {
    return;
  }
}
