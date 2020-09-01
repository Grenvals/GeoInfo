import React, { useEffect, useReducer } from 'react';

import { Header } from './components/Header/Header';

import './App.scss';
import './scss/global.scss';
import './scss/main.scss';

const App = () => {
  return (
    <div className="wrapper">
      <div className="App">
        <Header />
      </div>
    </div>
  );
};

export default App;
