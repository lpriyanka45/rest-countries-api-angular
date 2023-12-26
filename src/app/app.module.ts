import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CountrylistComponent } from './pages/countrylist/countrylist.component';
import {HttpClientModule} from '@angular/common/http';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountrylistComponent,
    CountryCardComponent,
    DetailComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
