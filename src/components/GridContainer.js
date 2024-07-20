import React from 'react';
import GridItem from './GridItem';
import './GridContainer.css';

const GridContainer = ({ numParticipants }) => {
  const renderGrids = () => {
    const grids = [];
    for (let i = 0; i < numParticipants; i++) {
      grids.push(
        <GridItem key={i} isSelfView={i === numParticipants - 1}>
          {i === numParticipants - 1 ? 'Self View' : `Participant ${i + 1}`}
        </GridItem>
      );
    }
    return grids;
  };

  return (
    <div className="grid-container">
      {renderGrids()}
    </div>
  );
};

export default GridContainer;
