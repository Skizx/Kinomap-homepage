import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetFreePeriodApiService {

  // Route vers l'API
apiFreePeriod = 'http://preprod.kinomap.com:3333/free-period'

constructor(private http:HttpClient) { }

getFreePeriod() {
  return this.http.get(this.apiFreePeriod)
}
}
