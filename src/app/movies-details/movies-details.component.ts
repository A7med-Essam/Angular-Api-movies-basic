import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../api-data.service'

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  movieId: any;
  movieCategory: any;

  constructor(private _ActivatedRoute: ActivatedRoute, public _ApiDataService: ApiDataService) {

    this.movieId = _ActivatedRoute.snapshot.paramMap.get("id");
    this.movieCategory = _ActivatedRoute.snapshot.paramMap.get("category");

  }

  details: any;

  ngOnInit(): void {
    this._ApiDataService.getDetails(this.movieCategory,this.movieId).subscribe((data) => {

      this.details = data;

    });
  }

  imgPath: string = "https://image.tmdb.org/t/p/w500"

}
