import { SELECT_CATEGORY } from '../actions/category.actions';
import {categorias} from '../../data/categories'

const initialState={
    categories: categorias,
    selected: null,

}

const CategoryReducer = (state= initialState, action) =>{
    switch(action.type){
        case SELECT_CATEGORY:
            return{
                ...state,
                selected:action.categoryID,
            };
        default:
            return state;
}
}

export default CategoryReducer;