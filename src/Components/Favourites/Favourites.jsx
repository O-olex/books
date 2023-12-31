import React from "react";
import state from "../../state/state";
import { observer } from "mobx-react-lite";
import c from "./Favourites.module.css";
import heart from "../../assets/images/heart.png";

const Favourites = () => {

    let favBooks = [];

    state.books.forEach(book => {

        state.favourites.forEach(fav => {

            if (fav === book.id) {
                favBooks.push(book)
            }

        })
    })

    return (
        <table>
            <tbody>
                <tr>
                    <td className={c.tableTitles}>Title</td>
                    <td className={c.tableTitles}>Author</td>
                    <td className={c.tableTitles}>Year</td>
                    <td className={c.tableTitles}>Publisher</td>
                    <td className={c.tableTitles}>Rating</td>
                    <td className={c.tableTitles}>Pages count</td>
                </tr>
                {favBooks.map(book =>
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.year}</td>
                        <td>{book.publisher}</td>
                        <td>{book.rating}</td>
                        <td>{book.pages}</td>
                        <td><img alt="delete from favourites" className={c.savePng} src={heart} onClick={() => {state.deleteFromFavourites(book.id)}}></img></td>
                    </tr>)}
            </tbody>
        </table>
    )
}



export default observer(Favourites);