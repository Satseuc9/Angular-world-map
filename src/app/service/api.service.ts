import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) {}

  fetchCountryData(country: string): Observable<any> {
     const api = `https://api.worldbank.org/V2/country/${country}?format=json`;
      return this.http.get(api).pipe(

      catchError(error => {

         console.error('Error fetching country data:', error);
        throw error;
      })
    );
  }

  setCountryData(country: string): Observable<any> {

     return this.fetchCountryData(country).pipe(
      map((res: any) => ({
        name: res[1][0].name,
        capital: res[1][0].capitalCity,
        region: res[1][0].region.value,
        income: res[1][0].incomeLevel.value,
        longitude: res[1][0].longitude,
        latitude: res[1][0].latitude
      }))
    );
  }
}
