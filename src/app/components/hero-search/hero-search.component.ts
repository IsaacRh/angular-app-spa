import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
})
export class HeroSearchComponent implements OnInit {
  
  heroes:Heroe[] = [];
  key:string;

  constructor(private _heroesService:HeroesService, private _activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activetedRoute.params.subscribe(params => {
      this.key = params['key'];
      this.heroes = this._heroesService.searchHeroes(params['key']);
    });
  }

}
