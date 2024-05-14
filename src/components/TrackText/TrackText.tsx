import React from 'react';
import './TrackText.css'

const TrackText: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <p id="track-text" style={{ display: isVisible ? 'block' : 'none' }}>hello track</p>
);

export default TrackText;
