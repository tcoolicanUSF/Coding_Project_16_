import React, { useState } from 'react'
import {ProductList} from './ProductList.jsx'
import {ProductItem} from './ProductItem.jsx'

function AddProductForm( {onAddProduct} ) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

 const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
         name,
        price,
        description,
     };

onAddProduct(newProduct);
setName('');
setPrice('');
setDescription('');
        }
return (
    <form onSubmit={handleSubmit}>
    <label>
        Name:
    <input 
        type="text" 
        value={name} 
        onChange={(event) => setName(event.target.value)} 
                    />
    </label>
    <br/>
    <label>
        Price:
    <input 
        type="number" 
        value={price} 
        onChange={(event) => setPrice(event.target.value)} 
                    />
    </label>
    <br/>
    <label>
         Description:
    <textarea 
        value={description} 
        onChange={(event) => setDescription(event.target.value)}
     />
    </label>
    <br/>
    <button type="submit">Add Product</button>
    </form>
)}
export default AddProductForm
