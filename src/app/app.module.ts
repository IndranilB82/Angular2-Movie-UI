import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchComponent } from './component/search/search.component';
import { DetailsComponent } from './component/details/details.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SearchMoviesComponent } from './component/search//search-movies/search-movies.component';

import { MoviesService } from './service/movie/movies.service';
import { SearchService } from './service/search/search.service';

import { LanguagePipe } from './pipe/lang-pipe';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MoviesComponent },
  { path: 'movie/:id', component: DetailsComponent },
  { path: 'search/:query', component: SearchMoviesComponent },
  { path: '**',component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    SearchComponent,
    DetailsComponent,
    PageNotFoundComponent,
    SearchMoviesComponent,
    LanguagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule,
    LanguagePipe
  ],
  providers: [
    MoviesService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
