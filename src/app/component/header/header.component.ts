import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movie/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language : string;
  languages : string[] = ["en", "pl"];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.language = this.moviesService.getLanguage();
  }

  changeLanguage(lang : string) {
    this.moviesService.changeLanguage(lang.toLowerCase());
    location.reload();
  }
  
}
