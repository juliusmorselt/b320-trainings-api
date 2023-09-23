import React, { createContext, useContext, useState, useEffect } from 'react'
import { fetchBooks, fetchAuthors, fetchGenres } from './functions'

const AppContext = createContext()

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
    const [books, setBooks] = useState([])
    const [authors, setAuthors] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(() => 
    {
        fetchBooks()
            .then((booksRes) => { setBooks(booksRes) })
            .catch((error) => 
            {
                console.error("Error in useEffect:", error)
            })

        fetchAuthors()
            .then((authorsRes) => { setAuthors(authorsRes) })
            .catch((error) => 
            {
                console.error("Error in useEffect:", error)
            })
            
        fetchGenres()
            .then((genresRes) => { setGenres(genresRes) })
            .catch((error) => 
            {
                console.error("Error in useEffect:", error)
            })
    }, [])

    const contextValue = {
        books,
        authors,
        genres,
        setBooks,
        setAuthors,
        setGenres,
      };
      return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}