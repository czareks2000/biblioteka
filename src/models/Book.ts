export default class Book {  
    constructor(
        public id: number,
        public author: string,
        public title: string,
        public publicationYear: number,
        public description: string,
        public isBorrowed: boolean,
        public borrowingDate?: Date,
        public returnDate?: Date
    ) {}

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

    set BorrowingDate(borrowingDate: Date | undefined){
        this.borrowingDate = borrowingDate;
    }

    set ReturnDate(returnDate: Date | undefined){
        this.returnDate = returnDate;
    }
}
