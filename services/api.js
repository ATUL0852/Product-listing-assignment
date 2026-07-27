
export async function getProductsList() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        return products;
    } catch (error) {
        throw error;
    }
}