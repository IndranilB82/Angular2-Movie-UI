import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import{ LangType } from '../../enumeration/lang.enum';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Movie } from '../../entity/movie/movie';

@Injectable()
export class MoviesService {
  private url = 'https://localhost:44369/api/movie/';
  private language: string;

  constructor(private http: Http) {
    this.language = (localStorage.length > 0 && localStorage.getItem('lang') !== '')
      ? localStorage.getItem('lang') : LangType.EN;
  }

  getMovies(): Observable<Movie[]> {
    let moviesUrl = `${this.url}movielist/${this.language}`;

    return this.http.get(moviesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  } 

  getDetails(id: number) {
    let detailsUrl = `${this.url}moviedetails/${this.language}/${id}`;

    return this.http.get(detailsUrl)
      .map((res) => { return res.json() })
  }

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.language = lang;
  }

  getLanguage(): string {
    return this.language;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
