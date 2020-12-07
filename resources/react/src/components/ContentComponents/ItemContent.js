import React from 'react';


export default class ItemContent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
            text: 'button'
        }

    render () {
        return (
            <div></div>

        )
    }
}
