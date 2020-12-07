import React from 'react';

import facebook_logo from './facebook-f-brands.svg'
import instagram_logo from './instagram-brands.svg'
import linkedin_logo from './linkedin-in-brands.svg'

import styles from './css/SocialMediaIconStyles.module.css'

var icons = {
    facebook: facebook_logo,
    instagram: instagram_logo,
    linkedin: linkedin_logo

}

class SocialMediaIcons extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        logo: 'facebook',
        link: '#'
    }


    render() {
        return (
            <a href={this.props.link}>
                <img
                    className={styles.socialMediaIcon}
                    src={icons[this.props.logo]}
                    alt={this.props.logo}/>
            </a>
        )
    }
}

export default SocialMediaIcons