import { MovieFactoryInterface } from "./movie.factory.interface";
import { Movie } from '../../../../../entity/movie/movie';
import { Observable } from 'rxjs/Observable';
import { MovieInterface } from '../../../../../abstract-factory/interface/model/movie.model.interface';

export abstract class MovieFactoryAbstract implements MovieFactoryInterface {
  public abstract sortMovies(property: string, movies: Observable<Movie[]>): MovieInterface;
  public abstract dynamicSort(property: any);
  }