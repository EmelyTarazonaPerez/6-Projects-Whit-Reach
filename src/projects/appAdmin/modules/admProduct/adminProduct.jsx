import React, { useState, useReducer, useRef } from 'react';
import './adminProduct.css'

const reducer = (state, action) => {
    let newState = state
    switch (action.type) {
        case 'añadirProduct':
            newState = [...state, action.payload]
            break;

        case 'incrementar':
            newState = state.map(item =>
                (action.payload === item.id)
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item)
            break;

        case 'disminucion':
            newState = state.map(item =>
                (action.payload === item.id && item.cantidad > 1)
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item)
            break;

        case 'eliminar':
            newState = state.filter(item => action.payload !== item.id)
            console.log(newState)
            break;

        default:
            break;
    }
    return newState
}

const AdminProduct = () => {

    const ref = useRef(null);
    const initialState = []
    const [value, setValue] = useState('');
    const [element, dispatch] = useReducer(reducer, initialState)

    const methodoAdd = (value, inputRef) => {
        dispatch({
            type: 'añadirProduct',
            payload: {
                id: Math.random(),
                name: value,
                cantidad: 1
            }
        })
        setValue("")
    }

    const añadirValue = (e) => {
        setValue(e.target.value);
    }

    return (
            <section className='group_add_product'>
                <h1>Add article.</h1>
                <section>
                    <input
                        className='input_add_product'
                        ref={ref}
                        value={value}
                        onChange={añadirValue}>
                    </input>
                    <button
                        className='button_add_product'
                        onClick={() => {
                            ref.current.focus()
                            methodoAdd(value)
                        }} >Ok
                    </button>
                </section>
                <ol className='list_product'>
                    {element.map((item, index) => (
                        <div className='box_item'>
                            <div className='box_detail'>
                                <li className='name_item'>{item.name}</li>
                                <div className='box_cantidad'>
                                    <span className='cantidad_item'>( quantity: {item.cantidad} )</span>
                                </div>
                            </div>

                            <div className='box_button'>
                                <button className='button_item' onClick={() => dispatch({ type: 'incrementar', payload: item.id })}>+</button>
                                <button className='button_item' onClick={() => dispatch({ type: 'disminucion', payload: item.id })}>-</button>
                                <button className='button_item' onClick={() => dispatch({ type: 'eliminar', payload: item.id })}>x</button>
                            </div>
                        </div>
                    ))}


                </ol>
            </section>
    );
}

export default AdminProduct;
