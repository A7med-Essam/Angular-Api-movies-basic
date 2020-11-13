import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  people = [];
  constructor(_ApiDataService: ApiDataService) {
    _ApiDataService.getData("person").subscribe((data) => {
      this.people = data.results
    })
  }
  imgPath: string = "https://image.tmdb.org/t/p/w500"

}
