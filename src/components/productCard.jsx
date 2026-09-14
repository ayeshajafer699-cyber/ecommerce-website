import { Link } from "react-router-dom";

export default function ProductCard({ products }) {
    return (
        <div className="product-card" >
            <img className="product-card-image" src={products.image} alt={products.name}  />
            <div className="product-card-content">
                <h3 className="product-card-name">{products.name}</h3>
                <p className="product-card-price">${products.price}</p>
            </div>

            <div className="product-card-actions">
                <Link className="btn btn-secondary">View Details</Link>
                <button className="btn btn-primary">Add To Cart</button>
            </div>
        </div>
    );
}