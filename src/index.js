import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GetImageForm from './components/GetImageForm.js';
import GetManifestForm from './components/GetManifestForm.js';
import Header from './components/Header.js';
import ImageResults from './components/ImageResults.js';

ReactDOM.render(
    <BrowserRouter>
      <App>
        <Switch>
          <Route path='/rover/:rover/sol/:sol' component={ImageResults} />
          <Route path='/Search' component={GetImageForm} />
          <Route path='/Manifest' component={GetManifestForm} />
          <Route path='/' component={Header} />
        </Switch>
      </App>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
