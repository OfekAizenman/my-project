// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Fade } from '../transitions';
import styles from './modal.scss';

const propTypes = {
    children: PropTypes.node,
    invisible: PropTypes.bool,
    onClickAway: PropTypes.func,
    show: PropTypes.bool,
};

const defaultProps = {
    invisible: false,
    show: false,
};

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.handleClickAway = this.handleClickAway.bind(this);
    }

    handleClickAway() {
        if (this.props.onClickAway) {
            this.props.onClickAway();
        }
    }

    render() {
        const { children, invisible, show } = this.props;

        const classes = classNames(styles.root, {
            [styles.invisible]: invisible,
            [styles.hidden]: !show
        });
        
        return (
            <Fade 
                className={classes} 
                onClick={this.handleClickAway}
                show={show}>
                {children}
            </Fade>
        )
    }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;