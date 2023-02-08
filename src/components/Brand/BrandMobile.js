import React from 'react';
import styles from './Brand.css.js';
import { Footer } from '../HomePage/Footer/Footer.js'
import FlexNav from '../ResponsiveLayout/FlexNav.js'
import mobileEventurous from '../../resources/mobileEventurous.png';
import mobileSubway from '../../resources/mobileSubway.png';
import mobileLettr from '../../resources/mobileLettr.png';
import mobileRosie from '../../resources/mobileRosie.png';
import mobileRB from '../../resources/mobileRB.png';
import brandImage from '../../resources/brandImage.png';
import moreRosie from '../../resources/moreRosie.png' 
import moreSubway from '../../resources/moreSubway.png';
import moreRB from '../../resources/moreRB.png';
import moreEventurous from '../../resources/moreEventurous.png';
import moreLettr from '../../resources/moreLettr.png';



export class BrandMobile extends React.Component {
  constructor() {
    super();
    this.state = {
      showMoreLettr: false,
      showMoreRosie: false,
      showMoreRB: false,
      showMoreEventurous: false,
      showMoreSubway: false,
    };
    
    this.showMoreLettr = this.showMoreLettr.bind(this);
    this.showMoreRosie = this.showMoreRosie.bind(this);
    this.showMoreRB = this.showMoreRB.bind(this);
    this.showMoreEventurous = this.showMoreEventurous.bind(this);
    this.showMoreSubway = this.showMoreSubway.bind(this);
    this.closeMoreLettr = this.closeMoreLettr.bind(this);
    this.closeMoreRosie = this.closeMoreRosie.bind(this);
    this.closeMoreRB = this.closeMoreRB.bind(this);
    this.closeMoreEventurous = this.closeMoreEventurous.bind(this);
    this.closeMoreSubway = this.closeMoreSubway.bind(this);
  }
  
  showMoreLettr(event) {
    event.preventDefault();
    
    this.setState({ showMoreLettr: true }, () => {
      document.addEventListener('click', this.closeMoreLettr);
    });
  }
  
  closeMoreLettr() {
    
    this.setState({ showMoreLettr: false }, () => {
      document.removeEventListener('click', this.closeMoreLettr);
    });
    
  }

  showMoreRosie(event) {
    event.preventDefault();
    
    this.setState({ showMoreRosie: true }, () => {
      document.addEventListener('click', this.closeMoreRosie);
    });
  }
  
  closeMoreRosie() {
    
    this.setState({ showMoreRosie: false }, () => {
      document.removeEventListener('click', this.closeMoreRosie);
    });
    
  }

  showMoreRB(event) {
    event.preventDefault();
    
    this.setState({ showMoreRB: true }, () => {
      document.addEventListener('click', this.closeMoreRB);
    });
  }
  
  closeMoreRB() {
    
    this.setState({ showMoreRB: false }, () => {
      document.removeEventListener('click', this.closeMoreRB);
    });
    
  }

  showMoreEventurous(event) {
    event.preventDefault();
    
    this.setState({ showMoreEventurous: true }, () => {
      document.addEventListener('click', this.closeMoreEventurous);
    });
  }
  
  closeMoreEventurous() {
    
    this.setState({ showMoreEventurous: false }, () => {
      document.removeEventListener('click', this.closeMoreEventurous);
    });
    
  }

  showMoreSubway(event) {
    event.preventDefault();
    
    this.setState({ showMoreSubway: true }, () => {
      document.addEventListener('click', this.closeMoreSubway);
    });
  }
  
  closeMoreSubway() {
    
    this.setState({ showMoreSubway: false }, () => {
      document.removeEventListener('click', this.closeMoreSubway);
    });
    
  }

    render() { 
  return (
    <div className="Brand">
        <div className="colorContainer" style={styles.colorContainer}>
          <FlexNav />
          <div className="splashContainer" style={styles.splashContainer}>
              <h1 className="splashText" style={styles.splashText}>Brand.</h1>
              <img src={brandImage} style={styles.splashStack} alt='markers'/>
          </div>
        </div>
        <div classNamee='transitionContainer' style={styles.transitionContainer}>
        <h2 className='projectsHead' style={styles.brandHead}>Select Projects</h2>
            <div className='projectBack' style={styles.projectBack}>
              <div className='projects' style={styles.projectContainer}>
                <img src={mobileLettr} alt="Lett'r" style={styles.mobileImage}/>
                <button onClick={this.showMoreLettr} style= {styles.button}>More &#9660;</button>
              </div>
              <div style={styles.showMoreContainer}>
                {
          this.state.showMoreLettr
            ? (
              <div
                className="more"
                style={styles.moreMobile}
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <img src={moreLettr} alt="Lett'r work" style={styles.moreImage}/>
              </div>
            )
            : (
              null
            )
        }
                </div>

              <div className='projects' style={styles.projectContainer}>
                <img src={mobileRosie} alt="Rosie the Realtor" style={styles.mobileImage}/>
                <button onClick={this.showMoreRosie} style= {styles.button}>More &#9660;</button>
          </div>
                <div style={styles.showMoreContainer}>
                {
          this.state.showMoreRosie
            ? (
              <div
                className="more"
                style={styles.moreMobile}
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <img src={moreRosie} alt="rosie work" style={styles.moreImageMobile}/>
              </div>
            )
            : (
              null
            )
        }
                </div>
              <div className='projects' style={styles.projectContainer}>
                <img src={mobileRB} alt="Renting Brooklyn" style={styles.mobileImage}/>
                <button onClick={this.showMoreRB} style= {styles.button}>More &#9660;</button>
          </div>
                <div style={styles.showMoreContainer}>
                {
          this.state.showMoreRB
            ? (
              <div
                className="more"
                style={styles.moreMobile}
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <img src={moreRB} alt="Renting Brooklyn work" style={styles.moreImageMobile}/>
              </div>
            )
            : (
              null
            )
        }
                </div>
              <div className='projects' style={styles.projectContainer}>
                <img src={mobileEventurous} alt="Eventurous" style={styles.mobileImage}/>
                <button onClick={this.showMoreEventurous} style= {styles.button}>More &#9660;</button>
          </div>
                <div style={styles.showMoreContainer}>
                {
          this.state.showMoreEventurous
            ? (
              <div
                className="more"
                style={styles.moreMobile}
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <img src={moreEventurous} alt="Eventurous work" style={styles.moreImageMobile}/>
              </div>
            )
            : (
              null
            )
        }
                </div>
              <div className='projects' style={styles.projectContainer}>
                <img src={mobileSubway} alt="Subway Realty Group" style={styles.mobileImage}/>
                <button onClick={this.showMoreSubway} style= {styles.button}>More &#9660;</button>
          </div>
                <div style={styles.showMoreContainer}>
                {
          this.state.showMoreSubway
            ? (
              <div
                className="more"
                style={styles.moreMobile}
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <img src={moreSubway} alt="Subway work" style={styles.moreImageMobile}/>
              </div>
            )
            : (
              null
            )
        }
                </div>
          </div>
        </div>
          <Footer />
    </div>
  );
}
}