import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders,Controls } from 'ngx-sub-form';
import { Tripulante } from 'src/app/spaceship.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-spaceship-tripulante-form',
  templateUrl: './spaceship-tripulante-form.component.html',
  styleUrls: ['./spaceship-tripulante-form.component.css'],
  providers: subformComponentProviders(SpaceshipTripulanteFormComponent)
})
export class SpaceshipTripulanteFormComponent extends NgxSubFormComponent<Tripulante>  {

  protected getFormControls():Controls<Tripulante>{
    return{
      nombre: new FormControl(),

    }
  }

 

}
