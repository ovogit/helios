import React from 'react';


class Input extends React.Component {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log(e);
    }
    render(){
        return (
                <div class="input-group">
                    <label>
                    {this.props.label}
                    </label>
                    <input type="number" name={this.props.id} />
                        <button type="button" onClick={()=> {this.handleClick('-')}}>
                            <span class="glyphicon glyphicon-minus"></span>
                        </button>

                        <button onClick={()=>{this.handleClick('+')}}>
                            <span class="glyphicon glyphicon-plus"></span>
                        </button>
                </div>
                );

    }

}

export default Input;
