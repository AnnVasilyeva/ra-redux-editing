import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeServiceField, addService, editService, viewCancel} from '../actions/actionCreators';

export default function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();
    const isCancel = useSelector(state => state.serviceAdd.viewCancel);
    const selectedId = useSelector(state => state.serviceAdd.id)

    const handleChange = event => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value));
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(isCancel) {
            dispatch(editService(selectedId, item.name, item.price));
            dispatch(viewCancel(false))
        } else {
            dispatch(addService(item.name, item.price));
        }

        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''));
    }

    const handleReset = () => {
        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''));
        dispatch(viewCancel(false));
    }

    return ( <form className='service-add-form' onSubmit={handleSubmit} onReset={handleReset}>
        <input name='name' onChange={handleChange} value={item.name} />
        <input name='price' onChange={handleChange} value={item.price} />
        {isCancel && <button type='reset'>Cancel</button>}
        <button type='submit'>Save</button>
    </form>)}
