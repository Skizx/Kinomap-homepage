import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NosOffresComponent } from './nos-offres/nos-offres.component';
import { NosTarifsComponent } from './nos-tarifs/nos-tarifs.component';
import { NosFonctionnalitesComponent } from './nos-fonctionnalites/nos-fonctionnalites.component';
import { ExplorationComponent } from './exploration/exploration.component';
import { ProfitezComponent } from './profitez/profitez.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CarteCadeauComponent } from './carte-cadeau/carte-cadeau.component';

@NgModule({
  declarations: [
    AppComponent,
    NosOffresComponent,
    NosTarifsComponent,
    NosFonctionnalitesComponent,
    ExplorationComponent,
    ProfitezComponent,
    CollapseComponent,
    CarteCadeauComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
