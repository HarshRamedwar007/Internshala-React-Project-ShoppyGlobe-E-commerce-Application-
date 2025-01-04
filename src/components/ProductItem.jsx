import { useDispatch, useSelector } from "react-redux";
import { addToCart,   } from "../utils/store/slices/cartSlice";
import { Link } from "react-router-dom";

function ProductItem({ data }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartSlice.cartItems);

    function handleAddToCart(e) {
        dispatch(addToCart(data));
    }

    return (
        <article className="hover:border-2 hover:border-purple-700 border-white border-2 shadow-xl shadow-slate-400 rounded-md px-4 pt-2 pb-4">
            <figure title="Click on title to view more details" className="flex justify-center">
                <Link to={`/product-details/${data?.id}`}>
                    <img className="w-[250px]" src={data?.thumbnail} alt="Product" />
                </Link>
            </figure>
            <article className="mt-3">
                <Link to={`/product-details/${data?.id}`}>
                    <h2 title={data?.title} className="text-xl font-semibold">{data?.title.length <= 25 ? data?.title : data?.title.slice(0, 25) + '...'}</h2>
                </Link>
                <p className="text-[17px]">{data?.rating.toFixed(1)} </p>
                <p className="mt-2 text-[20px] font-semibold space-x-3">
                    <span>₹{data.price}</span>
                </p>
                <button
                    onClick={handleAddToCart}
                    className="mt-5 font-semibold bg-purple-700 text-white px-5 py-[7px] rounded-md"
                >
                    Add to Cart
                </button>
            </article>
        </article>
    )
}

export default ProductItem;