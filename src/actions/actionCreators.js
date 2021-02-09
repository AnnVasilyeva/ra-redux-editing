import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    EDIT_SERVICE,
    VIEW_CANCEL,
    SELECT_SERVICE
} from './actionTypes';

export function addService(name, price) {
    return {type: ADD_SERVICE, payload: {name, price}};
}
export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}};
}
export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function editService(id, name, price) {
    return {type: EDIT_SERVICE, payload: {id, name, price}}
}

export function viewCancel(value) {
    return {type: VIEW_CANCEL, payload: value}
}

export function selectService(id) {
    return {type: SELECT_SERVICE, payload: id}

}