import React, { Component } from 'react';
import { Switch, Route,  } from 'react-router-dom'
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header  from "./components/Header/Header";
import SessionPage  from "./pages/SessionPage/SessionPage";
import { auth } from './firebase/firebase.util';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component= {HomePage} />
                    <Route  path='/shop' component={ShopPage} />
                    <Route  path='/signin' component={SessionPage} />
                </Switch>
            </div>
        );
    }

}

export default App;
