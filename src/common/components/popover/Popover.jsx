import React, { Component } from 'react';
// @flow

import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal } from '../internal';
import styles from './popover.scss';

const propTypes = {
    open: PropTypes.bool,
    popOverClassName: PropTypes.string,
};

const defaultProps = {
    open: false,
};

export default class Popover extends Component {
    render() {
        const { open, popOverClassName } = this.props;

        const className = classNames(styles.root, popOverClassName);

        return (
            <Modal show={open}>
                <Motion style={{x: spring(open ? 400 : 0 )}}>
                    {({x}) =>
                        <div className={className} style={{
                            transform: `translateX(${x}px)`
                        }}>
                        </div>
                    }
                </Motion>
            </Modal>
        )
    }
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;