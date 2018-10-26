import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  params: string;

  constructor(private _heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.params
      .subscribe(p => {
        this.params = p.id;
        if (this.params !== 'new') {
          this._heroesService.getHeroe(this.params)
            .subscribe(heroe => this.heroe = heroe);
        }
      });
  }

  ngOnInit() {
  }
  save() {
    if (this.params === 'new') {
      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/heroe', data.name]);
        });
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.params)
        .subscribe(data => {
          console.log(data);
        });
    }
  }
}
