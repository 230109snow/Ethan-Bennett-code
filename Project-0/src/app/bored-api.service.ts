import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoredApiService {

  constructor(private http: HttpClient) { }

  getActivity(input : string) : Observable<any> {
    const url = `http://www.boredapi.com/api/activity?${input}` 
    return this.http.get(url);
  }
}
