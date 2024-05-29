export class Book {
    constructor(author, title, year) {
        this._author = author;
        this._title = title;
        this._year = year;
    };

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string') {
            console.log("Author should be string");
            return;
        }
        this._author = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string') {
            console.log("title should string");
            return;
        }
        this._title = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== 'number') {
            console.log("title should Year should be a number");
            return;
        }
        this._title = value;
    }

    static findOldestBook(...books) {
        let i = 0;
        let year = books[0].year;
        for (let key in books) {
            if (year > books[key].year) {
                year = books[key].year;
                i = key;
            }

        }
        return books[i];

    }

    printInfo() {
        console.log(`The title is "${this._title}" by ${this._author} from ${this._year}`)
    }
}

