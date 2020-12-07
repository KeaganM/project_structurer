import React from 'react';
import Logo from "./Logo";
import HeaderItem from "./Header_Item";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <nav>
                <div className='nav-wrapper blue-grey'>
                    <div className='container'>
                        <Logo custom_css='my-custom-class'/>
                        <ul id='nav-mobile' className='right hide-on-med-and-down'>
                            <HeaderItem type='select'/>
                            <HeaderItem/>
                        </ul>
                    </div>


                </div>
            </nav>
        )
    }
}

export default Header