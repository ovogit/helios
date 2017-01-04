import React from 'react';
import {Link} from 'react-router';

//TODO 
// trying to make an event emitter
//import EventEmitter from 'events';


class Navigation extends React.Component {

    constructor(){
        super();
    }
    render(){
        return (
                <nav class="navbar navbar-default">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/helios">Helios</a>
                </div>
                <div class="collapse navbar-collapse" id="main-nav">
                <ul class="nav navbar-nav">
                    <li><Link to={`/`}>Dashboard</Link></li>
                    <li><a href="#about">About</a></li>
                </ul>
                </div>
                </nav>
                );

    }

}

export default Navigation;
