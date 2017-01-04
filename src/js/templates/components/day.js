import React from 'react'

export default class Day extends React.Component {
    constructor( props ){
        super();
    }

    render(){
        const { day, data } = this.props;
        return (
                <div class={data ? 'nxsDay has-todos' : 'nxsDay'}>
                { day }
                </div>
               );
    }
}


    //render(){
        //const listItems = list.map(( item ) => {
            //return <li>{item}</li>
        //});
        //return (
                //<div>
                    //{day}<br />
                    //<em>things to do</em>
                    //<ul>
                        //{listItems}
                    //</ul>
                //</div>
               //);
    //}
