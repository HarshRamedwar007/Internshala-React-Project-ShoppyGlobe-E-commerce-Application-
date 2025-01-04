 
import { useDispatch } from "react-redux";
import {     removeFromCart } from "../utils/store/slices/cartSlice";

function CartItem({ data }) {
    const dispatch = useDispatch();

    function handleRemoveItem(e) {
        dispatch(removeFromCart(data.id));
    }

    function handleIncrementQuantity(e) {
        dispatch(incrementItemQuantity(data.id));
    }

    function handleDecrementQuantity(e) {
        if (data.quantity === 1) {
            handleRemoveItem();
        } else {
            dispatch(decrementItemQuantity(data.id));
        }
    }

    return (
        <article className="flex flex-col min-[500px]:flex-row gap-x-5 shadow-lg max-w-[700px] rounded-lg">
            <figure>
                <img src={data?.thumbnail} className="w-52 min-[500px]:w-36 object-cover" />
            </figure>

            <article>
                <h1 className="mt-3 font-semibold text-xl">{data?.title}</h1>
                <p className="mt-5 text-[20px] font-semibold space-x-3">
                    <span>₹{data.price}</span>
                </p>
                <button
                    onClick={handleRemoveItem}
                    className="mt-3 font-semibold text-[17px] bg-purple-700 text-white py-1 px-3 rounded-sm"
                >
                    Remove
                </button>
            </article>

            <article className="min-[500px]:ml-auto mr-5 mt-4 flex flex-row min-[500px]:flex-col gap-x-3 min-[500px]:gap-y-1">
                <button onClick={handleIncrementQuantity} className="bg-purple-700 text-white rounded-md w-[60px] py-[8px]">+</button>
                <input
                    type="number"
                    value={data.quantity}
                    readOnly
                    className="ps-1 text-center rounded-md w-[60px] outline-none border-2 border-purple-700"
                />
                <button onClick={handleDecrementQuantity} className="bg-purple-700 text-white rounded-md w-[60px] py-[8px] mt-1">-</button>
            </article>
        </article>
    )
}

export default CartItem;