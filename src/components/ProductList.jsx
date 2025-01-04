import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-5 gap-y-10">
            {
                loading ?
                    <h2 className="text-2xl font-bold">Loading...</h2>
                    :
                    error ?
                        <h2 className="text-2xl font-bold">Error: {error.message}</h2>
                        :
                        products.length ?
                            products?.map(product => <ProductItem key={product.id} data={product} />)
                            :
                            <h2 className="text-2xl font-bold">No Products Found!</h2>
            }
        </section>
    )
}

export default ProductList;