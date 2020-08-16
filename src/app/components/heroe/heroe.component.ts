import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  hero:any = {};
  
  constructor(private activatedRoute: ActivatedRoute, private _heroesService : HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      console.info(params["id"]);
      this.hero = this._heroesService.getHero(params["id"]);
    });
  }
}
