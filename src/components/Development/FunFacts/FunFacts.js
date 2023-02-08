import React from 'react';
import Prism from 'prismjs';
import '../../../resources/prism.css'

export class FunFacts extends React.Component {
    componentDidMount() {
      Prism.highlightAll();
    }
    render() {
        return (
            <div className='FunFacts'>
                <pre className='line-numbers'>
                    <h2>Javascript</h2>
                    <code className='language-javascript'>
                    {`
    import React, {useState, useEffect, useRef} from 'react'
    import './Flashcard.css'
    
    
    export default function Flashcard({flashcard}) {
        const [flip, setFlip]=useState(false)
        const [height, setHeight] = useState('initial')
    
        const frontEl = useRef()
        const backEl = useRef()
    
        function setMaxHeight() {
            const frontHeight = frontEl.current.getBoundingClientRect().height
            const backHeight = backEl.current.getBoundingClientRect().height
            setHeight(Math.max(frontHeight, backHeight, 150))
        }
    
        useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
        useEffect(() => {
            window.addEventListener('resize', setMaxHeight )
            return () => window.removeEventListener ('resize', setMaxHeight)
         }, [])
    
        return (
            <div 
            className={'card $ {flip ? 'flip' : ''}'}
            style={{height: height}}
            onClick={() => setFlip(!flip)}>
                    <div className="front" ref={frontEl}>
                        {flashcard.question}
                        <div className='flashcard-options'>
                            {flashcard.options.map(option => {
                                return <div className='flashcard-option'> {option}</div>
                            })}
    
                        </div>
                    </div>
                    <div className='back' ref={backEl}>{flashcard.answer}</div>
            </div>
        )
    }
                    `}
                    </code>
                    <h2>CSS</h2>
                    <code className='language-css'>
                    {`
    .game {
        background-color: rgba(0,0,0,.1);
        padding: 1em;
        border-radius: 1em 1em 0 0;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .gameHead {
        font-size: 1.2em;
        color: gray;
        font-family: Quicksand;
        font-weight: 500;
        text-transform: uppercase;
        display: flex;
        justify-content: center
    
    }
    
    .container {
        margin: 1rem 2rem;
    }
    
    .card-grid {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 1rem
    }
    
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: .25em;
        box-shadow: 0 0 5px 2px rgba(0,0,0,.3);
        background-color: white;
        transform-style: preserve-3d;
        transition: 150ms;
        cursor: pointer;
        transform:perspective(1000px) rotateY(var(--rotate-y,0)) translateY(var(--translate-y,0));
        margin: 1em;
    }
    .card:hover{
        --translate-y: -2px;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, .5);
    }
    .card.flip{
        --rotate-y: 180deg;
    }
    .card .front {
        left: 0;
    }
    .card .front,
    .card .back {
        position: absolute;
        padding: 1rem;
        backface-visibility: hidden;
    
    }
    .card .back{
        transform: rotateY(180deg);
        font-size: .75em
    }
    
    .flashcard-options{
        margin-top: .5rem
    }
    .flashcard-option{
        margin-top: .25rem;
        color: #555;
        font-size: .75rem;
    }
    .flashcard-option:first-child{
        margin-top: 0;
    }
                    `}
                    </code>
                </pre>
            </div>
        )
    }
}