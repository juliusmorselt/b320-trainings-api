import React from "react";

//Components
import SmallCard from "../Cards/SmallCard"
import AddRem from "../AddRem/AddRem";
import Reset from "../../Reset/Reset";

//AppContext
import { useAppContext } from "../../AppContext";

export default function ThreeLists() 
{
    const { books, authors, genres } = useAppContext();
    return (
        <section className="container py-24">
            <div>
                <p className='categoryName'>Boeken | <AddRem categorie={"boek"} /></p>
                <div className='labels'>
                    {books.map((item, index) => (
                        <SmallCard key={index} soort={"boek"} 
                            content={item.name} 
                            author={item.author_id} 
                            genre={item.genre_id} 
                        />
                    ))}
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

            <div className="my-6">
                <p className='categoryName'>Genres | <AddRem categorie={"genre"} /></p>
                <div className='labels'>
                    {genres.map((item, index) => (
                        <SmallCard key={index} soort={"genre"} 
                            content={item.name} 
                            genreId={item.id} 
                        />
                    ))}
                </div>
            </div>
            <Reset />
        </section>
    )
}
