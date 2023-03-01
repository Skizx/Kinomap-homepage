import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface des propriétés que contient la réponse de l'API
export interface FaqItem {
  title: string;
  details: string;
  open?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class GetFaqApiService {

// Route vers l'API
apiFaq = 'http://preprod.kinomap.com:3333/faq'

  constructor(private http:HttpClient) { }

// Utilisation d'Observable pour gerer les requetes async de l'API
  getFaq(): Observable<FaqItem[]> {
    return this.http.get<FaqItem[]>(this.apiFaq)
  }
}
