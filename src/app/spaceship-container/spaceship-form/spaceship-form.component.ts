import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { subformComponentProviders,Controls, DataInput, NgxRootFormComponent } from "ngx-sub-form";
import { Spaceship } from 'src/app/spaceship.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-spaceship-form',
  templateUrl: './spaceship-form.component.html',
  styleUrls: ['./spaceship-form.component.css'],
  providers: subformComponentProviders(SpaceshipFormComponent),
})
export class SpaceshipFormComponent extends NgxRootFormComponent<Spaceship> implements OnInit {
  

  @DataInput()
  @Input('spaceship')
  public dataInput: Spaceship | null | undefined;

  @Output('spaceshipUpdated')
  public dataOutput: EventEmitter<Spaceship> = new EventEmitter();
  
  protected getFormControls():Controls<Spaceship>{
    return {
      builtInYear:new FormControl(),
      config:new FormControl(),
      name:new FormControl(),
      tripulantes: new FormControl(),
    }
  }

  ngOnInit(): void {
  }

}
