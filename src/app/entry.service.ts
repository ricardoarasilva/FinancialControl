import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  uri = 'http://localhost:4000/entries';

  constructor(private http: HttpClient) { }

  addEntry(type, description,value,done) {
    const obj = {
      type: type,
      description: description,
      value: value,
      done: done
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
