import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar';

import {MatListModule} from '@angular/material/list';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SpaceshipContainerComponent } from './spaceship-container/spaceship-container.component';
import { SpaceshipFormComponent } from './spaceship-container/spaceship-form/spaceship-form.component';
import { SpaceshipConfigFormComponent } from './spaceship-container/spaceship-form/spaceship-config-form/spaceship-config-form.component';
import { SpaceshipTripulantesFormComponent } from './spaceship-container/spaceship-form/spaceship-tripulantes-form/spaceship-tripulantes-form.component';
import { SpaceshipTripulanteFormComponent } from './spaceship-container/spaceship-form/spaceship-tripulantes-form/spaceship-tripulante-form/spaceship-tripulante-form.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    SpaceshipContainerComponent,
    SpaceshipFormComponent,
    SpaceshipConfigFormComponent,
    SpaceshipTripulantesFormComponent,
    SpaceshipTripulanteFormComponent,
    MainComponent,
   
  
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
