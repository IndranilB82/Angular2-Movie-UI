import { Movie } from '../../../../../entity/movie/movie';
import { Observable } from 'rxjs/Observable';
import { MovieInterface } from '../../../../../abstract-factory/interface/model/movie.model.interface';
export interface MovieFactoryInterface {
    sortMovies(property: string, movies: Observable<Movie[]>): MovieInterface;
    dynamicSort(property: any);
}