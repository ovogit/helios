//**** IMPORTS
//TODO
//=======================================================================================
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
window.jQuery = $;
import * as nxsEvents from 'events'

//*** FRONT_END_IMPORTS
var css = require('../sass/style.scss');

//*** APP_IMPORTS
import  Navigation  from './templates/navigation.nxs.js';
import  Scraper  from './templates/scraper.nxs.js';
import  Dashboard  from './templates/dashboard.nxs.js';
import  Layout  from './templates/layout.nxs.js';
import  About from './templates/about.nxs.js';

//*** DOC_ELEM
const app = document.getElementById('app');

render(
        <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Dashboard}></IndexRoute>
            <Route path="about" component={About}></Route>
        </Route>
        </Router>
        ,app);
