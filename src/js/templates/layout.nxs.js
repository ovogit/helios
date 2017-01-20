import React from 'react';
import Navigation from './navigation.nxs';
import Sidebar from './sidebar.nxs';
import Order from './order.nxs';

class Layout extends React.Component {

    constructor(){
        super();
    }

    render(){
        return (
                <div id="wrapper">
    <Sidebar />
        <div id="main">
    <Navigation />
    <div id="navSpacer">
                </div>
                <div id="content">
                    <div id="left">
                        <div class="heading">
                            <b>Whats Going on this week?</b><em><span class="glyphicon glyphicon-calendar"></span></em>
                        </div>
                        <div class="days">
                            <div class="day sunday active">
                                <button name="sun" type="button" class="dayButton">     
                                    sun
                                </button>
                            </div>
                            <div class="day monday">
                                <button name="sun" type="button" class="dayButton">     
                                    mon
                                </button>
                            </div>
                            <div class="day tuesday">
                                <button name="sun" type="button" class="dayButton">     
                                    tue
                                </button>
                            </div>
                            <div class="day wednesday">
                                <button name="sun" type="button" class="dayButton">     
                                    wed
                                </button>
                            </div>
                            <div class="day thursday">
                                <button name="sun" type="button" class="dayButton">     
                                    thu
                                </button>
                            </div>
                            <div class="day friday">
                                <button name="sun" type="button" class="dayButton">     
                                    fri
                                </button>
                            </div>
                            <div class="day saturday">
                                <button name="sun" type="button" class="dayButton">     
                                    sat
                                </button>
                            </div>
                        </div>

                    {this.props.children}
                        </div> 
                    <div id="right">
                        <div class="heading2">
                            Messages
                        </div>
                        <div class="warning">
                            <span class="glyphicon glyphicon-warning-sign"></span>
                            <b>
                                testing
                            </b>
                        </div>
                    </div> 
                    </div>
                    </div>
                </div>
                );

    }

}
export default Layout;
