// COLLECTION
import nxsCollection from '../collection.nxs.js';
import dispatcher from "../dispatcher";
import $ from "jquery";

class Collection extends nxsCollection {

    constructor( ){
        super( );
        this.data = [];
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
