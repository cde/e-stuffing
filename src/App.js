import React from 'react';
import { Switch, Route,  } from 'react-router-dom'
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header  from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <h1>E-Stuffing</h1>
        <Header />
        <Switch>
            <Route exact path='/' component= {HomePage} />
            <Route  path='/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
