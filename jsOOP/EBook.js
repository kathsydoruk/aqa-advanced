import { Book } from "./Book.js";

export class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this.fileFormat = fileFormat;
  }

  printInfo() {
    console.log(
      `Book Info: ${this.name} - ${this.author}, ${this.year}, ${this.fileFormat}`
    );
  }

  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(value) {
    if (typeof value !== "string") {
      throw new Error("fileFormat must be a string.");
    }

    const allowedValues = ["pdf", "doc", "txt"];
    const upperCaseList = allowedValues.map((str) => str.toUpperCase());
    if (!allowedValues.includes(value) && !upperCaseList.includes(value)) {
      throw new Error("fileFormat is not from the list of valid formats.");
    }
    this._fileFormat = value;
  }

  static fromBook(bookInstance, fileFormat) {
    return new EBook(
      bookInstance.name,
      bookInstance.author,
      bookInstance.year,
      fileFormat
    );
  }
}
