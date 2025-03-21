import { combineReducers, createStore } from "redux";
import { productReducer } from "../reducers/productReducer";
import { categoryReducer } from "../reducers/categoryReducer";
import { activityReducer } from "../reducers/activityReducer";
import { socialmediaReducer } from "../reducers/socialmediaReducer";
import { newsReducer } from "../reducers/newsReducer";

const configureStore = () => {
    return createStore(combineReducers({ products: productReducer, categories: categoryReducer, activities: activityReducer, socialmedia: socialmediaReducer, news: newsReducer }))
}

export default configureStore;