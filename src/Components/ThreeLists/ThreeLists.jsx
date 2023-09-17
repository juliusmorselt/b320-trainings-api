//React
import { useEffect, useState } from "react"

//Functions
import { fetchBooks, fetchAuthors, fetchGenres } from "../../functions";

//Components
import SmallCard from "../Cards/SmallCard"
import AddRem from "../AddRem/AddRem";
import Reset from "../../Reset/Reset";

export default function ThreeLists() {

    const [books, setBooks] = useState([])
    const [authors, setAuthors] = useState([])
    const [genres, setGenres] = useState([])

    const labelClass = 
    "flex flex-wrap gap-2"
    
    const customTextClass = 
    "font-bold text-lg flex items-center gap-3"

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
    

    return (
        <section className="container">
            <Reset />

            {/* Titles laten zien */}
            <div>
                <p className={customTextClass}>Boeken | <AddRem categorie={"boek"} /></p>
                <div className={labelClass}>
                    {books.map((item, index) => {
                        console.log(item)
                        return(
                        <SmallCard 
                            key={index} 
                            soort={"boek"} 
                            content={item.name} 
                            author={item.author_id} 
                            genre={item.genre_id} 
                        />
                    )})}
                </div>
            </div>            

            {/* Schrijvers laten zien */}
            <div className="mt-6">
                <p className={customTextClass}>Schrijvers | <AddRem categorie={"schrijver"} /></p>
                <div className={labelClass}>
                    {authors.map((item, index) => (
                        <SmallCard 
                            key={index} 
                            soort={"schrijver"} 
                            content={item.name} 
                            authorAge={item.age}
                            authorId={item.id}
                        />
                    ))}
                </div>
            </div>

            {/* Genres laten zien */}
            <div className="mt-6">
                <p className={customTextClass}>Genres | <AddRem categorie={"genre"} /></p>
                <div className={labelClass}>
                {genres.map((item, index) => (
                    <SmallCard 
                        key={index} 
                        soort={"genre"} 
                        content={item.name} 
                        genreId={item.id} />
                ))}
                </div>
            </div>

        </section>
    )
}
