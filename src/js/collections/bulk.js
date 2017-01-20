// COLLECTION
import nxsCollection from '../collection.nxs.js';
import dispatcher from "../dispatcher";
import $ from "jquery";

class Collection extends nxsCollection {

    constructor( ){
        super( );
        this.data = [
        { 
            'type': 'scones',
            'data' 
                : [{ 'id': 0, 'type':'sweet', 'par_order':12, 'last_order':4 },
                  { 'id': 1, 'type':'savor', 'par_order':14, 'last_order':5 }]
        },
        { 
            'type': 'muffins',
            'data' 
                : [
                    { 'id': 2, 'type':'blueberry', 'par_order':12, 'last_order':4 },
                    { 'id': 3, 'type':'pumpkin', 'par_order':14, 'last_order':5 },
                    { 'id': 4, 'type':'specialty', 'par_order':14, 'last_order':5 },
                ]
        },
        { 
            'type': 'cookies',
            'data' : 
                [
                    { 'id': 5, 'type':'chocolate chip', 'par_order':12, 'last_order':4 },
                    { 'id': 6, 'type':'oatmeal raisin', 'par_order':14, 'last_order':5 },
                    { 'id': 7, 'type':'snickerdoodle', 'par_order':14, 'last_order':5 },
                ]
        },
        ];
    }

    getAll() {
        return this.data;
    }
    loadEvents(){
        let request = $.ajax({
            type: 'GET',
            url: '/cgi-bin/n.py'
        });
        request.then((data)=>{
            this.data = data;
            this.emit("change");
        });
    }

    handleActions(action){
        //switch (action.type) {
            //case 'CREATE_EVENT':{
                //this.createEvent(action.text);
                //break;
            //}
            //case 'LOAD_EVENTS':{
                //this.collection = this.loadEvents();
                //break;
            //}
        //}//end switch
    }

}//end class

const bulkCol = new Collection();
dispatcher.register(bulkCol.handleActions.bind(bulkCol));

export default bulkCol;
