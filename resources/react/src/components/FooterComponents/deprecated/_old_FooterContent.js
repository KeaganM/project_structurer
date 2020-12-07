import React from 'react';
import misc_var from "../Misc/MiscVariables";

class FooterContent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        title: 'Footer Title',
        content: misc_var.example_text_short,
        content_class:null,
        title_class:null,
        containing_div_class:'col l4 s8'
    }

    render() {
        return (
            <div className={this.props.containing_div_class}>
                <h5 className={this.props.title_class}>
                    {this.props.title}
                </h5>
                <div className={this.props.content_class}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default FooterContent