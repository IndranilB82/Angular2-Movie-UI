import { MovieFactoryAbstract } from "../../../../abstract-factory/interface/service/factory/movie/movie.factory.abstract";
import { MovieFactoryInterface } from "../../../../abstract-factory/interface/service/factory/movie/movie.factory.interface";
import { Observable } from 'rxjs/Observable';
import { Movie } from "../../../../entity/movie/movie";
import { MovieInterface } from "../../../../abstract-factory/interface/model/movie.model.interface";

export class MovieFactory extends MovieFactoryAbstract
    implements MovieFactoryInterface {
    movies: Observable<Movie[]>;
    sort: number;
    public sortMovies(property: string, movies: Observable<Movie[]>): MovieInterface {
        switch (property.toLowerCase()) {
            case "title":
                if (this.sort == 1) {
                    this.movies = movies.map(items => items.sort(this.dynamicSort("-title")));
                    this.sort = -1;
                }
                else {
                    this.movies = movies.map(items => items.sort(this.dynamicSort("title")));
                    this.sort = 1;
                }
                break;
            case "popularity":
                if (this.sort == 2) {
                    this.movies = movies.map(items => items.sort(this.dynamicSort("-popularity")));
                    this.sort = -2;
                }
                else {
                    this.movies = movies.map(items => items.sort(this.dynamicSort("popularity")));
                    this.sort = 2;
                }
                break;
            default:
                break;
        }
        return {
            sort: this.sort,
            movies: this.movies
        };

    }

    public dynamicSort(property: any) {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
}