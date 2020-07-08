import React from 'react';
import { Switch, Route,  } from 'react-router-dom'
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header  from "./components/Header/Header";
import SessionPage  from "./pages/SessionPage/SessionPage";

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path='/' component= {HomePage} />
            <Route  path='/shop' component={ShopPage} />
            <Route  path='/signin' component={SessionPage} />
        </Switch>
    </div>
  );
}

export default App;
