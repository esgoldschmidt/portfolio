import React from 'react';
import Media from 'react-media';
import {AboutEricMobile} from './AboutEricMobile.js';
import {AboutEricDesktop} from './AboutEricDesktop.js'

export class AboutEric extends React.Component {
    render() {
           return (
                <div className='ExperienceMain'>
                    <Media queries={{ small: { maxWidth: 650 } }}>
                     {matches =>
                         matches.small ? (
                             <AboutEricMobile />
                         ) : (
                             <AboutEricDesktop />
                         )
                     }
                     </Media>    
 
                </div>
           )
       }
    }

