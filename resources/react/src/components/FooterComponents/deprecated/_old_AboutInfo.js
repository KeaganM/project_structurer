import React from 'react';

import FooterContent from "./FooterContent";
import SocialMediaIconsRow from "../IconComponents/SocialMediaIconsRow";

import styles from './css/AboutStyles.module.css'


class AboutInfo extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        link_items: [
            <a href={'https://www.google.com'}>About Us</a>,
            // <a href={'https://www.google.com'}>News</a>,
            // <a href={'https://www.google.com'}>Our Team</a>,
            <SocialMediaIconsRow/>
        ]
    }


    render() {
        return (
            // <FooterContent
            //     title={'About'}
            //     content={this.props.link_items.map((value, index) => {
            //         return <li>{value}</li>
            //     })}
            //     content_class={styles.about_footer}
            // />
            <div>
                {this.props.link_items.map((value, index) => {
                    return <li>{value}</li>
                })}
            </div>

        )
    }
}

export default AboutInfo