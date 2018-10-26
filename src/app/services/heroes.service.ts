import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  HeroesUrl = 'https://appheroes-69e10.firebaseio.com';
  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.HeroesUrl}/Heroes.json`, body, { headers })
      .map(res => {
        return res.json();
      });
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.HeroesUrl}/Heroes/${key$}.json`, body, { headers })
      .map(res => {
        return res.json();
      });
  }

  getHeroe(key$: string) {
    return this.http.get(`${this.HeroesUrl}/Heroes/${key$}.json`)
      .map(res => {
        return res.json();
      });
  }

  getAllHeroes() {
    return this.http.get(`${this.HeroesUrl}/Heroes.json`)
      .map(res => {
        return res.json();
      });
  }

  delHeroe(key$: string) {
    return this.http.delete(`${this.HeroesUrl}/Heroes/${key$}.json`)
      .map(res => {
        return res.json();
      });
  }
}
