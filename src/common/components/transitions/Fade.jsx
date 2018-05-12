import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onAnimationRest: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

const defaultProps = {
  show: false,
};

class Fade extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      children,
      className,
      onAnimationRest,
      show,
      ...other
    } = this.props;

    const defaultStyle = { opacity: 0 };
    const style = { opacity: spring(show ? 1 : 0) };

    return (
      <Motion defaultStyle={defaultStyle} onRest={onAnimationRest} style={style}>
        {({ opacity }) => (
          <div
            className={className} 
            style={{
              opacity: `${opacity}`,
            }}
            {...other}
          >
            {children}
          </div>
        )}
      </Motion>
    );
  }
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

export default Fade;
