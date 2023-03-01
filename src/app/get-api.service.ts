import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

// Interface des propriétés que contient la réponse de l'API
export interface TarifItem {
  name: string,
  price: number,
  period: number,
  users: number,
}

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

// Route vers l'API
apiUrl = 'http://preprod.kinomap.com:3333/subscriptions'

  constructor(private http:HttpClient) { }

  getDatas():Observable<TarifItem[]> {
    return this.http.get<TarifItem[]>(this.apiUrl);
  }
}
