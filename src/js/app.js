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
var fomrat = require('../sass/format.css');
var sidebar = require('../sass/sidebar.css');
var navigation = require('../sass/navigation.css');
var content = require('../sass/content.css');
var right = require('../sass/right.css');
var queries = require('../sass/queries.css');

//*** APP_IMPORTS
import  Navigation  from './templates/navigation.nxs.js';
//import  Dashboard  from './templates/dashboard.hls.js';
import  Layout  from './templates/layout.nxs.js';
import  Order  from './templates/order.nxs.js';

//*** DOC_ELEM
const app = document.getElementById('app');

render(
        <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Order}></IndexRoute>
        </Route>
        </Router>
        ,app);

(function(){
    var hamburger = $('#hamburger');
    var menu = $('#hamburger-menu');

    hamburger.on('mouseup', function(e){
        menu.toggle();
    });
})();
