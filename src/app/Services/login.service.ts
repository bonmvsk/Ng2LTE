import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoginService {
  private headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  private options = new RequestOptions({ headers: this.headers }); // Create a request option

  constructor(private http: Http) { }

  login(username: string, password: string): Observable<any> {
    let data = JSON.stringify({ username: username, password: password })
    return this.http.post('http://localhost:7777/member/login', data, this.options)
      .map((res: Response) => {
        return res.json();
      });
  }
}
