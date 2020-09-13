import { Movie } from '../../../entity/movie/movie';
import { Observable } from 'rxjs/Observable';

export interface MovieInterface {
    readonly sort: number;
    readonly movies: Observable<Movie[]>;
  }