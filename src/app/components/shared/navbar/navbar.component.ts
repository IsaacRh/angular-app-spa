import { Component, OnInit } from '@angular/core';
import {  } from "../../../services/heroes.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  searchHero(key: string){
    console.info(key);
    this._router.navigate(['/searchHero', key]);
  }

}
