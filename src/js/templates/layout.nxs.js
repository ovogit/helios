import React from 'react';
import Dashboard from './dashboard.nxs';
import Navigation from './navigation.nxs';

class Layout extends React.Component {

    constructor(){
        super();
    }

    render(){
        return (
<div class="container container-fluid"> 
    <Navigation />
    {this.props.children}
</div>
                );

    }

}
export default Layout;
