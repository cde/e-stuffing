import React from 'react';
import './SessionPage.scss'
import SignIn from "../../components/Session/SignIn";
import SignUp from "../../components/Session/SignUp";

const SessionPage = () => (
    <div className='sessions'>
        <SignIn />
        <SignUp />

    </div>
)
export default SessionPage;