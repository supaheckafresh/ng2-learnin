import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.selectedHero = hero;
      });
  }

  deleteHero(id: number): void {
    this.heroService.deleteHero(id)
      .then(this.getHeroes.bind(this))
      .then(() => {
        if (this.selectedHero && this.selectedHero.id === id) { this.selectedHero = null; }
      });
  }

  detail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(this.setHeroes.bind(this));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  setHeroes(heroes: Hero[]): Promise<Hero[]> {
    this.heroes = heroes;
    return Promise.resolve(this.heroes);
  }
}
