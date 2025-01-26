import { combineReducers, createStore } from "redux";
import { productReducer } from "../reducers/productReducer";
import { categoryReducer } from "../reducers/categoryReducer";
import { activityReducer } from "../reducers/activityReducer";
import { socialmediaReducer } from "../reducers/socialmediaReducer";

const configureStore = ()=>{
    return createStore(combineReducers({products : productReducer, categories : categoryReducer, activities: activityReducer, socialmedia: socialmediaReducer}))
}

export default configureStore;