import React from 'react';
import { CircularProgress } from '@material-ui/core';

const overlayStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  backgroundColor: 'rgb(0, 0, 0, 0.4)',
  position: 'fixed',
  zIndex: '20',
};

function OverlaySpinner({ visible }) {
  return visible ? (
    <div style={overlayStyle}>
      <CircularProgress />
    </div>
  ) : null;
}

export default OverlaySpinner;
