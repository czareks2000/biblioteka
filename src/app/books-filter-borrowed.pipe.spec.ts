import { BooksFilterBorrowedPipe } from './books-filter-borrowed.pipe';

describe('BooksFilterBorrowedPipe', () => {
  it('create an instance', () => {
    const pipe = new BooksFilterBorrowedPipe();
    expect(pipe).toBeTruthy();
  });
});
