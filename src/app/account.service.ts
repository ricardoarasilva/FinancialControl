import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  uri = 'http://localhost:4000/accounts';

  constructor(private http: HttpClient) { }

  addAccount(name, description,actual_value) {
    const obj = {
      name: name,
      description: description,
      actual_value: actual_value
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
