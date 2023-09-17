import React, { useEffect, useState } from "react"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { fetchAuthorById, fetchGenreById } from "../../functions"

export default function Info({ onClose, soort, title, author, authorAge, authorId, genre, genreId }) {
    const [authorInfo, setAuthorInfo] = useState(null)
    const [genreInfo, setGenreInfo] = useState(null)
    const [newType, setNewType] = useState(null)
    
    useEffect(() => {
        if(soort) {
            setNewType(soort);
        } else {
            console.log("No type")
        }
    }, [soort])

    //fetch author by id
    useEffect(() => {
        if (author) {
            fetchAuthorById(author)
            .then((authorsRes) => {
                setAuthorInfo(authorsRes)
            })
            .catch((error) => {
                console.log("Error while fetching author: ", error)
            })
        }
    }, [author])

    //fetch genre by id
    useEffect(() => {   
        if (genre) {
            fetchGenreById(genre)
            .then((genreRes) => {
                setGenreInfo(genreRes)
            })
            .catch((error) => {
                console.log("Error while fetching genre: ", error)
            })
        }
    }, [genre])

    return (
        <div className='popup'>
            
            <div className='flex justify-between text-lg pb-2'>
                <p className='mb-0'>
                    { newType === "boek" && ("Boek gegevens") }
                    { newType === "schrijver" && ("Schrijver gegevens") }
                    { newType === "genre" && ("Genre gegevens") }
                </p>
                <AiOutlineCloseCircle
                    className='text-right transition-all hover:scale-110 hover:cursor-pointer'
                    onClick={onClose}
                />
            </div>

            <hr className="py-2" />
            
            <div>
                { newType === "boek" && (
                    <React.Fragment>
                        <p>Titel: {title ? title : "Zoeken..."}</p>
                        <p>Schrijver: {authorInfo ? authorInfo.name : "Zoeken..."}</p>
                        <p>Schrijver Leeftijd: {authorInfo ? authorInfo.age : "Zoeken..."}</p>
                        <p>Genre: {genreInfo ? genreInfo.name : "Zoeken..."}</p>
                        <p>Genre Id: {genreInfo ? genreInfo.id : "Zoeken..."}</p>
                    </React.Fragment>
                ) }    
                { newType === "schrijver" && (
                    <React.Fragment>
                        <p>Naam: {title ? title : "Zoeken..."}</p>
                        <p>Leeftijd: {authorAge ? authorAge : "Zoeken..."}</p>
                        <p>Id: {authorId ? authorId : "Zoeken..."}</p>
                    </React.Fragment>
                ) }
                { newType === "genre" && (
                    <React.Fragment>
                        <p>Naam: {title ? title : "Zoeken..."}</p>
                        <p>Id: {genreId ? genreId : "Zoeken..."}</p>
                    </React.Fragment>
                ) }
            </div>

        </div>
    )
}
