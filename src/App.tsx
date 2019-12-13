import React, { useState } from 'react';
import logo from './logo.svg';

const App: React.FC = () => {
  const [article, setArticle] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target: { value } }: { target: { value: string } }) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    setArticle(inputValue);
  }

  return (
    <div className="app">
      <header>
        <h1 className="app-title">Oh Shit! My Dog Ate...</h1>
        <img src={logo} className="app-logo" alt="logo" />
      </header>

      <main>
        <div className="article-result" />

        <input className="article-input"
               placeholder="What did they eat?"
               onChange={handleInputChange}
               value={inputValue} />

        <button className="article-submit" onClick={handleSubmit}>Check</button>

      </main>
    </div>
  );
}

export default App;
