import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ListaJob } from '../_models/listaJob';

@Injectable({
  providedIn: 'root',
})
export class ItJobsService {
  public listUrl: string;
  public searchUrl: string;
  public apiKey: string = environment.itJobsKey;
  public httpOption: {};

  constructor(public http: HttpClient) {
    this.listUrl = environment.itListJobUrl;
    this.searchUrl = environment.itSearchJobUrl;

    this.httpOption = {
      params: new HttpParams({
        fromString: `api_key=${this.apiKey}`,
      }),
    };
  }
  listJobs(): Observable<ListaJob> {
    return this.http.get<ListaJob>(this.listUrl, this.httpOption);
  }

  pageListJob(page: number): Observable<ListaJob> {
    return this.http.get<ListaJob>(this.listUrl, {
      params: new HttpParams({
        fromString: `api_key=${this.apiKey}&page=${page}`,
      }),
    });
  }

  searchJob(
    search?: string,
    local?: string,
    tipo?: string,
    contrato?: string
  ): Observable<ListaJob> {
    return this.http.get<ListaJob>(this.searchUrl, {
      params: new HttpParams({
        fromString: `api_key=${this.apiKey}${
          search && search !== '' ? `&q=${search}` : ''
        }${tipo && tipo !== '' ? `&type=${tipo}` : ''}${
          contrato && contrato !== '' ? `&contract=${contrato}` : ''
        }${local && local !== '' ? `&location=${local}` : ''}`,
      }),
    });
  }
}
