// Type
type Order = {
    productId: string;
    price: number;
};

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[];
    
};

const user: User = {
    firstName: "Leonardo",
    age: 19,
    email: "leleo@gmail.com",
    password: "12345admin",
    orders: [{productId: "1", price: 200}]
};

const printLog = (message: string) => {}

printLog(user.password!)

// Unions
type Author = {
    books: string[];
};

const author: Author & User = {
    age: 2,
    books: ["1"],
    email: "author@gmail.com",
    firstName: "Leleo",
    orders: [],
};

// Interfaces
interface UserInterface {
    readonly firstName: string;
    email: string;
};

const emailUser: UserInterface = {
    email: "leleo@gmail.com",
    firstName: "Leleo",
};

interface AuthorInterface {
    books: string[];
};

const newAuthor: UserInterface & AuthorInterface = {
    email: "leleo@gmail.com",
    firstName: "Leleo",
    books: [],
};

type Grade = number | string;
const grade: Grade = 1;