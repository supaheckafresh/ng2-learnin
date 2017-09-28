import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { Tool } from './tool.service';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  allHeroes: Hero[] = [];
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private tool: Tool) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(this.setTopHeroes.bind(this, this.heroService.topHeroesLimit));
  }

  setTopHeroes(limit: number, heroes: Hero[]): Hero[] {
    const _heroes = heroes ? heroes : this.allHeroes;

    // init the all heroes array so the user can change the number being displayed.
    if (!this.allHeroes.length) {
      this.allHeroes = heroes;
    }

    return this.heroes = _heroes.slice(0, limit);
  }

  limitOpts(): Array<number> {
    const opts = this.tool.range(this.allHeroes.length);
    opts.shift();
    return opts;
  }
}

