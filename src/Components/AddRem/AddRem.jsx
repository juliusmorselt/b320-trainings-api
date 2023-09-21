//React
import React, { useState, useEffect } from 'react'

//Components
import Update from '../Update/Update'

//React Icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FiRefreshCcw } from 'react-icons/fi'

export default function AddRem({categorie}) {
    
    const [newType, setNewType] = useState(null)
    const [newBookClick, setNewBookClick] = useState(false)
    const [remBookClick, setRemBookClick] = useState(false)
    const [updateBookClick, setUpdateBookClick] = useState(false)

    const [newAuthorClick, setNewAuthorClick] = useState(false)
    const [remAuthorClick, setRemAuthorClick] = useState(false)
    const [updateAuthorClick, setUpdateAuthorClick] = useState(false)

    const [newGenreClick, setNewGenreClick] = useState(false)
    const [remGenreClick, setRemGenreClick] = useState(false)
    const [updateGenreClick, setUpdateGenreClick] = useState(false)

    useEffect(() => 
    {
        if (categorie) 
        {
            setNewType(categorie)
        }
    }, [categorie])

    return(
        <React.Fragment>

            {newType === "boek" && (
                <React.Fragment>
                    <AiOutlinePlus className='functionalityIcons' onClick={setNewBookClick} /> 
                    <AiOutlineMinus className='functionalityIcons' onClick={setRemBookClick} /> 
                    <FiRefreshCcw className='functionalityIcons' onClick={setUpdateBookClick} />

                    {/* Add new book */}
                    {newBookClick && (
                        <Update func={'add'} cat={newType} onClose={() => setNewBookClick(false)} />
                    )}

                    {/* Delete book */}
                    {remBookClick && (
                        <Update func={'rem'} cat={newType} onClose={() => setRemBookClick(false)} />
                    )}

                    {/* Update book */}
                    {updateBookClick && (
                        <Update func={'upd'} cat={newType} onClose={() => setUpdateBookClick(false)} />
                    )}

                </React.Fragment>
            )}

            {newType === "schrijver" && (
                <React.Fragment>
                    <AiOutlinePlus className='functionalityIcons' onClick={setNewAuthorClick} /> 
                    <AiOutlineMinus className='functionalityIcons' onClick={setRemAuthorClick} />
                    <FiRefreshCcw className='functionalityIcons' onClick={setUpdateAuthorClick} />

                    {/* Add new author */}
                    {newAuthorClick && (
                        <Update func={'add'} cat={newType} onClose={() => setNewAuthorClick(false)} />
                    )}

                    {/* Delete author */}
                    {remAuthorClick && (
                        <Update func={'rem'} cat={newType} onClose={() => setRemAuthorClick(false)} />
                    )}

                    {/* Update author */}
                    {updateAuthorClick && (
                        <Update func={'upd'} cat={newType} onClose={() => setUpdateAuthorClick(false)} />
                    )}
                    
                </React.Fragment>
            )}

            {newType === "genre" && (
                <React.Fragment>
                    <AiOutlinePlus className='functionalityIcons' onClick={setNewGenreClick} /> 
                    <AiOutlineMinus className='functionalityIcons' onClick={setRemGenreClick} />
                    <FiRefreshCcw className='functionalityIcons' onClick={setUpdateGenreClick} />

                    {/* Add new book */}
                    {newGenreClick && (
                        <Update func={'add'} cat={newType} onClose={() => setNewGenreClick(false)} />
                    )}

                    {/* Add new book */}
                    {remGenreClick && (
                        <Update func={'rem'} cat={newType} onClose={() => setRemGenreClick(false)} />
                    )}

                    {/* Update genre */}
                    {updateGenreClick && (
                        <Update func={'upd'} cat={newType} onClose={() => setUpdateGenreClick(false)} />
                    )}
                    
                </React.Fragment>
            )}

        </React.Fragment>
    )
}