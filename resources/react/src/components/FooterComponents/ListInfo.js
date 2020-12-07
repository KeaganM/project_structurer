import React from 'react';

import styles from './css/AboutInfo.module.css'

export default class ListInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.about_footer}>
                {this.props.data.map((value, index) => {
                    return <li>{value}</li>
                })}
            </div>

        )
    }
}