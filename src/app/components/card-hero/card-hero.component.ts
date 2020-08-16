import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
})
export class CardHeroComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;
  @Output() selectedHero:EventEmitter<number>;
  constructor(private router:Router) { 
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {
  }

  moreHero(){
    console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
    //this.selectedHero.emit(this.index);
  }

}
