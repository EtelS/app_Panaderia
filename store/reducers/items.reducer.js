import {FILTERED_ITEMS, SELECT_iTEM} from '../actions/items.actions';

import {articulos} from '../../data/articulos';

const initialState={
    items: articulos,
    filteredItem: [],
    selected: null,

}

const ItemReducer = (state= initialState, action) =>{
    switch(action.type){
        case SELECT_iTEM:
            return{
                ...state,
                selected: state.items.find(item =>item.id === action.itemID)
            }
        case FILTERED_ITEMS:
            return{
                ...state,
                filteredItem: state.items.filter(item => item.catid === action.categoryID)
            }
        default:
            return state
    }
}

export default ItemReducer;