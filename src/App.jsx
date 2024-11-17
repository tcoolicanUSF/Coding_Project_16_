import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  const [products] = useState([
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
  ]);
  return (
    <div>
      <h1>Helmet Description App</h1>
      <ProductList products={products} />
      <AddProductForm />
      <h3>Hello</h3>
    </div>
  );
};
export default App;
