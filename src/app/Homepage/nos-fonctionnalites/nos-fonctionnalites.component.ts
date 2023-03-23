import { Component } from '@angular/core';

@Component({
  selector: 'app-nos-fonctionnalites',
  templateUrl: './nos-fonctionnalites.component.html',
  styleUrls: ['./nos-fonctionnalites.component.scss']
})

export class NosFonctionnalitesComponent {

    fonctionalitees: string[] =
    [
      "Partagez vos activités sur des <b>plateformes tierces de Fitness</b>",
      "Profitez de l'expérience complète en débloquant l'accès à toutes les vidéos de Kinomap",
      "Prenez part à nos challenges et soyez récompensés ",
      "Pratiquez de l'entrainement par intervalle",
      "Rejoignez des <b>sessions multijoueurs</b> avec des participants du monde entier"
    ]
}
