import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IAcronym } from './acronym';

@Injectable()
export class AcronymService {

  private _acronymUrl = './assets/data/acronyms.json';

  constructor(private _http: HttpClient) { }

  getAcronyms(): Observable<IAcronym[]> {
    console.log(this._acronymUrl);
    return this._http.get<IAcronym[]>(this._acronymUrl)
         .do(data => console.log('All: ' + JSON.stringify(data)))
         .catch(this.handleError);
  } 

updateAcronyms(acronym: IAcronym): Observable<IAcronym[]>{
    console.log(this._acronymUrl);
    return this._http.post(this._acronymUrl, acronym)
    .map((res: Response) => res.json())
    .catch(error => Observable.throw("Error in x service"));            
  } 

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
}

}
