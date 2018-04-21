import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Item } from './types';
import type { DraggableProvided } from 'react-beautiful-dnd';
import styles from './item';

const propTypes = {
  item: Item,
  isDragging: PropTypes.bool,
  provided: DraggableProvided,
  autoFocus: PropTypes.bool
}

export default class Item extends Component<Props> {
  componentDidMount() {
    if (!this.props.autoFocus) {
      return;
    }

    const node = ReactDOM.findDOMNode(this).focus();
  }

  render() {
    const { item, isDragging, provided } = this.props;

    const containerClasses = className(styles.container, {
      [styles.container-dragging]: isDragging
    });

    return (
      <div
        className={containerClasses}
        isDragging={isDragging}
        innerRef={provided.innerRef}
        style={provided.draggableStyle}
        {...provided.dragHandleProps}>
        <div>{item.title}</div>
        <div>{item.description}</div>
      </div>
    );
  }
}

Item.propTypes = propTypes;