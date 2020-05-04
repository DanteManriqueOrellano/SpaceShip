import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { Tripulante } from 'src/app/spaceship.service';
import { FormArray } from '@angular/forms';

interface tripulantesForm{
  tripulantes:Tripulante[]
}
@Component({
  selector: 'app-spaceship-tripulantes-form',
  templateUrl: './spaceship-tripulantes-form.component.html',
  styleUrls: ['./spaceship-tripulantes-form.component.css'],
  providers: subformComponentProviders(SpaceshipTripulantesFormComponent)
})
export class SpaceshipTripulantesFormComponent extends NgxSubFormComponent<Tripulante[],tripulantesForm> {

  protected getFormControls():Controls<tripulantesForm> {
    return {
      tripulantes: new FormArray([])
    }
  }
  protected transformToFormGroup(obj:Tripulante[]):tripulantesForm | null {
    return{
      tripulantes: obj
    }

  }
  protected transformFromFormGroup(formValue: tripulantesForm):Tripulante[]{
    return formValue.tripulantes
  }


}
