import React from 'react';


class Item extends React.Component {

    constructor(){
        super();
    }
    render(){
        return (
                <div>
                            <legend>SCONES</legend>
                            <div class="input-group active">
                                <label>
                                    Sweet
                                </label>
                                    <input type="number" class="active" />
                                    <button type="button">
                                        <span class="glyphicon glyphicon-minus"></span>
                                    </button>

                                    <button>
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </button>

                            </div>
                            <div class="input-group">
                                <label>
                                    Savory
                                </label>
                                <input type="number" />
                                    <button type="button">
                                        <span class="glyphicon glyphicon-minus"></span>
                                    </button>

                                    <button>
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                            </div>
                
                </div>
                );

    }

}

export default Item;
