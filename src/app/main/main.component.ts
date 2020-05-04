import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from '../spaceship.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {

  public listings$ = this.listingService.getSpaceships()

  constructor(private listingService: SpaceshipService) { }

}
