import React from 'react';
import Home from './pages/Home';
import Room from './pages/room';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from '../src/components/Navbar';
import { Route, Switch  } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Switch> 
     <Route exact path='/' component={ Home }/>
     <Route exact path='/room/' component={ Room }/>
     <Route exact path='/room/:slug' component={ SingleRoom }/>
      <Route component={ Error }/>
     </Switch> 
    </div>
  );
}

export default App;
