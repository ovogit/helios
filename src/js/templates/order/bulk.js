import React from 'react';
import Item from './item';
import bulkCol from '../../collections/bulk.js';


class Bulk extends React.Component {

    constructor(){
        super();
        this.data = bulkCol;
        console.log(this.data);
    }
    render(){
        return (
                <div>
                    <Item />
                </div>
                );

    }

}

export default Bulk;
