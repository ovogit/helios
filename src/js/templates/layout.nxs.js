import React from 'react';
import Navigation from './navigation.nxs';
import Sidebar from './sidebar.nxs';
import Order from './order.nxs';
import DaySwitcher from './components/dayswitcher.js';

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

                    <DaySwitcher />
                        
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
