export default class Book {
    private id: number;
    private author: string;
    private title: string;
    private publicationYear: number;
    private description: string;
    private isBorrowed: boolean;
    private borrowingDate?: Date;
    private returnDate?: Date;
  
    constructor(
        id: number,
        author: string,
        title: string,
        publicationYear: number,
        description: string,
        isBorrowed: boolean,
        borrowingDate?: Date,
        returnDate?: Date
    ) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.publicationYear = publicationYear;
        this.description = description;
        this.isBorrowed = isBorrowed;
        this.borrowingDate = borrowingDate;
        this.returnDate = returnDate;
    }

    // Gettery
    get Id(): number {
        return this.id;
    }

    get Author(): string {
        return this.author;
    }

    get Title(): string {
        return this.title;
    }

    get PublicationYear(): number {
        return this.publicationYear;
    }

    get Description(): string {
        return this.description;
    }

    get IsBorrowed(): boolean {
        return this.isBorrowed;
    }

    get BorrowingDate(): Date | undefined {
        return this.borrowingDate;
    }

    get ReturnDate(): Date | undefined {
        return this.returnDate;
    }

    // Settery
    set Id(id: number){
        this.id = id;
    }

    set Author(author: string){
        this.author = author;
    }

    set Title(title: string){
        this.title = title;
    }

    set PublicationYear(publicationYear: number){
        this.publicationYear = publicationYear;
    }

    set Description(description: string){
        this.description = description;
    }

    set IsBorrowed(isBorrowed: boolean){
        this.isBorrowed = isBorrowed;
    }

    set BorrowingDate(borrowingDate: Date){
        this.borrowingDate = borrowingDate;
    }

    set ReturnDate(returnDate: Date){
        this.returnDate = returnDate;
    }
  }