import React from 'react';
import Input from '../components/input';


class Item extends React.Component {

    constructor(){
        super();
        this.inputs = [];
    }
    render(){
        for (var i = 0, len = this.props.data.length; i < len; i++) {
            this.inputs.push(<Input label={this.props.data[i].type} id={this.props.data[i].id}/>);
        }
        return (
                <div>
                <legend> {this.props.legend}</legend>
                {this.inputs}
                </div>
                );

    }

}

export default Item;
