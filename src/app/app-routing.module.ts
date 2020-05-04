import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './main/listing/listing.component';



const routes: Routes = [
  {
    path: 'listings',
    children: [
      { path: ':listingId', component: ListingComponent },
      { path: 'new', component: ListingComponent, pathMatch: 'full' },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
