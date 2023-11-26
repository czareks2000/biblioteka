import { TestBed } from '@angular/core/testing';

import { BooksReadersService } from './books-readers.service';

describe('BooksReadersService', () => {
  let service: BooksReadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksReadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
