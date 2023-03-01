import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { TarifItem } from '../get-api.service';

@Component({
  selector: 'app-nos-tarifs',
  templateUrl: './nos-tarifs.component.html',
  styleUrls: ['./nos-tarifs.component.scss']
})

export class NosTarifsComponent {
// Stockage des données récupérées/Typé dans un tableau
  result: TarifItem[] = [];
  valeurPeriod : string = '';
  
  constructor(private apiData:GetApiService) {
  }
  
  
  ngOnInit() {

    // Ajout de l'interface TarifItem dans notre requête API 
    // permettant de spécifiez le type de données attendue
    this.apiData.getDatas().subscribe((data: TarifItem[]) => {
      this.result = data;
      this.valeurPeriod = this.transformInNumber(this.result[0].period);
      //console.log(this.result)
      console.log(this.valeurPeriod)  
    });
  }
  
  modifyPrice(price: number) {
    
  }
  
  transformInNumber(period: number) {
    if (period === 1) {
    return "MOIS"
  } else if (period === 12) {
    return "AN"
  } else {
    return "A VIE"
  }
 }
}
