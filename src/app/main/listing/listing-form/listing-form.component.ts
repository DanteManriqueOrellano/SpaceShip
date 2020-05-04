import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxRootFormComponent, DataInput, Controls } from 'ngx-sub-form';
import { SpaceshipConfig, Tripulante, Spaceship } from 'src/app/spaceship.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent extends NgxRootFormComponent<Spaceship> {

  @DataInput()
  // tslint:disable-next-line:no-input-rename
  @Input('listing')
  public dataInput: Required<Spaceship> | null | undefined;

  // tslint:disable-next-line:no-output-rename
  @Output('listingUpdated')
  public dataOutput: EventEmitter<Spaceship> = new EventEmitter();

  

  protected getFormControls(): Controls<Spaceship> {
    return {
      builtInYear: new FormControl(),
      config: new FormControl(),
      id: new FormControl(),
      name: new FormControl(),
      tripulantes: new FormControl(),
      
    }
  }

 


}
