import React, { useState } from 'react';
import logo from './logo.svg';

const App: React.FC = () => {
  const [currentArticle, setCurrentArticle] = useState('');
  const handleInputChange = ({ target: { value } }: { target: { value: string } }) => {
    setCurrentArticle(value);
  };

  return (
    <div className="app">
      <header>
        <h1 className="app-title">Oh Shit! My Dog Ate...</h1>
        <img src={logo} className="app-logo" alt="logo" />
      </header>

      <main>
        <input className="article-input"
               placeholder="What did they eat?"
               onChange={handleInputChange}
               value={currentArticle} />
        <p>{currentArticle}</p>
      </main>
    </div>
  );
}

export default App;
