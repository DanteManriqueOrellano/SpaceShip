import { Component, OnInit, Input } from '@angular/core';
import { Spaceship } from 'src/app/spaceship.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent {

  @Input() listings: Spaceship[] = [];

 
}
