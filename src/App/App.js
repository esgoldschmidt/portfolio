import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from '../../src/components/HomePage/Home.js'
import {Brand} from '../../src/components/Brand/Brand.js'
import {Contact} from '../../src/components/Contact/Contact.js'
import {Development} from '../../src/components/Development/Development.js'
import {Resume} from '../../src/components/Resume/Resume.js'
import {Work} from '../../src/components/Work/Work.js'
import {Who} from '../../src/components/Who/Who.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/brand' exact component={Brand} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/development' exact component={Development} />
            <Route path='/resume' exact component={Resume} />
            <Route path='/work' exact component={Work} />
            <Route path='/who' exact component={Who} />
            {/*<ProtectedRoute path='/loggedin' component={LoggedIn} /> */}
            <Route path="*" component={() => "404, Page Not Found"} />
          </Switch>
          </Router>
      </div>
  );
}
}

export default App;
