// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Motion, spring } from 'react-motion';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onAnimationRest: PropTypes.func,
    show: PropTypes.bool,
};

const defaultProps = {
    show: false
};

export default class Fade extends Component {
    render() {
        const { children, className, onAnimationRest, show, ...other } = this.props;

        return (
            <Motion defaultStyle={{opacity: 0}} onRest={onAnimationRest} style={{opacity: spring(show ? 1 : 0)}}>
                {({opacity}) =>
                    <div 
                        className={className} 
                        style={{
                            opacity: `${opacity}`
                        }}
                        {...other}>
                        {children}
                    </div>
                }
            </Motion>
        )
    }
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;