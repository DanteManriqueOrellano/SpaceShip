import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {

  private listings$: BehaviorSubject<Spaceship> = new BehaviorSubject(data);

  public getSpaceships(): Observable<Spaceship> {
    return this.listings$.asObservable().pipe(map(this.listingsDeepCopy.bind(this)));
  }

  /*public upsertSpaceship(listing: Spaceship): void {
    const listings = this.listings$.getValue();

    const existingListingIndex: number = listings.findIndex(s => s.id === listing.id);

    if (existingListingIndex > -1) {
      const listingsBefore = listings.slice(0, existingListingIndex);
      const listingAfter = listings.slice(existingListingIndex + 1);
      this.listings$.next([...listingsBefore, listing, ...listingAfter]);
    } else {
      this.listings$.next([listing, ...this.listings$.getValue()]);
    }
  }*/

  /*public getOneSpaceship(id: string): Observable<Spaceship | never> {
    return this.listings$.pipe(
      map(listings => {
        const listing = listings.find(s => s.id === id);
        if (!listing) {
          throw new Error('not found');
        }
        return listing;
      }),
      map(this.listingDeepCopy),
    );
  }*/

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
  id:string;
  name: string;
  builtInYear: number;
  config: SpaceshipConfig;
  tripulantes : Tripulante[]
}
export interface Tripulante {
  nombre:string;
}


export const data:Spaceship = 
  {
    id:'01',
    name: 'yo mismo',
    builtInYear: 2500,
    config: {
      maxSpeed: 8000,
      nbCanons: 20,
    },
    tripulantes:[{nombre:'uno'},{nombre:'dos'}]
  }
  

