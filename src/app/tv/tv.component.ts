import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  tv = [];
  constructor(_ApiDataService: ApiDataService) {
    _ApiDataService.getData("tv").subscribe((data) => {
      this.tv = data.results
    })
  }

  imgPath: string = "https://image.tmdb.org/t/p/w500"

}
