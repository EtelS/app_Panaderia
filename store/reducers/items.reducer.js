import {articulos} from '../../data/categories'

const initialState={
    items: articulos,
    selected:null,

}

const ItemReducer = (state= initialState, action) =>{
    return state;
}

export default ItemReducer;