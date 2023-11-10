export default class Book {
    id: number;
    author: string;
    title: string;
    publicationYear: number;
    description: string;
    isBorrowed: boolean;
    borrowingDate?: Date;
    returnDate?: Date;
  
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
  }