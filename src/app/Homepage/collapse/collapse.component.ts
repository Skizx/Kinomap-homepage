import { Component } from '@angular/core';
import { GetFaqApiService } from '../../get-faq-api.service'; 
import { FaqItem } from '../../get-faq-api.service';


@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {

// Stockage des données récupérées/Typé dans un tableau
  faq : FaqItem[] = [];

  ReadMore:boolean = true

  visible:boolean = false

  constructor(private apiFaq:GetFaqApiService) {}

  ngOnInit() {

    // Ajout de l'interface FaqItem dans notre requête API 
    // permettant de spécifiez le type de données attendue
    this.apiFaq.getFaq().subscribe((data: FaqItem[]) => {
      this.faq = data;
      console.log(data);
    })
  }

  // Fonction toggle permettant l'ouverture de la faq lors du clique sur le bouton
  // Ajout d'une key index permettant de différencier les faq 
  toggleFaq(index: number) {
    this.faq[index].open = !this.faq[index].open
  }
}
