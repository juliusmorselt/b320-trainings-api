//React
import { useEffect, useState } from "react"

//Functions
import { fetchBooks, fetchAuthors, fetchGenres } from "../../functions";

//Components
import SmallCard from "../Cards/SmallCard"
import AddRem from "../AddRem/AddRem";
import Reset from "../../Reset/Reset";

export default function ThreeLists() 
{

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

    return (
        <section className="container">
            <Reset />

            <div>
                <p className='categoryName'>Boeken | <AddRem categorie={"boek"} /></p>
                <div className='labels'>
                    {books.map((item, index) => {
                        return (
                            <SmallCard key={index} soort={"boek"} 
                                content={item.name} 
                                author={item.author_id} 
                                genre={item.genre_id} 
                            />
                        )
                    })}
                </div>
            </div>            

            <div className="mt-6">
                <p className='categoryName'>Schrijvers | <AddRem categorie={"schrijver"} /></p>
                <div className='labels'>
                    {authors.map((item, index) => (
                        <SmallCard key={index} soort={"schrijver"} 
                            content={item.name} 
                            authorAge={item.age}
                            authorId={item.id}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-6">
                <p className='categoryName'>Genres | <AddRem categorie={"genre"} /></p>
                <div className='labels'>
                {genres.map((item, index) => (
                    <SmallCard key={index} 
                        soort={"genre"} 
                        content={item.name} 
                        genreId={item.id} 
                    />
                ))}
                </div>
            </div>

        </section>
    )
}
