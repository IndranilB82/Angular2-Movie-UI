import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LangType } from '../../enumeration/lang.enum';

@Injectable()
export class SearchService {
  private url = 'https://localhost:44369/api/movie/';
  private language;

  constructor (private http: Http) {
    this.language = (localStorage.length > 0 && localStorage.getItem('lang') !== '')
      ? localStorage.getItem('lang') : LangType.EN;
  }

  searchMovies(query: string, page: number) {
    let searchUrl = `${this.url}searchmovies/${this.language}/${query}/${page}`;

    return this.http.get(searchUrl)
      .map((res) => { return res.json() })
  }
}
