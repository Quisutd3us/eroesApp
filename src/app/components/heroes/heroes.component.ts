import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  constructor(private _heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {
    this._heroesService.getAllHeroes()
      .subscribe(rta => {
        this.heroes = rta;
      });
  }

  delHeroe(k) {
    this._heroesService.delHeroe(k)
      .subscribe(rta => {
        if (rta) {
          console.error('error');
        } else {
          location.reload(true);
        }
      });
  }

}
