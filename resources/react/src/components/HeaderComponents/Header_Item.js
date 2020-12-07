import React from 'react';


class HeaderItem extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        type: 'link',
        display_name: 'item',
        dropdown:
            {
                content: [
                    {link: '#', text: 'inner link 1'},
                    {link: '#', text: 'inner link 2'},
                    {link: '#', text: 'inner link 3'}
                ],
                data_target: 'dropdown_1'
            },

    }

    render() {
        return (

            <li>
                {this.props.type === 'link' ? <div><a href='#'>{this.props.display_name}</a></div> :
                    <div>
                        <a className='dropdown-trigger btn' href='#'
                           data-target={this.props.dropdown.data_target}>{this.props.display_name}</a>
                        <ul id={this.props.dropdown.data_target} className='dropdown-content'>
                            {
                                this.props.dropdown.content.map((value, index) => {
                                    return <li><a href={value.link}>{value.text}</a></li>
                                })
                            }
                        </ul>
                    </div>
                }
            </li>
        )
    }
}

export default HeaderItem