import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../../service/search/search.service';
import { MoviesService } from '../../../service/movie/movies.service';
import { Movie } from '../../../entity/movie/movie';
import { Search } from '../../../entity/movie/search';
import { MovieFactoryAbstract } from '../../../abstract-factory/interface/service/factory/movie/movie.factory.abstract';

@Component({
  selector: 'app-search-movies',
  templateUrl: 'search-movies.component.html',
  styleUrls: ['search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  searches: Search;
  movies: Movie[];
  total_results: number;
  total_pages: number;
  page: number;
  query: string;
  language: string;
  sort: number;

  constructor(
    private searchService: SearchService,
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router,
    private _movieFactoryAbstract: MovieFactoryAbstract
  ) { }

  ngOnInit() {
    this.language = this.moviesService.getLanguage();
    this.route.params.subscribe(
      params => {
        this.query = params['query'];
        this.page = 1;
        this.searchMovies(this.query, this.page);
      });
  }

  searchMovies(query: string, page: number) {
    this.searchService.searchMovies(query, page)
      .subscribe(
        response => {
          this.searches = response;
          this.movies = response['results'];
          this.total_results = response['total_results'];
          this.total_pages = response['total_pages'];
          this.page = response['page'];
        },
        error => console.error(error)
      );
  }

  dynamicSort(property) {
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

  sortMovies(property: string) {
    switch (property.toLowerCase()) {
      case "title":
        if (this.sort == 1) {
          this.movies.sort(this._movieFactoryAbstract.dynamicSort("-title"));
          this.sort = -1;
        }
        else {
          this.movies.sort(this._movieFactoryAbstract.dynamicSort("title"));
          this.sort = 1;
        }
        break;
      case "popularity":
        if (this.sort == 2) {
          this.movies.sort(this._movieFactoryAbstract.dynamicSort("-popularity"));
          this.sort = -2;
        }
        else {
          this.movies.sort(this._movieFactoryAbstract.dynamicSort("popularity"));
          this.sort = 2;
        }
        break;
      default:
        break;
    }
  }

  goPage(go: number) {
    let newPage = this.page + go;
    if (newPage <= this.total_pages && newPage >= 1)
      this.searchMovies(this.query, newPage);
  }

  onSelect(movie: Movie) {
    this.router.navigate(['./../movie', movie.id]);
  }
}
