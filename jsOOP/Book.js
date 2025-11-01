export class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    console.log(`Book Info: ${this.name} - ${this.author}, ${this.year}`);
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error("Name must be a non-empty string.");
    }
    this._name = value.trim();
  }

  get author() {
    return this._author;
  }
  set author(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error("Author must be a non-empty string.");
    }
    this._author = value.trim();
  }

  get year() {
    return this._year;
  }
  set year(value) {
    if (typeof value !== "number" || `${value}`.length !== 4) {
      throw new Error("Year must be a non-empty 4 symbols number.");
    }
    this._year = value;
  }

  static findOldest(items) {
    const onlyBooks = items.filter((i) => i instanceof Book);
    return onlyBooks.reduce((oldest, curr) =>
      curr.year < oldest.year ? curr : oldest
    );
  }
}
