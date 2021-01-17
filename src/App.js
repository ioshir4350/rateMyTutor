import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch,
        Route} from 'react-router-dom'

import HomePage from './components/homepage/HomePage'       
import Tutor from './components/tProfile/Tutor' 
import Company from './components/cProfile/Company'
import Header from './components/Header'

function App({ match }) {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/company/:companyID" exact>
          <Company />
        </Route>
        <Route path="/tutor/:tutorID" exact>
          <Tutor />
        </Route>
        
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
