import React from 'react';

import styles from './css/SocialMediaIconStyles.module.css'
import SocialMediaIcons from "./SocialMediaIcons";

class SocialMediaIconsRow extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        items: [
            <SocialMediaIcons logo={'facebook'} link={'https://www.facebook.com/'}/>,
            <SocialMediaIcons logo={'facebook'} link={'https://www.facebook.com/'}/>

        ]
    }


    render() {
        return (
            <div>
                {this.props.items.map((value, index) => {
                    return <div className={styles.socialMediaIconRow}>{value}</div>
                })}
            </div>

        )
    }
}

export default SocialMediaIconsRow