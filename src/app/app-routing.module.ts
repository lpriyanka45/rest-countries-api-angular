import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrylistComponent } from './pages/countrylist/countrylist.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {path:"",component:CountrylistComponent},
  {path:":country",component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
