import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/components/shared/data.service';
import { Observable } from 'rxjs';
import { Country } from 'src/app/components/shared/types/country';


const REGION_OPTIONS=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})

export class CountrylistComponent implements OnInit {

  constructor(private readonly infoService: DataService) { }
  allCountries: Country[];
  searchFilter:string;
  regionFilter:string;
  regionOptions=REGION_OPTIONS;

  ngOnInit(): void {
    /*this.allCountries=this.infoService.getCountires();
    console.log(this.allCountries);*/
    this.infoService.getCountries().subscribe((countries) => {
      this.allCountries = countries;
    });
  }
    get countries() {
      return this.allCountries
        ? this.allCountries
            .filter((country) =>
              this.searchFilter
                ? country.name
                    .toLowerCase()
                    .includes(this.searchFilter.toLowerCase())
                : country
            )
            .filter((country) =>
              
                this.regionFilter
                  ? country.region.includes(this.regionFilter)
                  : country
              
            )
        : this.allCountries;
    }
}
  

