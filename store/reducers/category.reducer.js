import {categorias} from '../../data/categories'

const initialState={
    categories: categorias,
    selected:null,

}

const CategoryReducer = (state= initialState, action) =>{
    return state;
}

export default CategoryReducer;