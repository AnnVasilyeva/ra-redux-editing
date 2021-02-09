import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {changeServiceField, removeService, selectService, viewCancel} from '../actions/actionCreators';


export default function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices([...services, ...items]);
    }, []);

    const handleRemove = id => {
        dispatch(removeService(id));
    }

    const handleEdit = (id, name, price) => {
        dispatch(changeServiceField('name', name));
        dispatch(changeServiceField('price', price));
        dispatch(selectService(id));
        dispatch(viewCancel(true));
    }

    const handleChange = (filter) => {
        setFilter(filter);
        setServices(items.filter(e => {
            const name = e.name.toLowerCase();

            if(name.indexOf(filter.toLowerCase().trim()) !== -1) {
                return true;
            }
            return false;
        }))

    }

    return (
        <>
            <div className='filter'>
                <h3>Filter:</h3>
                <input name='filter' type='text' onChange={(e) => handleChange(e.target.value)} value={filter}/>
            </div>
            <ul className='service-list'>
                {services.map(o => <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={() => handleEdit(o.id, o.name, o.price)}>&#9998;</button>
                    <button onClick={() => handleRemove(o.id)}>✕</button>
                </li>)}
            </ul>
        </>
    )
}