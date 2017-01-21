import React from 'react';
import Item from './item';
import bulkCol from '../../collections/bulk.js';
import _ from 'underscore';


class Bulk extends React.Component {

    constructor(){
        super();
        this.collection = bulkCol;
        this.data = this.collection.getAll();
        this.products = [];
        for (var i = 0, len = this.data.length; i < len; i++) {
            this.pname = this.data[i].type;
            this.pdata = this.data[i].data;
            this.products.push(<Item legend={this.pname} data={this.pdata}/>);
            
        }
    }
    render(){
        return (
                <div>
                {this.products}
                </div>
                );

    }

}

export default Bulk;
