import React from 'react';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1 className="app-title">Oh Shit! My Dog Ate...</h1>
        <img src={logo} className="app-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
