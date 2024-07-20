import React from 'react';
import './GridItem.css';

const GridItem = ({ isSelfView, children }) => {
  return (
    <div className={`grid-item ${isSelfView ? 'self-view' : ''}`}>
      {children}
    </div>
  );
};

export default GridItem;
