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
                <div id="navigation">
                    <input type="text" id="fuzzySearch"></input>
                    <div class="collapse">
                        <div class="item">
                            <button>
                                <span class="glyphicon glyphicon-envelope"></span>
                            </button>
                        </div>
                        <div class="item">
                            <button>
                                <span class="glyphicon glyphicon-calendar"></span>
                            </button>
                        </div>
                        <div class="item">
                            <button>
                                <span class="glyphicon glyphicon-stats"></span>
                            </button>
                        </div>
                        <div class="item">
                            <button>
                                <span class="glyphicon glyphicon-download-alt"></span>
                            </button>
                        </div>
                    </div>
                    <div id="hamburger">
                        <button>
                            <span class="glyphicon glyphicon-menu-hamburger"></span>
                        </button>
                    </div>
                    <div id="hamburger-menu">
                        <ul class="collapse-menu">
                            <li><a href="#">Messages</a></li>
                            <li><a href="#">Calendar</a></li>
                            <li><a href="#">Stats</a></li>
                            <li><a href="#">Download Reports</a></li>
                        </ul>
                    </div>
                </div>
                );

    }

}

export default Navigation;
