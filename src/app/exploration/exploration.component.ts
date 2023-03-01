import { Component } from '@angular/core';
import { GetScoreApiService } from '../get-score-api.service';
import { GetFreePeriodApiService } from '../get-free-period-api.service';

@Component({
  selector: 'app-exploration',
  templateUrl: './exploration.component.html',
  styleUrls: ['./exploration.component.scss']
})
export class ExplorationComponent {

// Stockage des données récupérées/Typé dans score & stars
  free: any;
  score: any;
  stars: any[] = [];

  constructor(private scoreData:GetScoreApiService, private freeData:GetFreePeriodApiService) {
  }

  ngOnInit() {
    this.scoreData.getScore().subscribe((data) => {
      this.score = data
      this.stars = this.transformInStars(this.score)
      console.log(this.score);
      console.log(this.transformInStars(this.score));

      // Appel de la fonction getFreePeriod 
      this.getFreePeriod()
      
      
    })
  }

// importation des images "Etoiles"
  fullStar: string = '../../assets/Full-star.png';
  emptyStar: string = '../../assets/Empty-star.png';

// Fonction permettant de transformer en Etoiles la note renvoyée par l'API
// Selon la note seras transformer en etoiles pleine ou vide avec la boucle for
  transformInStars(score: number): any[] {

  // Stockages des etoiles dans un tableau
    let stars: any[] = [];

    for (let i = 1; i <= 5; i++) {
      if (score >= i) {
        stars.push({src: this.fullStar, alt: 'full star'});
      } else {
        stars.push({src: this.emptyStar, alt: 'empty star'});
      }
    }

    return stars;
  }
// Fonction permettant de faire un Call API pour la route free-period
getFreePeriod() {
  this.freeData.getFreePeriod().subscribe((res) => {
    this.free = res
  })
}
}
