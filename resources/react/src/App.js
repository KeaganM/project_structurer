import React from 'react';

import MainContainer from "./components/ContentComponents/MainContainer";

import './App.css';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            button_text: 'a test from app'
        }
    }

    render() {
        return (
            <div>
                {/*<Button text={this.state.button_text}/>*/}
                <MainContainer/>

            </div>

        )
    }
}
