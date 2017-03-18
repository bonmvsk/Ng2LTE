import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    private headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    private options = new RequestOptions({ headers: this.headers }); // Create a request option

    /**
     *
     */
    constructor(
        private http: Http
    ) {

    }

    IsAuthenticated(): Observable<boolean> {
        return this.http.get('http://localhost:7777', this.options)
        .map((response: Response) => {
            return true;
        })
    }
}