//Task 4: Create ProductItem component to display individual product details
function ProductItem({product}) { 
    return ( 
<li>
    {product.name}
    {product.price}
    {product.description}
</li> )}
export default ProductItem
