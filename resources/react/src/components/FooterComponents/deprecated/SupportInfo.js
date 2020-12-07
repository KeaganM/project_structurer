import React from 'react';

import FooterContent from "./FooterContent";

import styles from './css/SupportStyles.module.css'


class SupportInfo extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        link_items: [
            <a href={'https://www.google.com'}>Contact us</a>,
            <a href={'https://www.google.com'}>Shipping</a>,
            <a href={'https://www.google.com'}>Returns</a>,
            <a href={'https://www.google.com'}>Support</a>
        ]
    }


    render() {
        return (
            <FooterContent
                title={'Support'}
                content={this.props.link_items.map((value, index) => {
                    return <li>{value}</li>
                })}
                content_class={styles.support_footer}
                containing_div_class={'col l1 s8'}
            />

        )
    }
}

export default SupportInfo