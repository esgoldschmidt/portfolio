import React from 'react';
import Media from 'react-media';
import {ExperienceMobile} from './ExperienceMobile.js';
import {ExperienceDesktop} from './ExperienceDesktop.js'

export class Experience extends React.Component {
    render() {
           return (
                <div className='ExperienceMain'>
                    <Media queries={{ small: { maxWidth: 990 } }}>
                     {matches =>
                         matches.small ? (
                             <ExperienceMobile />
                         ) : (
                             <ExperienceDesktop />
                         )
                     }
                     </Media>    
 
                </div>
           )
       }
    }
