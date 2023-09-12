import { makeAutoObservable } from "mobx"

class state {
    favourites = [];
    books = [{id: 1, title: 'Nemo', year: 1996, rating: 4.3, pages: 352,},
        {id: 2, title: 'Nemo', year: 1996, rating: 4.3, pages: 352,},
        {id: 3, title: 'Nemo', year: 1996, rating: 4.3, pages: 352,},
        {id: 4, title: 'Nemo', year: 1996, rating: 4.3, pages: 352,},
        {id: 5, title: 'Nemo', year: 1996, rating: 4.3, pages: 352,},
        {id: 6, title: 'Nemo', year: 1996, rating: 4.3, pages: 352,},
        {id: 7, title: 'Nemo', year: 1996, rating: 4.3, pages: 352,},
        {id: 8, title: 'Nemo', year: 1996, rating: 4.3, pages: 352,},
        {id: 9, title: 'Nemo', year: 1996, rating: 4.3, pages: 352,}]

    constructor() {
        makeAutoObservable(this)
    }

    addToFavourites(id) {
        this.favourites.push(id);
        console.log(this.favourites)
    }
}

export default new state;