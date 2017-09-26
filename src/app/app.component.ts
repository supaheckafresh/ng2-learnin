import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'hero-root',
  template: `
      <h1>{{title}}</h1>
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
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
