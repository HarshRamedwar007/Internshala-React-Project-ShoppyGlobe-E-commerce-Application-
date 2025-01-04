// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react/prop-types */
// import { useEffect } from "react";
// import ProductItem from "./ProductItem";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addProducts } from "../utils/store/slices/productsSlice";
// import useFetch from "../utils/hooks/useFetch";


// function ProductList({ filteredProducts, setFilteredProducts }) {
//     const products = useSelector(state => state.productsSlice.products);
//     const dispatch = useDispatch();
//     const { data, loading, error } = useFetch("https://dummyjson.com/products");

//     useEffect(() => {
//         if (products.length === 0 && !loading) {
//             localStorage.setItem("products", JSON.stringify(data?.products));
//             dispatch(addProducts(data?.products));
//         }
//     }, [data]);

//     useEffect(() => {
//         setFilteredProducts(products);
//     }, [products]);
 

//     return (
//         <section className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-5 gap-y-10">
//             {
//                 filteredProducts.length ?
//                     filteredProducts?.map(product => <ProductItem key={product.id} data={product} />)
//                     :
//                     <h2 className="text-2xl font-bold">No Products Found!</h2>
//             }
//         </section>
//     )
// }

// export default ProductList;
 
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addProducts } from "../utils/store/slices/productsSlice";
// import ProductItem from "./ProductItem";
// import useFetch from "../utils/hooks/useFetch";

// function ProductList() {
//     const products = useSelector(state => state.productsSlice.products);
//     const dispatch = useDispatch();
//     const { data, loading, error } = useFetch("https://dummyjson.com/products");

//     useEffect(() => {
//         if (data && !loading) {
//             dispatch(addProducts(data.products));
//         }
//     }, [data, loading, dispatch]);

//     return (
//         <section className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-5 gap-y-10">
//             {
//                 products.length ?
//                     products?.map(product => <ProductItem key={product.id} data={product} />)
//                     :
//                     <h2 className="text-2xl font-bold">No Products Found!</h2>
//             }
//         </section>
//     )
// }

// export default ProductList;

// import { useState, useEffect } from "react";
// import ProductItem from "./ProductItem";

// function ProductList() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch("https://dummyjson.com/products")
//             .then(response => response.json())
//             .then(data => setProducts(data.products))
//             .catch(error => setError(error))
//             .finally(() => setLoading(false));
//     }, []);

//     return (
//         <section className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-5 gap-y-10">
//             {
//                 loading ?
//                     <h2 className="text-2xl font-bold">Loading...</h2>
//                     :
//                     error ?
//                         <h2 className="text-2xl font-bold">Error: {error.message}</h2>
//                         :
//                         products.length ?
//                             products?.map(product => <ProductItem key={product.id} data={product} />)
//                             :
//                             <h2 className="text-2xl font-bold">No Products Found!</h2>
//             }
//         </section>
//     )
// }

// export default ProductList;
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