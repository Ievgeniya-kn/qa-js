import { Book } from './book.js'
import { Ebook } from './eBook.js'

const book1 = new Book("Margaret Mitchell", "Gone with wind", 1936);
book1.printInfo();

const book2 = new Book("Ray Bradbury", "Farenheit 451", 1953);
book2.printInfo();

const book3 = new Book("Ivan Karpenko-Karuy", "100 thousand", 1889);
book3.printInfo();

const book4 = new Ebook("Margaret Mitchell", "Gone with wind", 1936, "pdf");
book4.printInfo();

console.log(Book.findOldestBook(book1, book2, book3, book4));
console.log(Ebook.addFileFormat(book1,"pdf"));