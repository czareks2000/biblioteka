import Book from "./Book";

export class Reader {
    constructor(
        private id:number, 
        private firstName: string, 
        private lastName: string, 
        private pesel: string, 
        private borrowedBooks: Book[]) {
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
            // Zmień status wypożyczenia na false
            this.borrowedBooks[index].IsBorrowed = false;
            // Ustaw datę zwrotu
            this.borrowedBooks[index].ReturnDate = new Date();
        }
    }
}