import React from "react";
import state from "../state/state";
import { observer } from "mobx-react-lite";

const Favourites = observer(() => {

    let favBooks = [];

    state.books.forEach( book => {

        state.favourites.forEach( fav => {

            if (fav == book.id) {
                favBooks.push(book)
            }

        })
    })

    console.log(favBooks)
    return (
        <div>
            {favBooks.map( book => <div key={book.id}>{book.id}:{book.title}:</div> )}
        </div>
    )
})



export default Favourites;