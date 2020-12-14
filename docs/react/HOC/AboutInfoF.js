import React from 'react';

// here I have a normal and simple component that takes in a array and returns a div with list items
// this will be passed in the FooterContentHOC where it will undergo some custom html wrapping
// this is nice since this can be resued somewhere else if need but it also makes this simpler
// the other method that was used before was the import FooterContent and essentially customize it to be this ListInfo
// component, which works however there would be multiple Footercontent classes with some slight changes which may be
// unnecessarily complicated.
export default class AboutInfoF extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.data.map((value, index) => {
                    return <li>{value}</li>
                })}
            </div>

        )
    }
}