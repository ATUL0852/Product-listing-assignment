import "./ProductCard.css";
import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div className="product-image">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    style={{ objectFit: "contain" }}
                    priority={product.id <= 4}
                />
            </div>

            <div className="product-content">

                <span className="category">
                    {product.category}
                </span>

                <h3>{product.title}</h3>

                <div className="rating">
                    <span className="stars">⭐ {product.rating.rate}</span>

                    <span className="reviews">
                        ({product.rating.count} Reviews)
                    </span>
                </div>

                <p className="price">
                    ${product.price.toFixed(2)}
                </p>

                <p className="description">
                    {product.description.length > 100
                        ? product.description.substring(0, 100) + "..."
                        : product.description}
                </p>

            </div>
        </div>
    );
}