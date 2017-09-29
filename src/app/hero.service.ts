import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'api/heroes';
  constructor(private http: Http) {}

  heroes: Hero[] = [];
  topHeroesLimit = 5;

  create(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, { name })
      .toPromise()
      .then(resp => {
        const hero = resp.json().data as Hero;
        this.heroes.push(hero);
        return hero;
      })
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(resp => resp.json().data as Hero)
      .catch(this.handleError);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(resp => {
        this.heroes = resp.json().data as Hero[];
        return this.heroes;
      })
      .catch(this.handleError);
  }

  handleError(err: any): Promise<any> {
    console.error('ERROR', err);
    return Promise.reject(err.message || err);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
}
