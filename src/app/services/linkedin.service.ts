import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LinkedinService {
  public acessUrl: string;
  public clientId: string;
  public clientSecretId: string;
  public httpOptions: {};

  constructor(public http: HttpClient) {}

  getAcess(): Observable<any> {
    return this.http.post<any>(this.acessUrl, {}, this.httpOptions);
  }
}
