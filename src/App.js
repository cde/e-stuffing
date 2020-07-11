import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header  from "./components/Header/Header";
import SessionPage  from "./pages/SessionPage/SessionPage";
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                       id: snapShot.id,
                       ...snapShot.data()
                    });
                    console.log(this.state)
                });
            }

            this.setState({ currentUser: userAuth });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path='/' component= {HomePage} />
                    <Route  path='/shop' component={ShopPage} />
                    <Route
                        exact path='/signin'
                        render={ () => this.props.currentUser ? (<Redirect to='/' /> ): (<SessionPage />) }
                    />
                </Switch>
            </div>
        );
    }

}

const mapStateToProps = ( { user }) => ({
    currentUser: user.currentUser
})

const mapDispatchProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchProps )(App);
