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
import Landsat from './components/Landsat.js';
import APOD from './components/APOD.js';

ReactDOM.render(
    <BrowserRouter>
      <App>
        <Switch>
          <Route path='/rover/:rover/sol/:sol/camera/:camera' component={ImageResults} />
          <Route path='/rover/:rover/sol/:sol' component={ImageResults} />
          <Route path='/Search' component={GetImageForm} />
          <Route path='/apod' component={APOD} />
          <Route path='/Manifest' component={GetManifestForm} />
          <Route path='/Landsat' component={Landsat} />
          <Route path='/' component={Header} />
        </Switch>
      </App>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
