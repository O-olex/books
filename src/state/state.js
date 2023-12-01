import { makeAutoObservable, runInAction } from "mobx"
import axios from 'axios';

class State {
    favourites = [1, 3];
    books = [];


    // books = [{id: 1, title: 'Moby Dick', author: 'Herman Melville', publisher: 'Penguin Random House', year: 1851, rating: 4.8, pages: 401,},
    //     {id: 2, title: 'War and Peace', author: 'Leo Tolstoy', publisher: 'John Wiley and Sons', year: 1867, rating: 4.0, pages: 165,},
    //     {id: 3, title: 'The Great Gatsby', author: 'Scott Fitzgerald', publisher: 'Hachette Book Group', year: 1925, rating: 4.4, pages: 105,},
    //     {id: 4, title: 'White Fang', author: 'Jack London', publisher: 'John Wiley and Sons', year: 1996, rating: 4.3, pages: 352,},
    //     {id: 5, title: 'Hamlet', author: 'William Shakespeare', publisher: 'Penguin Random House', year: 1599, rating: 4.9, pages: 300,},
    //     {id: 6, title: 'Odyssey', author: 'Homer', publisher: 'Macmillan Publishers', year: 1335, rating: 4.3, pages: 195,},
    //     {id: 7, title: 'The Divine Comedy', author: 'Dante Alighieri', publisher: 'Scholastic', year: 1321, rating: 3.9, pages: 203,},
    //     {id: 8, title: 'Lolita', author: 'Vladimir Nabokov', publisher: 'Penguin Random House', year: 1955, rating: 3.3, pages: 152,},
    //     {id: 9, title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', publisher: 'Macmillan Publishers', year: 1884, rating: 4.5, pages: 220,},
    //     {id: 10, title: 'Anna Karenina', author: 'Leo Tolstoy', publisher: 'Scholastic', year: 1877, rating: 4.6, pages: 125,},
    //     {id: 11, title: 'The Iliad', author: 'Homer', publisher: 'Simon and Schuster', year: 1598, rating: 3.8, pages: 242,},
    //     {id: 12, title: 'To the Lighthouse', author: 'Virginia Woolf', publisher: 'John Wiley and Sons', year: 1927, rating: 3.8, pages: 220,},
    //     {id: 13, title: 'Heart of Darkness', author: 'Joseph Conrad', publisher: 'Simon and Schuster', year: 1902, rating: 3.0, pages: 352,},
    //     {id: 14, title: 'The Sound and the Fury', author: 'William Faulkner', publisher: 'Harper Collins', year: 1929, rating: 4.5, pages: 145,},
    //     {id: 15, title: ' Nineteen Eighty Four', author: 'George Orwell', publisher: 'Hachette Book Group', year: 1949, rating: 4.6, pages: 220,},
    //     {id: 16, title: 'Great Expectations', author: 'Charles Dickens', publisher: 'Scholastic', year: 1861, rating: 4.7, pages: 128,},
    //     {id: 17, title: 'The Grapes of Wrath', author: 'John Steinbeck', publisher: 'Harper Collins', year: 1939, rating: 3.1, pages: 325,},
    //     {id: 18, title: 'Invisible Man', author: 'Ralph Ellison', publisher: 'Simon and Schuster', year: 1952, rating: 4.9, pages: 256,},
    //     {id: 19, title: 'To Kill a Mockingbird', author: 'Harper Lee', publisher: 'Hachette Book Group', year: 1960, rating: 4.4, pages: 165,},
    //     {id: 20, title: 'The Trial', author: 'Franz Kafka', publisher: 'Harper Collins', year: 1925, rating: 4.2, pages: 356,},
    //     {id: 21, title: 'Moby Dick', author: 'Herman Melville', publisher: 'Penguin Random House', year: 1851, rating: 4.8, pages: 401,},
    //     {id: 22, title: 'War and Peace', author: 'Leo Tolstoy', publisher: 'John Wiley and Sons', year: 1867, rating: 4.0, pages: 165,},
    //     {id: 23, title: 'The Great Gatsby', author: 'Scott Fitzgerald', publisher: 'Hachette Book Group', year: 1925, rating: 4.4, pages: 105,},
    //     {id: 24, title: 'White Fang', author: 'Jack London', publisher: 'John Wiley and Sons', year: 1996, rating: 4.3, pages: 352,},
    //     {id: 25, title: 'Hamlet', author: 'William Shakespeare', publisher: 'Penguin Random House', year: 1599, rating: 4.9, pages: 300,},
    //     {id: 26, title: 'Odyssey', author: 'Homer', publisher: 'Macmillan Publishers', year: 1335, rating: 4.3, pages: 195,},
    //     {id: 27, title: 'The Divine Comedy', author: 'Dante Alighieri', publisher: 'Scholastic', year: 1321, rating: 3.9, pages: 203,},
    //     {id: 28, title: 'Lolita', author: 'Vladimir Nabokov', publisher: 'Penguin Random House', year: 1955, rating: 3.3, pages: 152,},
    //     {id: 29, title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', publisher: 'Macmillan Publishers', year: 1884, rating: 4.5, pages: 220,},
    //     {id: 30, title: 'Anna Karenina', author: 'Leo Tolstoy', publisher: 'Scholastic', year: 1877, rating: 4.6, pages: 125,},
    //     {id: 31, title: 'The Iliad', author: 'Homer', publisher: 'Simon and Schuster', year: 1598, rating: 3.8, pages: 242,},
    //     {id: 32, title: 'To the Lighthouse', author: 'Virginia Woolf', publisher: 'John Wiley and Sons', year: 1927, rating: 3.8, pages: 220,},
    //     {id: 33, title: 'Heart of Darkness', author: 'Joseph Conrad', publisher: 'Simon and Schuster', year: 1902, rating: 3.0, pages: 352,},
    //     {id: 34, title: 'The Sound and the Fury', author: 'William Faulkner', publisher: 'Harper Collins', year: 1929, rating: 4.5, pages: 145,},
    //     {id: 35, title: ' Nineteen Eighty Four', author: 'George Orwell', publisher: 'Hachette Book Group', year: 1949, rating: 4.6, pages: 220,},
    //     {id: 36, title: 'Great Expectations', author: 'Charles Dickens', publisher: 'Scholastic', year: 1861, rating: 4.7, pages: 128,},
    //     {id: 37, title: 'The Grapes of Wrath', author: 'John Steinbeck', publisher: 'Harper Collins', year: 1939, rating: 3.1, pages: 325,},
    //     {id: 38, title: 'Invisible Man', author: 'Ralph Ellison', publisher: 'Simon and Schuster', year: 1952, rating: 4.9, pages: 256,},
    //     {id: 39, title: 'To Kill a Mockingbird', author: 'Harper Lee', publisher: 'Hachette Book Group', year: 1960, rating: 4.4, pages: 165,},
    //     {id: 40, title: 'The Trial', author: 'Franz Kafka', publisher: 'Harper Collins', year: 1925, rating: 4.2, pages: 356,},]

    constructor() {
        makeAutoObservable(this)
    }

    getState = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/books');
            runInAction(() => this.books = response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    postState = async () => {
        const data = this.books
        try {
            // Отправка данных на сервер
            await axios.post('http://localhost:5000/api/books', {
                data
            });

        } catch (error) {
            console.error('Error saving books:', error);
        }
    };



    addToFavourites(id) {
        if (!this.favourites.includes(id)) {
            this.favourites.push(id)
        }
    }

    deleteFromFavourites(id) {
        this.favourites = this.favourites.filter(fav => fav !== id)
    }
}

export default new State();