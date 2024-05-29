import { Book } from './book.js'

export class Ebook extends Book {
    constructor(author, title, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== 'string') {
            console.log("fileFormat should be string");
            return;
        }
        this._fileFormat = value;
    }

    static addFileFormat(book, fileformatstring) {
        const newBook = new Ebook(book.author, book.title, book._year, fileformatstring);
        return newBook;
    }

    printInfo() {
        console.log(`The title is "${this._title}" by ${this._author} from ${this._year} in ${this._fileFormat}`);
    }
}

