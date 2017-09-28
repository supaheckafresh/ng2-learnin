import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 0, name: 'zero'
      },
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
    return { heroes };
  }
}