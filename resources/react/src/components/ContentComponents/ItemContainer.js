import React from 'react';

import test_img from './_tests/test_pic.jpg'
import styles from './css/ItemContainer.module.css'

export default class ItemContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static defaultProps = {
        title: 'Item Title',
        content: 'Item Content',
        card_size_class: 'col s4 m4'
    }

    render() {
        return (
            <div className={styles.itemContainer}>
                <div className={this.props.card_size_class}>
                    <div className={'card'}>
                        <img src={test_img}></img>
                        <div className={'card-content'}>
                            <span className={'card-title'}>
                                {this.props.title}
                            </span>
                            <div>
                                {this.props.content}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
