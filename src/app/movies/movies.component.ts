import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  movies = [];
  constructor(_ApiDataService: ApiDataService) {
    _ApiDataService.getData("movie").subscribe((data) => {
      this.movies = data.results
    })
  }
  imgPath: string = "https://image.tmdb.org/t/p/w500";

}
