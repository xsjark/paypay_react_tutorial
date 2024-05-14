import React, { useState } from 'react';
import TrackButton from './components/TrackButton/TrackButton';
import TrackText from './components/TrackText/TrackText';
import './App.css'

const App: React.FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const showText = () => {
    setIsTextVisible(true);
  };

  return (
    <div id="app">
      <TrackButton onClick={showText} />
      <TrackText isVisible={isTextVisible} />
    </div>
  );
};

export default App;
