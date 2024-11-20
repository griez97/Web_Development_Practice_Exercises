import "./style.css";

//------------------- 1

interface IBook {
    author: string;
    name: string;
    publishingYear: string;
    shortDescription?: string;
    numberOfPages: number;
}

type PartialBook = Partial<IBook>;

const partialBook: PartialBook = {
    author: "J.R.R. Tolkien",
    name: "The Lord of the Rings",
    publishingYear: "1954",
};

//!
interface IPartialBook extends Partial<IBook> {}

const partialBook2: IPartialBook = {
    name: "The Lord of the Rings",
};

//----------------- 2

type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

const basicBook: BasicBook = {
    author: "J.R.R. Tolkien",
    name: "The Lord of the Rings",
    numberOfPages: 1216,
};

//----------------- 3
type BookDescription = Pick<IBook, "name" | "shortDescription">;

const bookDescription: BookDescription = {
    name: "The Lord of the Rings",
    shortDescription: "An epic high-fantasy novel by J.R.R. Tolkien.",
};

//!
interface IBookDescription extends Pick<IBook, "name" | "shortDescription"> {}

const bookDescription2: IBookDescription = {
    name: "The Hobbit",
    shortDescription: "A fantasy novel that serves as a prelude to The Lord of the Rings.",
};

//------------------- 4

type RequiredBook = Required<IBook>;

const requiredBook: RequiredBook = {
    author: "J.R.R. Tolkien",
    name: "The Lord of the Rings",
    publishingYear: "1954",
    shortDescription: "An epic high-fantasy novel by J.R.R. Tolkien.",
    numberOfPages: 1216,
};

//!
interface IRequiredBook extends Required<IBook> {}

const requiredBook2: IRequiredBook = {
    author: "J.R.R. Tolkien",
    name: "The Hobbit",
    publishingYear: "1937",
    shortDescription: "A fantasy novel that serves as a prelude to The Lord of the Rings.",
    numberOfPages: 310,
};

//------------------- 5

type ReadOnlyBook = Readonly<IBook>;

const readonlyBook: ReadOnlyBook = {
    author: "J.R.R. Tolkien",
    name: "The Lord of the Rings",
    publishingYear: "1954",
    shortDescription: "An epic high-fantasy novel by J.R.R. Tolkien.",
    numberOfPages: 1216,
};

// readonlyBook.name = "The Hobbit";

//!

interface IReadOnlyBook extends Readonly<IBook> {}

const readonlyBook2: IReadOnlyBook = {
    author: "J.R.R. Tolkien",
    name: "The Hobbit",
    publishingYear: "1937",
    shortDescription: "A fantasy novel that serves as a prelude to The Lord of the Rings.",
    numberOfPages: 310,
};

// readonlyBook2.author = "Another Author";

//-------------------- 6

interface IDonkey {
    name: string;
    age: number;
    fluffyness: number;
    favoriteFood: string;
}

enum Donkey {
    Daisy = "Daisy",
    Gus = "Gus",
    Rosie = "Rosie",
    Coco = "Coco",
    Jasper = "Jasper",
}

const donkeyRecord: Record<Donkey, IDonkey> = {
    [Donkey.Daisy]: {
        name: "Daisy",
        age: 6,
        fluffyness: 7,
        favoriteFood: "Sweetcorn",
    },
    [Donkey.Gus]: {
        name: "Gus",
        age: 8,
        fluffyness: 5,
        favoriteFood: "Turnips",
    },
    [Donkey.Rosie]: {
        name: "Rosie",
        age: 3,
        fluffyness: 10,
        favoriteFood: "Cabbage",
    },
    [Donkey.Coco]: {
        name: "Coco",
        age: 5,
        fluffyness: 8,
        favoriteFood: "Carrots",
    },
    [Donkey.Jasper]: {
        name: "Jasper",
        age: 7,
        fluffyness: 6,
        favoriteFood: "Alfalfa",
    },
};

console.log(partialBook);
console.log("%c--------------------------", "color: darkgreen; font-size: 20px;");
console.log(partialBook2);
console.log("%c--------------------------", "color: darkgreen; font-size: 20px;");
console.log(basicBook);
console.log("%c--------------------------", "color: darkgreen; font-size: 20px;");
console.log(bookDescription);
console.log("%c--------------------------", "color: darkgreen; font-size: 20px;");
console.log(bookDescription2);
console.log("%c--------------------------", "color: darkgreen; font-size: 20px;");
console.log(requiredBook);
console.log("%c--------------------------", "color: darkgreen; font-size: 20px;");
console.log(requiredBook2);
console.log("%c--------------------------", "color: darkgreen; font-size: 20px;");
console.log(readonlyBook);
console.log("%c--------------------------", "color: darkgreen; font-size: 20px;");
console.log(readonlyBook2);
console.log("%c--------------------------", "color: darkgreen; font-size: 20px;");
console.log(donkeyRecord);
