import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CarData implements InMemoryDbService {
  createDb() {
    let cars = [
      { id: 1, name: 'BMW 1' },
      { id: 2, name: 'BMW 2' },
      { id: 3, name: 'BMW 3' },
      { id: 4, name: 'BMW 4' }
    ];
    return {cars};
  }
}
