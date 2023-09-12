import React from "react";
import state from "../state/state";
import { observer } from "mobx-react-lite";

const Favourites = observer(() => {
    let filterBooks = [];
    for (let i = 0; i <= state.books.length; i++) {
        for(let j = 0; j <= state.favourites.length; j++)
            if (state.books[i].id === state.favourites[j]){
                filterBooks.push(state.books[i])
            }
    }

    return (
        
        <div>{filterBooks}</div>
    )
})

export default Favourites;