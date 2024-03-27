import React, { useEffect, useState } from "react";
import { useDispatch,} from "react-redux";
import { add } from '../store/cartSlice';

function Products() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({ category: '', priceRange: '', searchTerm: '' });
    
    
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            setFilteredProducts(data); 
        }

        fetchProduct();
    }, []);

 const handleAdd = (product) => {
        dispatch(add(product));
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
    };

    useEffect(() => {
        const { category, priceRange, searchTerm } = filters;
        let filtered = [...products];
        if (category !== '') {
            filtered = filtered.filter(product => product.category === category);
        }
        if (priceRange !== '') {
            filtered = filtered.filter(product => {
                const price = parseFloat(product.price);
                if (priceRange === 'under10') {
                    return price < 10;
                } else if (priceRange === '10to20') {
                    return price >= 10 && price <= 20;
                } else if (priceRange === 'over20') {
                    return price > 20;
                }
                return true;
            });
        }
        if (searchTerm !== '') {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredProducts(filtered);
    }, [filters, products]);

    return (
        <div className="productsWrapper">
            <div>
                <select onChange={(e) => handleFilterChange('category', e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                </select>
                <select onChange={(e) => handleFilterChange('priceRange', e.target.value)}>
                    <option value="">All Prices</option>
                    <option value="under10">Under $10</option>
                    <option value="10to20">$10 - $20</option>
                    <option value="over20">Over $20</option>
                </select>
                <input type="text" value={filters.searchTerm} onChange={(e) => handleFilterChange('searchTerm', e.target.value)} placeholder="Search products..." />
            </div>
            {filteredProducts.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">Add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
