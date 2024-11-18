import { useState } from 'react'
import { ProductList } from './components/ProductList.jsx'
import { AddProductForm } from './components/AddProductForm.jsx'
import './App.css'


  const products =[
    {
      id: 1,
      name: 'Riddell Axiom',
      price: 750.00,
      description: 'A clearer vison, A truer fit, A smarter helmet.',
    },
    {
      id: 2,
      name: 'Riddell Speedflex',
      price: 499.99,
      description: 'State-of-the-art protection. Backed by extensive research and data from our millions of on-field impacts.',
    },
    {
      id: 3,
      name: 'Schutt F7',
      price: 499.99,
      description: 'Not only does the Schutt F7 Collegiate Football Helmet excel in safety, but it also prioritizes player comfort.',
    },
  ];
  function App() {
    const [products, setProducts] = useState(products)
    const handleAddProduct = (newProduct) => {
      setProducts([...products, newProduct])
    };  
 return (
    <>
      <ProductList products={products}/>
      <br/>
      <AddProductForm onAddProduct={handleAddProduct}/>
    </> )}
  export default App
