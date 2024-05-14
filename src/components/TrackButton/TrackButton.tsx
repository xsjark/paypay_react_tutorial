import React from 'react';
import './TrackButton.css';

const TrackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button id="track-button" onClick={onClick}>Click me!!</button>
);

export default TrackButton;
