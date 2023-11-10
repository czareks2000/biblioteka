import Book from "./Book";

export class Reader {
    id: number;
    firstName: string;
    lastName: string;
    pesel: string;
    borrowedBooks: Book[];
  
    constructor(id:number, firstName: string, lastName: string, pesel: string, borrowedBooks: Book[]) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.pesel = pesel;
      this.borrowedBooks = borrowedBooks;
    }
}