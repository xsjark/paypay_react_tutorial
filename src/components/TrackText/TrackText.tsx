import React from 'react';
import './TrackText.css'

const TrackText: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <div id='track-text' style={{ display: isVisible ? 'block' : 'none' }}>
      <p>hello track</p>
    </div>
);

export default TrackText;
