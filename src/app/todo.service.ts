import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor(private http: Http) {
  }
  getService() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);
  }


}
