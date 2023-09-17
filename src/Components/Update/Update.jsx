//React
import React, {useEffect, useState} from 'react'

//React Icons
import { AiOutlineCloseCircle } from 'react-icons/ai'

//Functions
import { fetchBooks, fetchAuthors, fetchGenres } from "../../functions";

export default function Update({func, cat, onClose}) {

    const [books, setBooks] = useState([])
    const [authors, setAuthors] = useState([])
    const [genres, setGenres] = useState([])

    //Book states (2)
    const [newBookName, setNewBookName] = useState('')
    const [specifiedBookId, setSpecifiedBookId] = useState('')
    
    //Author states (3)
    const [newAuthor, setNewAuthor] = useState('')
    const [newAuthorAge, setNewAuthorAge] = useState('')
    const [specifiedAuthorId, setSpecifiedAuthorId] = useState('')

    //Genre states (2)
    const [newGenreName, setNewGenreName] = useState('')
    const [specifiedGenreIds, setSpecifiedGenreIds] = useState('')

    //Book handles (2)
    const handleNewBookName = (event) => { setNewBookName(event.target.value) }
    const handleBookSelect = (event) => { setSpecifiedBookId(event.target.value) }

    //Author handles (3)
    const handleNewAuthor = (event) => { setNewAuthor(event.target.value) }
    const handleNewAuthorAge = (event) => { setNewAuthorAge(event.target.value) }
    const handleAuthorSelect = (event) => { setSpecifiedAuthorId(event.target.value) }
    
    //Genre handles (2)
    const handleNewGenreName = (event) => { setNewGenreName(event.target.value) }
    const handleGenreSelect = (event) => { setSpecifiedGenreIds(event.target.value) }

    //Fill "books" with the response
    useEffect(() => {
        fetchBooks()
            .then((booksRes) => {
                setBooks(booksRes)
            })
            .catch((error) => {
                console.error("Error in useeffect:", error)
            })
    }, [])

    //Fill "authors" with the response
    useEffect(() => {
        fetchAuthors()
            .then((authorsRes) => {
                setAuthors(authorsRes)
            })
            .catch((error) => {
                console.error("Error in useeffect:", error)
            })
    }, [])

    //Fill "genres" with the response
    useEffect(() => {
        fetchGenres()
            .then((genresRes) => {
                setGenres(genresRes)
            })
            .catch((error) => {
                console.error("Error in useeffect:", error)
            })
    }, [])

    //Book functions
    function addBookWithGivenData (newBookName, specifiedAuthorId, specifiedGenreIds) {
        fetch("http://api.training.theburo.nl/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: newBookName,
                author_id: specifiedAuthorId,
                genre_id: specifiedGenreIds
            })
        })
    }

    function deleteBookWithGivenData (specifiedBookId) {
        fetch(`http://api.training.theburo.nl/books/${specifiedBookId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                id: specifiedBookId,
            })
        })
    }

    //Author functions
    function addNewAuthor(newAuthor, newAuthorAge) {
        fetch("http://api.training.theburo.nl/authors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: newAuthor,
                age: newAuthorAge 
            })
        })
    }

    function deleteAuthor(specifiedAuthorId) {
        fetch(`http://api.training.theburo.nl/authors/${specifiedAuthorId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                id: specifiedAuthorId,
            })
        })
    }

    //Genre functions
    function addNewGenre(newGenreName) {
        fetch("http://api.training.theburo.nl/genres", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: newGenreName,
            })
        })
    }

    function deleteGenre(specifiedGenreIds) {
        fetch(`http://api.training.theburo.nl/genres/${specifiedGenreIds}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                id: specifiedGenreIds,
            })
        })
    }

    return(
        <div className='popup'>
            <div className='flex justify-between text-lg pb-2'>
                
                {func === 'add' && 
                    <p className='mb-0'>
                        Nieuw(e)
                        {cat === "boek" && ( " boek " )}
                        {cat === "schrijver" && ( " schrijver " )}
                        {cat === "genre" && ( " genre " )}
                        toevoegen
                    </p>
                }

                {func === 'rem' && 
                    <p className='mb-0'>
                        Bestaand(e)
                        {cat === "boek" && ( " boek " )}
                        {cat === "schrijver" && ( " schrijver " )}
                        {cat === "genre" && ( " genre " )}
                        verwijderen
                    </p>
                }

                <AiOutlineCloseCircle
                className='text-right transition-all hover:scale-110 hover:cursor-pointer'
                onClick={onClose}/>
            
            </div>

            <div className="text-sm font-thin">
                
                {/* Add and delete books */}
                <React.Fragment>
                    {cat === "boek" && (
                        <React.Fragment>

                            {func === "add" && (
                                <React.Fragment>

                                    <input className='text-black placeholder:text-black' value={newBookName} onChange={handleNewBookName} placeholder="Naam van boek" />
                                    <div className="flex gap-2 items-center my-3">
                                        <p className='w-1/2'>Selecteer schrijver: </p>
                                        <select value={specifiedAuthorId} onChange={handleAuthorSelect} className='selectClass'> 
                                            {authors.map((author, index) => ( <option key={index} value={author.id}>{author.name} ({author.id})</option> ))} 
                                        </select>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <p className='w-1/2'>Selecteer genre: </p>
                                        <select value={specifiedGenreIds} onChange={handleGenreSelect} className='selectClass'> 
                                            {genres.map((genre, index) => ( <option key={index} value={genre.id}>{genre.name} ({genre.id})</option> ))} 
                                        </select>
                                    </div>

                                    <hr className='my-5'/>

                                    <p>Naam: {newBookName}</p>
                                    <p>Schrijver: {specifiedAuthorId}</p>
                                    <p>Genre: {specifiedGenreIds}</p>

                                    <button onClick={() => addBookWithGivenData(newBookName, specifiedAuthorId, specifiedGenreIds)} className='font-bold'>Toevoegen</button>

                                </React.Fragment>  
                            )}

                            {func === "rem" && (
                                <React.Fragment>

                                    <div className="flex gap-2 items-center my-3">
                                        <p className='w-1/2'>Selecteer boek: </p>
                                        <select value={specifiedBookId} onChange={handleBookSelect} className='selectClass'> 
                                            {books.map((book, index) => ( <option key={index} value={book.id}>{book.name} ({book.id})</option> ))} 
                                        </select>
                                    </div>

                                    <hr className='my-5'/>

                                    <p>Boek verwijderen: {specifiedBookId}</p>
                                    <button onClick={() => deleteBookWithGivenData(specifiedBookId)} className='font-bold'>Verwijderen</button>

                                </React.Fragment>  
                            )}
                        
                        </React.Fragment>
                    )}
                </React.Fragment>
                
                {/* Add and delete authors */}
                <React.Fragment>
                {cat === "schrijver" && (
                    <React.Fragment>

                        {func === "add" && (
                            <React.Fragment>

                                <input className='text-black placeholder:text-black block' value={newAuthor} onChange={handleNewAuthor} placeholder="Naam van schrijver" />
                                <input className='text-black placeholder:text-black block' value={newAuthorAge} onChange={handleNewAuthorAge} placeholder="Leeftijd van schrijver" />

                                <hr className='my-5'/>

                                <p>Naam: {newAuthor}</p>
                                <p>Leeftijd: {newAuthorAge}</p>

                                <button onClick={() => addNewAuthor(newAuthor, newAuthorAge)} className='font-bold'>Toevoegen</button>

                            </React.Fragment>  
                        )}

                        {func === "rem" && (
                            <React.Fragment>

                                <div className="flex gap-2 items-center my-3">
                                    <p className='w-1/2'>Selecteer schrijver: </p>
                                    <select value={specifiedAuthorId} onChange={handleAuthorSelect} className='selectClass'> 
                                        {authors.map((author, index) => ( <option key={index} value={author.id}>{author.name} ({author.id})</option> ))} 
                                    </select>
                                </div>

                                <hr className='my-5'/>

                                <p>Boek verwijderen: {specifiedAuthorId}</p>
                                <button onClick={() => deleteAuthor(specifiedAuthorId)} className='font-bold'>Verwijderen</button>

                            </React.Fragment>  
                        )}
                    
                    </React.Fragment>
                )}
                </React.Fragment>

                {/* Add and delete genres */}
                <React.Fragment>
                {cat === "genre" && (
                    <React.Fragment>

                        {func === "add" && (
                            <React.Fragment>

                                <input className='text-black placeholder:text-black block' value={newGenreName} onChange={handleNewGenreName} placeholder="Naam van genre" />
                                
                                <hr className='my-5'/>

                                <p>Naam: {newGenreName}</p>

                                <button onClick={() => addNewGenre(newGenreName)} className='font-bold'>Toevoegen</button>

                            </React.Fragment>  
                        )}

                        {func === "rem" && (
                            <React.Fragment>

                                <div className="flex gap-2 items-center my-3">
                                    <p className='w-1/2'>Selecteer genre: </p>
                                    <select value={specifiedGenreIds} onChange={handleGenreSelect} className='selectClass'> 
                                        {genres.map((genre, index) => ( <option key={index} value={genre.id}>{genre.name} ({genre.id})</option> ))} 
                                    </select>
                                </div>

                                <hr className='my-5'/>

                                <p>Genre verwijderen: {specifiedGenreIds}</p>
                                <button onClick={() => deleteGenre(specifiedGenreIds)} className='font-bold'>Verwijderen</button>

                            </React.Fragment>  
                        )}
                    
                    </React.Fragment>
                )}
                </React.Fragment>

            </div>
            
            
        </div>
    )
}