
import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Saved from './components/Saved'
import Nav from './components/Nav'
import Home from './components/Home'
import Res from './components/Restaurants'
import Articles from './components/Articles'


function App() {
  return (
    <Router> 
    <div className="App">
    <Nav /> 
    <Switch> 
        <Route  path="/saved" exact component={Saved} />
        <Route path="/" exact component={Home} />
        <Route path='/restaurants' exact component={Res}/>
        <Route  path="/articles" exact component={Articles} />
    </Switch>
       
         
    </div>
    </Router>
  );
}

export default App;
