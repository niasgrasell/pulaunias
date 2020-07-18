import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Home, Blog, About, Contact } from './views';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
       <div className="App">
            <header className="App-header">
              
      
   <nav class="nav-item">
   <ul class="nav justify-content-end">   
            <li class="nav-item"><Link to="/">Home  </Link></li> 
            <li class="nav-item"><Link to="/blog">Blog  </Link></li> 
            <li class="nav-item"><Link to="/about">About  </Link></li> 
            <li class="nav-item"><Link to="/contact">Contact  </Link></li>
          </ul>
      </nav>
      </header>
     
  

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/about">
            <About/>
            </Route>
            <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;