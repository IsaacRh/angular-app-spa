import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  
  constructor(private _heroesService: HeroesService, private _router: Router) {
    console.info("construct");
  }

  ngOnInit(): void {
    console.info("ng init");
    this.heroes = this._heroesService.getHeroes();
    console.info(this.heroes)
  }
  moreHero(id:number) {
    this._router.navigate(['heroe', id]);
  }
}
