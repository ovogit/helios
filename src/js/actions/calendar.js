import dispatcher from '../dispatcher';


export function createEvent(text){
    dispatcher.dispatch({
        type: "CREATE_EVENT",
    });
}

export function loadEvents(){
    dispatcher.dispatch({
        type: "LOAD_EVENTS"
    });
}
