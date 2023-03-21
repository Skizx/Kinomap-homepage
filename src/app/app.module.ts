import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NosOffresComponent } from './Homepage/nos-offres/nos-offres.component';
import { NosTarifsComponent } from './Homepage/nos-tarifs/nos-tarifs.component';
import { NosFonctionnalitesComponent } from './Homepage/nos-fonctionnalites/nos-fonctionnalites.component';
import { ExplorationComponent } from './Homepage/exploration/exploration.component';
import { ProfitezComponent } from './Homepage/profitez/profitez.component';
import { CollapseComponent } from './Homepage/collapse/collapse.component';
import { CarteCadeauComponent } from './Homepage/carte-cadeau/carte-cadeau.component';
import { HomePageComponent } from './Homepage/home-page/home-page.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

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
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
