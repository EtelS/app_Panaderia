import {combineReducers, createStore} from 'redux';

import CategoryReducer from './reducers/category.reducer';
import ItemReducer from './reducers/items.reducer';

const RootReducer= combineReducers({
    categories: CategoryReducer,
    items: ItemReducer
});

export default createStore(RootReducer);