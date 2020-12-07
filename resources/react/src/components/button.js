import React from 'react';

class Button extends React.Component {
    constructor() {
        super();
        this.state = {};
        // this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        text:'button'
    }
    render () {
        return (
            <button className={this.props.className}>{this.props.text}</button>
        )
    }
}

export default Button