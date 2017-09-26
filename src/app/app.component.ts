import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

const HEROES: Hero[] = [
  {
    id: 11, name: 'Mr. Nice'
  },
  {
    id: 12, name: 'Milly Bofiggins'
  },
  {
    id: 13, name: 'Mr. Bad'
  },
  {
    id: 14, name: 'Breezy'
  },
  {
    id: 15, name: 'Celery'
  },
  {
    id: 16, name: 'Lechuga'
  },
  {
    id: 17, name: 'Pineapple Boy'
  },
  {
    id: 18, name: 'Gordita'
  },
  {
    id: 19, name: 'Puggles'
  }
];

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
          <li *ngFor="let hero of heroes"
              [class.selected]="hero === hero"
              (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
      </ul>
      <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
