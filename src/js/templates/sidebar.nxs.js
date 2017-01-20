import React from 'react';


class Sidebar extends React.Component {

    constructor(){
        super();
    }
    render(){
        return (
          <div id="sidebar">
              <div id="avatar"></div>
                <div id="sidebarNavigation">
                    <div class="item"><a href="#">order</a></div>
                    <div class="item"><a href="#">sales</a></div>
                    <div class="item"><a href="#">dashboard</a></div>
                    <div class="item"><a href="#">messages</a></div>
                    <div class="item"><a href="#">calendar</a></div>
                </div>
            </div>
                
                );

    }

}

export default Sidebar;
