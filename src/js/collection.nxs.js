import { EventEmitter } from "events";

export default class nxsCollection extends EventEmitter {

    constructor(json){
        super();
        this.collection = json;
    }

    static getAll(){
        return this.collection;
    }

}

