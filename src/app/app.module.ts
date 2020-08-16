import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROUTES
import { APP_ROUTING } from './app.routes';

// SERVICES
import { HeroesService } from './services/heroes.service';

// COMPONENTS


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';


@NgModule({
  declarations: [ /* components here */
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    HeroSearchComponent,
    CardHeroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [  /* SERVICES HERE */
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
