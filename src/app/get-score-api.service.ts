import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetScoreApiService {

// Route vers l'API
apiScore = 'http://preprod.kinomap.com:3333/score'

  constructor(private http:HttpClient) { }

  getScore() {
    return this.http.get(this.apiScore)
  }
}
