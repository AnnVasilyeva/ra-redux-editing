import {CHANGE_SERVICE_FIELD, SELECT_SERVICE, VIEW_CANCEL} from '../actions/actionTypes';

const initialState = {
    id: null,
    name: '',
    price: '',
    viewCancel: false,
};
export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case VIEW_CANCEL:
            return {...state, viewCancel: action.payload}
        case SELECT_SERVICE:
            return {...state, id: action.payload}
        default:
            return state;
    }
}