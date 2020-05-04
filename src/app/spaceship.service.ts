import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {

  private listings$: BehaviorSubject<Spaceship> = new BehaviorSubject(data);

  public getSpaceship(): Observable<Spaceship> {
    return this.listings$.asObservable().pipe(map(this.listingsDeepCopy.bind(this)));
  }

  private listingDeepCopy(listing: Spaceship): Spaceship {
    return JSON.parse(JSON.stringify(listing));
  }

  private listingsDeepCopy(listings: Spaceship[]): Spaceship[] {
    return listings.map(this.listingDeepCopy);
  }
}

export interface SpaceshipConfig {
  maxSpeed: number;
  nbCanons: number;
}

export interface Spaceship {
  name: string;
  builtInYear: number;
  config: SpaceshipConfig;
  tripulantes : Tripulante[]
}
export interface Tripulante {
  nombre:string;
}
export const data:Spaceship = {
  name: 'yo mismo',
  builtInYear: 2500,
  config: {
    maxSpeed: 8000,
    nbCanons: 20,
  },
  tripulantes:[
    {nombre:'uno'},
    {nombre:'dos'}
    ]
}