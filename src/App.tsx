import React from 'react';

import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import { Sidebar } from './components/Sidebar/Sidebar';
import { MapPage } from './components/Pages/MapPage/MapPage';
import { AuthorPage } from './components/Pages/AuthorPage/AuthorPage';
import { AuthorizationPage } from './components/Pages/AuthorizationPage/AuthorizationPage';

import './scss/global.scss';
import './scss/main.scss';
import './App.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <div className="app__wrap">
            <Sidebar />
            <div className="app__content">
              <Switch>
                <Route exact path="/" render={() => <Redirect to={'/main'} />} />
                <Route path="/authorization" render={() => <AuthorizationPage />} />
                <Route path="/main" render={() => <MapPage />} />
                <Route path="/author" render={() => <AuthorPage />} />
                <Route path="*" render={() => <Redirect to={'/main'} />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
