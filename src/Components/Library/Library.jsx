import React from "react";
import state from "../../state/state";
import { observer } from "mobx-react-lite";
import c from "./Library.module.css";
import save from "../../assets/images/save.png";
import heart from "../../assets/images/heart.png";

const Library = observer( () => {

    const isFavourite = (id) => {
        return state.favourites.includes(id)
    }

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
                {state.books.map( book => 
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.year}</td>
                    <td>{book.publisher}</td>
                    <td>{book.rating}</td>
                    <td>{book.pages}</td>
                    <td>{isFavourite(book.id)
                        ? <img alt="delete from favourites" className={c.savePng} src={heart} onClick={() => {state.deleteFromFavourites(book.id)}}></img>
                        : <img alt="add to favourites" className={c.savePng} src={save} onClick={() => {state.addToFavourites(book.id)}}></img>}
                    </td>
                </tr>)}
            </tbody>
        </table>
    )
})

export default Library;