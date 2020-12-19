import React from 'react';

import test_pic from '../_tests/landing_test.jpg'
import styles from './css/LandingPageImage.Module.css'


export default class LandingImage extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        text: 'button'
    }

    render() {
        return (
            <div className={styles.landingPageImage}>
                <img src={test_pic}></img>
            </div>
        )
    }
}
