import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

//instances examples
const book1 = new Book(
  "Гаррі Поттер і філософський камінь",
  "Джоан Роулінг",
  1997
);
const book2 = new Book("Гобіт, або Туди і звідти", "Джон Р. Р. Толкін", 1937);
const book3 = new Book("Книга Хроніки Нарнії", "Клайв Стейплз Льюїс", 1950);
const eBook1 = new EBook("March", "Tanya", 1950, "PDF");
const eBook2 = new EBook("April", "Tonya", 1978, "txt");

book1.printInfo();
book2.printInfo();
book3.printInfo();
eBook1.printInfo();
eBook2.printInfo();

//instance changes
eBook2.fileFormat = "DOC";
eBook2.name = "August";
eBook2.year = 2020;

eBook2.printInfo();

//oldest book
const mixedList = [book1, book2, book3, eBook1, eBook2];

const oldest = Book.findOldest(mixedList);
oldest.printInfo();

//converting a Book to an EBook
const converted = EBook.fromBook(book1, "txt");
converted.printInfo();
