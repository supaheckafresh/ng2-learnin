import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-heroes',
  template: `
      <h2>My Heroes</h2>
      <ul class='heroes'>
          <li *ngFor='let hero of heroes'
              [class.selected]='hero === hero'
              (click)='onSelect(hero)'>
              <span class='badge'>{{hero.id}}</span> {{hero.name}}
          </li>
      </ul>
      <hero-detail [hero]='selectedHero'></hero-detail>
  `,
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(this.setHeroes.bind(this));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  setHeroes(heroes: Hero[]): Hero[] {
    this.heroes = heroes;
    return this.heroes;
  }
}
