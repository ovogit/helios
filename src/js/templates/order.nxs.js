import React from 'react';
import {Link} from 'react-router';
import Bulk from './order/bulk';

//TODO 
// trying to make an event emitter
//import EventEmitter from 'events';


class Order extends React.Component {

    constructor(){
        super();
    }
    render(){
        return (
                <div>
                    <div class="heading">
                        <b>Bulk Order</b><em>1/17/2017</em>
                    </div>
                    <div class="__block bulkOrder">
                        <Bulk />
                    </div>
                </div>
                );

    }

}

export default Order;
