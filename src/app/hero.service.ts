import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  heroes: Hero[] = [];
  topHeroesLimit = 5;
  getHeroes(): Promise<Hero[]> {
    if (this.heroes.length) {
      return Promise.resolve(this.heroes);
    }

    return new Promise(resolve => {
      setTimeout(() => {
        this.heroes = HEROES;
        resolve(this.heroes);
      }, 10);
    });
  }
}
