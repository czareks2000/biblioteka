import Book from "./Book";

export class Reader {
    private id: number;
    private firstName: string;
    private lastName: string;
    private pesel: string;
    private borrowedBooks: Book[];
  
    constructor(id:number, firstName: string, lastName: string, pesel: string, borrowedBooks: Book[]) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.pesel = pesel;
      this.borrowedBooks = borrowedBooks;
    }

    // Gettery
    get Id(): number {
      return this.id;
    }

    get FirstName(): string {
        return this.firstName;
    }

    get LastName(): string {
        return this.lastName;
    }

    get Pesel(): string {
        return this.pesel;
    }

    get BorrowedBooks(): Book[] {
        return this.borrowedBooks;
    }

    // Settery
    set Id(id: number){
        this.id = id;
    }

    set FirstName(firstName: string) {
        this.firstName = firstName;
    }

    set LastName(lastName: string) {
        this.lastName = lastName;
    }

    set Pesel(pesel: string){
        this.pesel = pesel;
    }

    // Funkcje pomocnicze
    borrowBook(book: Book): void {
        this.borrowedBooks.push(book);
    }

    returnBook(book: Book): void {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}