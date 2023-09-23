import React, { useState } from 'react'
import { GrCircleInformation } from 'react-icons/gr'
import Info from '../Info/Info'

export default function SmallCard({ content, soort, author, authorAge, authorId, genre, genreId, className }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleInfoClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={className + ' rounded-lg border text-lg flex justify-center items-center bg-gray-300'}>
                <p className="mb-0 px-3 py-3">{content}</p>
                <GrCircleInformation
                    className='mr-3 transition-all hover:scale-110 hover:cursor-pointer'
                    onClick={handleInfoClick}
                />
            </div>
            {isOpen && (
                <Info soort={soort} title={content} author={author} authorAge={authorAge} authorId={authorId} genre={genre} genreId={genreId} onClose={() => setIsOpen(false)} />
            )}
        </>
    )
}
