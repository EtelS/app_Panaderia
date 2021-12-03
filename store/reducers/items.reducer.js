import {articulos} from '../../data/articulos'

const initialState={
    items: articulos,
    filteredItems: [],
    selected:null,

}

const ItemReducer = (state= initialState, action) =>{
    return state;
}

export default ItemReducer;