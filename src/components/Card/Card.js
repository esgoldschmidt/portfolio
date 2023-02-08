import React, { Component } from 'react';
import styles from './Card.css.js'
import hamburgerIcon from '../../resources/hamburger.png'
import logo from '../../resources/portfolioLogoWhite.png'

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
    
  }


  render() {
    return (
      <div style= {styles.mainMenu}>
        <button onClick={this.showMenu} style= {styles.topBar}>
          <img src={logo} style= {styles.hamburgerButton} alt='eg logo'></img>
          <img src={hamburgerIcon} style= {styles.hamburgerButton} alt='menu logo'></img>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <a href='#/who'><button style= {styles.menuItems}> Who </button> </a>
                <a href='#/resume'><button style= {styles.menuItems}> Resume </button> </a>
                <a href='#/'><button style= {styles.menuItems}> Intro </button> </a>
                <a href='#/development'><button style= {styles.menuItems}> &#60; Dev &#62; </button> </a>
                <a href='#/brand'><button style= {styles.menuItems}> Brand </button> </a>
                <a href='#/contact'><button style= {styles.menuItems}> Contact </button> </a>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}