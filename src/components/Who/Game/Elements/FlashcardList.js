import React from 'react'
import Flashcard from './Flashcard.js'
import './Flashcard.css'

export default function FlashcardList({flashcards}) {
    return (
        <div className='card-grid'>
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}
