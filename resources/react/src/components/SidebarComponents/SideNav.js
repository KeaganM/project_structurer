import React from 'react';

import grip_lines from '../IconComponents/grip-lines-vertical-solid.svg'
import styles from './css/SideNav.module.css'

export default class SideNav extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        text: 'button'
    }

    render() {
        return (
            <div>
                <ul id={'slide-out'} className={'sidenav'}>

                </ul>
                <a href={'#'} data-target={'slide-out'} className={'sidenav-trigger'}><img className={styles.tab} src={grip_lines}/></a>
            </div>


        )
    }
}
