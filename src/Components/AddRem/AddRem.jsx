//React
import React, { useState, useEffect } from 'react'

//Components
import Update from '../Update/Update'

//React Icons
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

export default function AddRem({categorie}) {
    
    const [newType, setNewType] = useState(null)
    const [newBookClick, setNewBookClick] = useState(false)
    const [remBookClick, setRemBookClick] = useState(false)

    const [newAuthorClick, setNewAuthorClick] = useState(false)
    const [remAuthorClick, setRemAuthorClick] = useState(false)

    const [newGenreClick, setNewGenreClick] = useState(false)
    const [remGenreClick, setRemGenreClick] = useState(false)

    const remAddClass = 'hover:scale-125 cursor-pointer transition-all'

    useEffect(() => {
        if (categorie) {
            setNewType(categorie)
        } else {
            console.log("No category")
        }
    }, [categorie])

    return(
        <React.Fragment>

            {newType === "boek" && (
                <React.Fragment>
                    <AiOutlinePlus className={remAddClass} onClick={setNewBookClick} /> <AiOutlineMinus className={remAddClass} onClick={setRemBookClick} />

                    {/* Add new book */}
                    {newBookClick && (
                        <Update func={'add'} cat={newType} onClose={() => setNewBookClick(false)} />
                    )}

                    {/* Delete book */}
                    {remBookClick && (
                        <Update func={'rem'} cat={newType} onClose={() => setRemBookClick(false)} />
                    )}

                </React.Fragment>
            )}

            {newType === "schrijver" && (
                <React.Fragment>
                    <AiOutlinePlus className={remAddClass} onClick={setNewAuthorClick} /> <AiOutlineMinus className={remAddClass} onClick={setRemAuthorClick} />

                    {/* Add new author */}
                    {newAuthorClick && (
                        <Update func={'add'} cat={newType} onClose={() => setNewAuthorClick(false)} />
                    )}

                    {/* Delete author */}
                    {remAuthorClick && (
                        <Update func={'rem'} cat={newType} onClose={() => setRemAuthorClick(false)} />
                    )}
                    
                </React.Fragment>
            )}

            {newType === "genre" && (
                <React.Fragment>
                    <AiOutlinePlus className={remAddClass} onClick={setNewGenreClick} /> <AiOutlineMinus className={remAddClass} onClick={setRemGenreClick} />

                    {/* Add new book */}
                    {newGenreClick && (
                        <Update func={'add'} cat={newType} onClose={() => setNewGenreClick(false)} />
                    )}

                    {/* Add new book */}
                    {remGenreClick && (
                        <Update func={'rem'} cat={newType} onClose={() => setRemGenreClick(false)} />
                    )}
                    
                </React.Fragment>
            )}

        </React.Fragment>
    )
}