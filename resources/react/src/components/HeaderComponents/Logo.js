import React from 'react';

// todo add options for an image instead of just text
class Logo extends React.Component {

    static defaultProps = {
        url: '*',
        text: 'LOGO',
        custom_css: ''
    }

    constructor() {
        super();
        this.state = {};
    }


    render() {
        return (
            <a className={'brand-logo ' + this.props.custom_css} href={this.props.url}>{this.props.text}</a>
        )
    }
}

export default Logo