
import React from 'react';
import FlashcardList from './Elements/FlashcardList.js'
import './Elements/Flashcard.css';
//import axios from 'axios';

export default function Game() {
       return (
              <div className='game'>
                     <h1 className= 'gameHead'>Fun Facts</h1>
                     <div className='container'>
                            <FlashcardList flashcards={FLASHCARDS}/> 
                     </div>
              
              </div>
       )
}

const FLASHCARDS =[
       
       {
              id:1,
              question: "Home to the 'City of Lights', which country has Eric visited most outside the United States?",
              answer: 'France',
              options: ['United Kingdom', 'Japan', 'France', 'Italy']
       },{
              id:2,
              question: "Known for bouncing here, there and everywhere, what was Eric's childhood nickname?",
              answer: 'Tigger',
              options: ['Elmo', 'Tigger', 'Bugs Bunny', 'Goofy']
       },{
              id:3,
              question: 'By far the largest university in his home state, from what university did Eric earn a degree?',
              answer: 'Ohio State University',
              options: ['University of Cincinnati', 'Ohio University', 'Kent State University', 'Ohio State University']
       },{
              id:4,
              question: "A popular mode of transport to Manhattan, what is Eric's favorite activity for visitors to NYC?",
              answer: 'Staten Island Ferry',
              options: ['Staten Island Ferry', 'Path Train', 'Metro North', 'MTA']
       },{
              id:5,
              question: "Which of the following 'funny' Diva's has Eric NOT yet seen perform live?",
              answer: 'Barbra Streisand',
              options: ['Cher', 'Barbra Streisand', 'Dolly Parton', 'Bette Midler']
       },{
              id:6,
              question: "Making a 'splash' with credit card points, sign-up bonuses and status matching, where was Eric able to travel for $0 out of pocket?",
              answer: 'Bahamas - Atlantis',
              options: ['Bahamas - Atlantis', 'Cancun - InterContinental', 'Quebec - Le Frontenac', 'Paris - Park Hyatt']
       },{
              id:7,
              question: "Championed by Oprah, what has been Eric's favorite Broadway experience to date?",
              answer: 'The Color Purple',
              options: ['Hamilton', 'Hadestown', 'The Color Purple', 'Miss Siagon']
       },{
              id:8,
              question: "Boo! Which cult movie does Eric consider the GOAT?",
              answer: 'Hocus Pocus',
              options: ['Rocky Horror Picture Show', 'Hocus Pocus', 'Clue', 'Army of Darkness']
       },{
              id:9,
              question: "Oh, Sugar! What is Eric's favorite way to spend my free time?",
              answer: 'Baking',
              options: ['Baking', 'Jogging', 'Dancing', 'Singing']
       },{
              id:10,
              question: "Aptly considered to have had a 'syndrome', what are Eric's sibling dynamics? ",
              answer: 'Middle Child',
              options: ['Oldest Child', 'Youngest Child', 'Middle Child', 'Only Child']
       }
]
