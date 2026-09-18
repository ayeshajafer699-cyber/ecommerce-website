import { getProduct } from "../data/products";
import  ProductCard  from "../components/productCard";

export default function Home() {

    const products = getProduct();

    return <div className="page">
        <div className="home-page">
            <h1 className="home-title">
                Welcome To ShopHub
            </h1>
            <p className="home-subtitle">
                Discover amazing products at great prices
            </p>
        </div>
        <div className="container">
            <h2 className="page-title">Products</h2>
            <div className="products-grid">
                {products.map((products) => (
                    <ProductCard products = {products} key={products.id} />
                ))}
            </div>
        </div>
    </div>;
} 