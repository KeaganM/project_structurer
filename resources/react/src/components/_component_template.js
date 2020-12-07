import React from 'react';



export default class Button extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
            text: 'button'
        }

    render () {
        return (
            <button className={this.props.className}>{this.props.text}</button>
        )
    }
}
