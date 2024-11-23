import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetail.css'; // Optional: Create a CSS file for styling

const ProductDetail = () => {
    const location = useLocation();
    const { product } = location.state; // Get the product data passed from the previous page

    const [review, setReview] = useState('');

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle review submission logic here
        console.log('Review submitted:', review);
        setReview(''); // Clear the review input after submission
    };

    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            <img src={require(`${product.image}`)} alt={product.title} />
            <p>Price: R$ {product.price}</p>
            <div className="product-description">
                <h3>Description</h3>
                <p>Details about the product go here.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Submit a Review</h3>
                <textarea
                    value={review}
                    onChange={handleReviewChange}
                    placeholder="Write your review here..."
                    required
                />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    
    );
};

export default ProductDetail;
