import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { SpaceshipConfig } from 'src/app/spaceship.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-spaceship-config-form',
  templateUrl: './spaceship-config-form.component.html',
  styleUrls: ['./spaceship-config-form.component.css'],
  providers: subformComponentProviders(SpaceshipConfigFormComponent)
})
export class SpaceshipConfigFormComponent extends NgxSubFormComponent<SpaceshipConfig> {

 
  protected getFormControls(): Controls<SpaceshipConfig> {
    return {
      maxSpeed: new FormControl(),
      nbCanons: new FormControl(),
    }
  }
  

}
