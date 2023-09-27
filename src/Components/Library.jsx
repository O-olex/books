import React from "react";
import state from "../state/state";
import { observer } from "mobx-react-lite"

const Library = observer( () => {

    return (
        <table>
            <tbody>
                {state.books.map( book => 
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.year}</td>
                    <td>{book.rating}</td>
                    <td>{book.pages}</td>
                    <td><button onClick={() => {state.addToFavourites(book.id)}}>To favourites</button></td>
                </tr>)}
            </tbody>
        </table>
    )
})

export default Library;