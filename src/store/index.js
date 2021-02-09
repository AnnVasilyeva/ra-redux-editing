import { createStore, combineReducers } from "redux";
import serviceListReducer from '../reducers/ServiceListReducer';
import serviceAddReducer from '../reducers/ServiceAddReducer';

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
export default store;