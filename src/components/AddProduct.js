import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from '../store/cartSlice';

function AddProduct() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        category: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch action to add the product
        dispatch(add(formData));
        // Clear the form
        setFormData({
            title: '',
            price: '',
            category: '',
            image: ''
        });
    };

    return (
        <div>
            <h2>Add a Product</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
                <label>Price:</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange} />
                <label>Category:</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} />
                <label>Image URL:</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
