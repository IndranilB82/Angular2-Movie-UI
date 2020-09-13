import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MoviesService } from '../../service/movie/movies.service';
import { Movie } from '../../entity/movie/movie';
import { MovieFactoryAbstract } from '../../abstract-factory/interface/service/factory/movie/movie.factory.abstract';
import { MovieInterface } from '../../abstract-factory/interface/model/movie.model.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]>;
  language: string;
  sort: number;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private _movieFactoryAbstract: MovieFactoryAbstract
  ) { }

  ngOnInit() {
    this.language = this.moviesService.getLanguage();
    this.getMovies();
  }

  getMovies() {
    this.movies = this.moviesService.getMovies();
  } 

  sortMovies(property: string) {
    const sortMovieRecord: MovieInterface = this._movieFactoryAbstract.sortMovies(property, this.movies);
    this.movies = sortMovieRecord.movies;
    this.sort = sortMovieRecord.sort;
  }

  onSelect(movie: Movie) {
    this.router.navigate(['./../movie', movie.id]);
  }
}
