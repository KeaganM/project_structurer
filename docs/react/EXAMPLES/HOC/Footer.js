import React from 'react';

import SocialMediaIcons from '../IconComponents/SocialMediaIcons'
import FooterContent from "./FooterContent";
import SupportInfo from "./SupportInfo";
// import ListInfo from "./ListInfo";

import FooterContentHOC from "./FooterContentHOC";
import AboutInfoF from "./AboutInfoF";

import styles from './css/FooterStyles.module.css'

// first we go ahead and create the data we want in out component that will be passed to the HOC
var about_info_data = [
    <a href={'https://www.google.com'}>About Us</a>,
    <a href={'https://www.google.com'}>News</a>,
    <a href={'https://www.google.com'}>Our Team</a>,
]

// next we essentially create the ListInfo component (a constant that is assigned to a react component)
// Where the FooterContentHOC wraps the AboutInfoF component, and takes in the data we initialized above
const AboutInfo = FooterContentHOC(AboutInfoF,about_info_data)

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {}


    render() {
        return (
            <footer className={'page-footer blue-grey ' + styles.footer}>
                <div className={'container'}>
                    <div className='row'>
                        finally we have our aboutinfo component where we can pass in props to change it up. This will
                        actually change up props in the HOC
                        <AboutInfo test='green'/>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer