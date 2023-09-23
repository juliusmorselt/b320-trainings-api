//React
import React, { useState } from 'react'

//React Icons
import { AiOutlineCloseCircle } from 'react-icons/ai'

//Functions
import { addBook, deleteBook, updateBook, addAuthor, deleteAuthor, updateAuthor, addGenre, deleteGenre, updateGenre } from '../../functions'

//AppContext
import { useAppContext } from '../../AppContext';

export default function Update({func, cat, onClose}) 
{
    const { books, setBooks, authors, setAuthors, genres, setGenres } = useAppContext();

    //Book states (2)
    const [bookName, setBookName] = useState('')
    const [specifiedBookId, setSpecifiedBookId] = useState('')
    
    //Author states (3)
    const [authorName, setAuthorName] = useState('')
    const [newAuthorAge, setNewAuthorAge] = useState('')
    const [specifiedAuthorId, setSpecifiedAuthorId] = useState('')

    //Genre states (2)
    const [genreName, setGenreName] = useState('')
    const [specifiedGenreIds, setSpecifiedGenreIds] = useState('')

    //Book handles (2)
    const handleNewBookName = (event) => { setBookName(event.target.value) }
    const handleBookSelect = (event) => { setSpecifiedBookId(event.target.value) }

    //Author handles (3)
    const handleNewAuthor = (event) => { setAuthorName(event.target.value) }
    const handleNewAuthorAge = (event) => { setNewAuthorAge(event.target.value) }
    const handleAuthorSelect = (event) => { setSpecifiedAuthorId(event.target.value) }
    
    //Genre handles (2)
    const handleNewGenreName = (event) => { setGenreName(event.target.value) }
    const handleGenreSelect = (event) => { setSpecifiedGenreIds(event.target.value) }
    
    return (
        <div className='popup'>
            <div className='flex justify-between text-lg pb-2'>

                <p className='mb-0'>
                    {func === 'add' && `Nieuw(e) ${cat} toevoegen`}
                    {func === 'rem' && `Bestaand(e) ${cat} verwijderen`}
                    {func === 'upd' && `Bestaand(e) ${cat} updaten`}
                </p>


                <AiOutlineCloseCircle
                className='text-right transition-all hover:scale-110 hover:cursor-pointer'
                onClick={onClose}/>
            
            </div>

            <div className="text-sm font-thin">
                
                {/* Boeken toevoegen, verwijderen en updaten */}
                <React.Fragment>
                    {cat === "boek" && (
                        <React.Fragment>

                            {func === "add" && (
                                <React.Fragment>

                                    <div className="customFlex">
                                        <p className='w-1/2'>Naam van boek: </p>
                                        <input className='text-black placeholder:text-black' value={bookName} onChange={handleNewBookName}/>
                                    </div>
                                   
                                    <div className="customFlex">
                                        <p className='w-1/2'>Selecteer schrijver: </p>
                                        <select value={specifiedAuthorId} onChange={handleAuthorSelect} className='pickValue'> 
                                            {authors.map((author, index) => ( <option key={index} value={author.id}>{author.name} ({author.id})</option> ))} 
                                        </select>
                                    </div>
                                    <div className="customFlex">
                                        <p className='w-1/2'>Selecteer genre: </p>
                                        <select value={specifiedGenreIds} onChange={handleGenreSelect} className='pickValue'> 
                                            {genres.map((genre, index) => ( <option key={index} value={genre.id}>{genre.name} ({genre.id})</option> ))} 
                                        </select>
                                    </div>

                                    <hr className='my-5'/>

                                    <p>Naam: {bookName}</p>
                                    <p>Schrijver: {specifiedAuthorId}</p>
                                    <p>Genre: {specifiedGenreIds}</p>

                                    <button onClick={() => {
                                        addBook(bookName, specifiedAuthorId, specifiedGenreIds, setBooks)
                                        onClose()
                                    }} className='font-bold'>Toevoegen</button>

                                </React.Fragment>  
                            )}

                            {func === "rem" && (
                                <React.Fragment>

                                    <div className="customFlex">
                                        <p className='w-1/2'>Selecteer boek: </p>
                                        <select value={specifiedBookId} onChange={handleBookSelect} className='pickValue'> 
                                            {books.map((book, index) => ( <option key={index} value={book.id}>{book.name} ({book.id})</option> ))} 
                                        </select>
                                    </div>

                                    <hr className='my-5'/>

                                    <p>Boek verwijderen: {specifiedBookId}</p>
                                    <button onClick={() => {
                                        deleteBook(specifiedBookId, setBooks)
                                        onClose()
                                    }} className='font-bold'>Verwijderen</button>

                                </React.Fragment>  
                            )}

                            {func === "upd" && (
                                
                                <React.Fragment>
                                    
                                    <div className="customFlex">
                                        <p className='w-1/2'>Selecteer boek: </p>
                                        <select value={specifiedBookId} onChange={handleBookSelect} className='pickValue'> 
                                            {books.map((book, index) => ( <option key={index} value={book.id}>{book.name} ({book.id})</option> ))} 
                                        </select>
                                    </div>

                                    <div className="customFlex">
                                        <p className='w-1/2'>Nieuwe schrijver: </p>
                                        <select value={specifiedAuthorId} onChange={handleAuthorSelect} className='pickValue'> 
                                            {authors.map((author, index) => ( <option key={index} value={author.id}>{author.name} ({author.id})</option> ))} 
                                        </select>
                                    </div>

                                    <div className="customFlex">
                                        <p className='w-1/2'>Nieuwe genre: </p>
                                        <select value={specifiedGenreIds} onChange={handleGenreSelect} className='pickValue'> 
                                            {genres.map((genre, index) => ( <option key={index} value={genre.id}>{genre.name} ({genre.id})</option> ))} 
                                        </select>
                                    </div>

                                    <input className='text-black placeholder:text-black' value={bookName} onChange={handleNewBookName} placeholder="Nieuwe naam" />

                                    <hr className='my-5'/>

                                    <p>Naam: {bookName}</p>
                                    <p>Schrijver: {specifiedAuthorId}</p>
                                    <p>Genre: {specifiedGenreIds}</p>

                                    <button onClick={() => {
                                        updateBook(bookName, specifiedAuthorId, specifiedGenreIds, specifiedBookId, setBooks)
                                        onClose()
                                    }} className='font-bold'>Updaten</button>

                                </React.Fragment>

                            )}
                        
                        </React.Fragment>
                    )}
                </React.Fragment>
                
                {/* Schrijvers toevoegen, verwijderen en updaten */}
                <React.Fragment>
                {cat === "schrijver" && (
                    <React.Fragment>

                        {func === "add" && (
                            <React.Fragment>

                                <div className="customFlex">
                                    <p className='w-1/2'>Naam van de schrijver: </p>
                                    <input className='text-black placeholder:text-black block' value={authorName} onChange={handleNewAuthor}/>
                                </div>
                                
                                <div className="customFlex">
                                    <p className='w-1/2'>Naam van de schrijver: </p>
                                    <input className='text-black placeholder:text-black block' value={newAuthorAge} onChange={handleNewAuthorAge}/>
                                </div>

                                <hr className='my-5'/>

                                <p>Naam: {authorName}</p>
                                <p>Leeftijd: {newAuthorAge}</p>

                                <button onClick={() => {
                                    addAuthor(authorName, newAuthorAge, setAuthors)
                                    onClose()
                                }} className='font-bold'>Toevoegen</button>

                            </React.Fragment>  
                        )}

                        {func === "rem" && (
                            <React.Fragment>

                                <div className="customFlex">
                                    <p className='w-1/2'>Selecteer schrijver: </p>
                                    <select value={specifiedAuthorId} onChange={handleAuthorSelect} className='pickValue'> 
                                        {authors.map((author, index) => ( <option key={index} value={author.id}>{author.name} ({author.id})</option> ))} 
                                    </select>
                                </div>

                                <hr className='my-5'/>

                                <p>Boek verwijderen: {specifiedAuthorId}</p>
                                <button onClick={() => {
                                    deleteAuthor(specifiedAuthorId, setAuthors, setBooks)
                                    onClose()
                                }} className='font-bold'>Verwijderen</button>

                            </React.Fragment>  
                        )}

                        {func === "upd" && (
                            <React.Fragment>

                                <div className="customFlex">
                                    <p className='w-1/2'>Selecteer schrijver: </p>
                                    <select value={specifiedAuthorId} onChange={handleAuthorSelect} className='pickValue'> 
                                        {authors.map((author, index) => ( <option key={index} value={author.id}>{author.name} ({author.id})</option> ))} 
                                    </select>
                                </div>

                                <div className="customFlex">
                                    <p className='w-1/2'>Nieuwe naam: </p>
                                    <input className='text-black placeholder:text-black block' value={authorName} onChange={handleNewAuthor}/>
                                </div>
                                
                                <div className="customFlex">
                                    <p className='w-1/2'>Nieuwe leeftijd: </p>
                                    <input className='text-black placeholder:text-black block' value={newAuthorAge} onChange={handleNewAuthorAge}/>
                                </div>

                                <hr className='my-5'/>

                                <p>Nieuwe naam: {authorName}</p>
                                <p>Nieuwe leeftijd: {newAuthorAge}</p>

                                <button onClick={() => {
                                    updateAuthor(authorName, newAuthorAge, specifiedAuthorId, setAuthors, setBooks)
                                    onClose()
                                }} className='font-bold'>Updaten</button>

                            </React.Fragment>  
                        )}
                    
                    </React.Fragment>
                )}
                </React.Fragment>

                {/* Genres toeveogen, verwijderen en updaten */}
                <React.Fragment>
                {cat === "genre" && (
                    <React.Fragment>

                        {func === "add" && (
                            <React.Fragment>

                                <div className="customFlex">
                                    <p className='w-1/2'>Naam van de schrijver: </p>
                                    <input className='text-black placeholder:text-black block' value={genreName} onChange={handleNewGenreName}/>
                                </div>
                                
                                <hr className='my-5'/>

                                <p>Naam: {genreName}</p>

                                <button onClick={() => {
                                    addGenre(genreName, setGenres)
                                    onClose()
                                }} className='font-bold'>Toevoegen</button>

                            </React.Fragment>  
                        )}

                        {func === "rem" && (
                            <React.Fragment>

                                <div className="customFlex">
                                    <p className='w-1/2'>Selecteer genre: </p>
                                    <select value={specifiedGenreIds} onChange={handleGenreSelect} className='pickValue'> 
                                        {genres.map((genre, index) => ( <option key={index} value={genre.id}>{genre.name} ({genre.id})</option> ))} 
                                    </select>
                                </div>

                                <hr className='my-5'/>

                                <p>Genre verwijderen: {specifiedGenreIds}</p>
                                <button onClick={() => {
                                    deleteGenre(specifiedGenreIds, setGenres, setBooks)
                                    onClose()
                                }} className='font-bold'>Verwijderen</button>

                            </React.Fragment>  
                        )}


                        {func === "upd" && (
                            <React.Fragment>

                                <div className="customFlex">
                                    <p className='w-1/2'>Selecteer genre: </p>
                                    <select value={specifiedGenreIds} onChange={handleGenreSelect} className='pickValue'> 
                                        {genres.map((genre, index) => ( <option key={index} value={genre.id}>{genre.name} ({genre.id})</option> ))} 
                                    </select>
                                </div>

                                <div className="customFlex">
                                    <p className='w-1/2'>Nieuwe naam: </p>
                                    <input className='text-black placeholder:text-black block' value={genreName} onChange={handleNewGenreName}/>
                                </div>

                                <hr className='my-5'/>

                                <p>Nieuwe naam: {genreName}</p>
                                <button onClick={() => {
                                    updateGenre(genreName, specifiedGenreIds, setGenres, setBooks)
                                    onClose()
                                }} className='font-bold'>Updaten</button>

                            </React.Fragment>  
                        )}
                    </React.Fragment>
                )}
                </React.Fragment>
            </div>
        </div>
    )
}