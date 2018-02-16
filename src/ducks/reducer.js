
const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const COMPLETE = 'COMPLETE'
const DELETE = 'DELETE'

let initialState = {
    newItems: [],
    completeItems: []

}

export function addNewItem(item){
    console.log(item, 'this is the item')
    return {
        type: ADD_NEW_ITEM,
        payload: item
    }
}

export function completeItem(item){
    
    return{
        type: COMPLETE,
        payload: item
    }
}

export function deleteItem(item){
    return {
        type: DELETE,
        payload: item
    }
}




function reducer(state = initialState, action){
    switch(action.type){
        case ADD_NEW_ITEM:
            return Object.assign({}, state, {newItems: [action.payload, ...state.newItems] });
        case COMPLETE:
            return Object.assign({}, state, {completeItems: [action.payload, ...state.completeItems], newItems: state.newItems.filter( e => e !== action.payload) });
        case DELETE:
            return Object.assign({}, state, {newItems: state.newItems.filter( e => e !== action.payload)})
    }
    return state
    
}

export default reducer