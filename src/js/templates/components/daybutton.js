import React from 'react';


class DayButton extends React.Component {

    constructor(){
        super();
        this.eleClass = "day";
    }
    componentWillMount(){
        this.setState({active: ''});
    }
    handleClick(){
        if(this.state.active == ""){
            this.setState({active :"active"});
        }
        else {
            this.setState({active :""});
        }
    }
    render(){
        return (
                <div class={this.eleClass +" "+ this.props.day +" "+ this.state.active}>
                    <button onClick={()=>{this.handleClick()}} name={this.props.day} type="button" class="dayButton">     
                        {this.props.abbr}
                    </button>
                </div>
                );

    }

}

export default DayButton;
