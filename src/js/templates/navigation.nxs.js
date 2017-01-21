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
                            <li><Link to={`/`}>Messages</Link></li>
                        </ul>
                    </div>
                </div>
                );

    }

}

export default Navigation;
