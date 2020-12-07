import React from 'react';

import ItemContainer from "./ItemContainer";
import axios from 'axios'


export default class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test:''
        };
        this.testClick = this.testClick.bind(this);
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/test_get?name=Keagan')
            .then(res => {
                const t = res.data
                this.setState({test:t})
            })


    }

    testClick() {
        console.log(this.state)
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'row'}>
                    <button onClick={this.testClick}>press</button>
                </div>
            </div>
        )
    }
}
