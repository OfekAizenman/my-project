import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import QuoteList from '../primatives/quote-list';
import styles from './column.scss';

const propTypes = {
  title: PropTypes.string,
  quotes: PropTypes.array,
  autoFocusQuoteId: PrtopTypes.string,
}

export default class Column extends Component {
  render() {
    const title: string = this.props.title;
    const quotes: Quote[] = this.props.quotes;
    return (
      <Draggable draggableId={title} type="COLUMN">
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <div className={styles.wrapper}>
            <div
              className={styles.container}
              innerRef={provided.innerRef}
              style={provided.draggableStyle}>
              <div className={styles.header} isDragging={snapshot.isDragging}>
                <div
                  className={styles.title}
                  isDragging={snapshot.isDragging}
                  {...provided.dragHandleProps}>
                  {title}
                </div>
              </div>
              <QuoteList
                listId={title}
                listType="QUOTE"
                quotes={quotes}
                autoFocusQuoteId={this.props.autoFocusQuoteId} />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}

Column.PropTypes = propTypes;