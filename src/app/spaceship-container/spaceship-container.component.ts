import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Spaceship, data } from '../spaceship.service';

@Component({
  selector: 'app-spaceship-container',
  templateUrl: './spaceship-container.component.html',
  styleUrls: ['./spaceship-container.component.css']
})
export class SpaceshipContainerComponent implements OnInit {
  public spaceship$: BehaviorSubject<Spaceship> = new BehaviorSubject(data)
  constructor() { }

  ngOnInit(): void {
  }

}
