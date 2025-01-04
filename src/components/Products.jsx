 
import ProductList from "./ProductList";

function Products() {
    return (
        <section className="mt-20 min-[500px]:mt-28 px-5 min-[500px]:px-10">
            <article className="relative">
                <h1 className="text-3xl min-[500px]:text-4xl font-bold after:absolute after:w-20 after:h-[6px] after:rounded-lg after:bg-purple-700 after:-bottom-2 after:left-0">Products</h1>
            </article>
            <ProductList />
        </section>
    )
}

export default Products;