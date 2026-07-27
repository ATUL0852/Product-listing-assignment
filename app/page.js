"use client";

import { useEffect, useState } from "react";
import { getProductsList } from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetchProducts();
  }, []);


  async function fetchProducts() {
    try {
      const data = await getProductsList();
      setProducts(data);
    } catch (err) {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <main className="container">
        <h2 className="loading">Loading products...</h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container">
        <div className="error-box">
          <h2>Something went wrong!</h2>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container">
      <h1 className="heading">Product Catalog</h1>

      <p className="total-products">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-animation"
              style={{
                animationDelay: `${index * 60}ms`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.1rem" }}>
          No Products Found for "{searchTerm}". Try a different search term.
        </h2>
      )}

    </main>
  );
}