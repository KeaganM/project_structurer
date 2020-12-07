import React, {Component} from 'react';
import misc_var from "../Misc/MiscVariables";

export default function FooterContentHoc(HocComponent, data, props) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: data
            }

        }

        render() {
            return (
                <div className={props.containing_div_class || 'col l4 s8'}>
                    <h5 className={props.title_class || null}>{props.title || 'Title'}</h5>
                    <HocComponent data={this.state.data} {...this.props}/>
                </div>
            );
        }
    }
}