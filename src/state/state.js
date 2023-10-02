import { makeAutoObservable } from "mobx"

class state {
    favourites = [1,3];
    books = [{id: 1, title: 'Nemo1', author: 'Jack London', publisher: 'Red Fish', year: 1996, rating: 4.3, pages: 352,},
        {id: 2, title: 'Nemo2', author: 'Jack London', publisher: 'Red Fish', year: 1996, rating: 4.3, pages: 352,},
        {id: 3, title: 'Nemo3', author: 'Jack London', publisher: 'Red Fish', year: 1996, rating: 4.3, pages: 352,},
        {id: 4, title: 'Nemo4', author: 'Jack London', publisher: 'Red Fish', year: 1996, rating: 4.3, pages: 352,},
        {id: 5, title: 'Nemo5', author: 'Jack London', publisher: 'Red Fish', year: 1996, rating: 4.3, pages: 352,},
        {id: 6, title: 'Nemo6', author: 'Jack London', publisher: 'Red Fish', year: 1996, rating: 4.3, pages: 352,},
        {id: 7, title: 'Nemo7', author: 'Jack London', publisher: 'Red Fish', year: 1996, rating: 4.3, pages: 352,},
        {id: 8, title: 'Nemo8', author: 'Jack London', publisher: 'Red Fish', year: 1996, rating: 4.3, pages: 352,},
        {id: 9, title: 'Nemo9', author: 'Jack London', publisher: 'Red Fish', year: 1996, rating: 4.3, pages: 352,}]

    constructor() {
        makeAutoObservable(this)
    }

    addToFavourites(id) {
        if (!this.favourites.includes(id)) {
            this.favourites.push(id)
        }
    }

    deleteFromFavourites(id) {
        this.favourites = this.favourites.filter(fav => fav !== id)
    }
}

export default new state;