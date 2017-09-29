import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from './hero';
import { HeroSearchService } from './hero-search.service';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ],
  providers: [ HeroSearchService ]
})

export class HeroSearchComponent implements OnInit {
  constructor(
    private router: Router,
    private heroSearchService: HeroSearchService
  ) {}

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
      .catch(err => {
        console.error('ERROR', err);
        return Observable.of<Hero[]>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  detail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
