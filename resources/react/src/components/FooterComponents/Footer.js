import React from 'react';

import FooterContentHOC from "./FooterContentHOC";
import ListInfo from "./ListInfo";

import styles from './css/FooterStyles.module.css'

// Different Components ************************************************************************************************
const AboutInfo = FooterContentHOC(
    ListInfo,
    [
        <a href={'https://www.google.com'}>About Us</a>,
        <a href={'https://www.google.com'}>News</a>,
        <a href={'https://www.google.com'}>Our Team</a>,
    ],
    {title: 'About',containing_div_class:'col l2 s8'})

const SupportInfo = FooterContentHOC(
    ListInfo,
    [
        <a href={'https://www.w3schools.com/howto/howto_css_fixed_footer.asp'}>Support</a>,
        <a href={'https://www.w3schools.com/howto/howto_css_fixed_footer.asp'}>Contact</a>,
        <a href={'https://www.w3schools.com/howto/howto_css_fixed_footer.asp'}>Returns</a>,
    ],
    {title: 'Support'})

// *********************************************************************************************************************
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {}


    render() {
        return (
            <footer className={'page-footer blue-grey ' + styles.footer}>
                <div className={'container'}>
                    <div className='row'>
                        <AboutInfo/>
                        <SupportInfo/>
                    </div>
                </div>
            </footer>

        )
    }
}
