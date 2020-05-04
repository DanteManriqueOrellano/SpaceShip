import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SpaceshipService, Spaceship } from 'src/app/spaceship.service';
import { NullableObject } from 'ngx-sub-form';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  public readonlyFormControl: FormControl = new FormControl(false);
  constructor(
    private route: ActivatedRoute,
    private listingService: SpaceshipService,
    ){  }
  public spaceship$: Observable<NullableObject<Spaceship>> = this.route.paramMap.pipe(
    map(params => params.get('listingId')),
    switchMap(listingId => {
      if (listingId === 'new' || !listingId) {
        return of(null);
      }
      return this.listingService.getOneSpaceship(listingId);
    }),
    map(listing => (listing ? listing : this.emptyListing())),
  );

  private emptyListing(): NullableObject<Spaceship> {
    return {
      id: this.listingService.generate(),
      builtInYear:null,
      config:null,
      name:null,
      tripulantes:[]
    };
  }

  public upsertListing(listing: Spaceship): void {
    this.listingService.upsertSpaceship(listing);
  }


}
