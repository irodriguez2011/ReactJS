
import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Saved from './Saved'
import Nav from './Nav'
import Home from './Home'


function App() {
  return (
    <Router> 
    <div className="App">
    <Nav /> 
    <Switch> 
        <Route  path="/saved" exact component={Saved} />
        <Route path="/" exact component={Home} />
    
    </Switch>
       
         
    </div>
    </Router>
  );
}

export default App;
