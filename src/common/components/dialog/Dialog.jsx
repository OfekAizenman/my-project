// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal } from '../internal';
import styles from './dialog.scss';

const propTypes = {
    onRequestClose: PropTypes.func,
    show: PropTypes.bool
};

const defaultProps = {
    show: false
};

export default class Dialog extends Component {
    render() {
        const { onRequestClose, show } = this.props;

        return (
            <Modal
                onClickAway={onRequestClose}
                show={show}>
            </Modal>
        )
    }
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;