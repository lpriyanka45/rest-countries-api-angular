import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country} from './types/country';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) { }

  getCountries(){
    const url=`${environment.baseUrl}/all`;
    return this.http.get<Country[]>(url);
  }
  getCountryByName(name: string){
    return this.http.get<Country[]>(`${environment.baseUrl}/name/${name}`)
    .pipe(map(([res])=>res));
  }
  getCountriesByCodes(codes: string[]) {
    /*console.log(`${environment.baseUrl}/alhpa?codes=${codes.join(';')}`);*/
    return this.http.get<Country[]>(
      `${environment.baseUrl}/alpha?codes=${codes.join(';')}`
    );
  }
  
}
