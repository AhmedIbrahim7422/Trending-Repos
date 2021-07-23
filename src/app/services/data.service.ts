import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient ) { }
  getData(): Observable<any>{
    return this.http.get<any>('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc');
  }
}
