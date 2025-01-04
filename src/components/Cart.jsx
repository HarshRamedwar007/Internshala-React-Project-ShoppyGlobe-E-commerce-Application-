import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
    const cartItems = useSelector(state => state.cartSlice.cartItems);
 
    return (
        <section className="mt-20 min-[500px]:mt-28 px-5">
            <article className="relative">
                <h1 className="text-3xl min-[500px]:text-4xl font-bold after:absolute after:w-12 after:h-[6px] after:rounded-lg after:bg-purple-700 after:-bottom-2 after:left-0">Cart</h1>
            </article>
            {
                cartItems.length ?
                    <section className="mt-8 min-h-[324px] flex flex-col min-[850px]:flex-row items-center min-[850px]:justify-center gap-y-10 min-[850px]:gap-x-5">
                        { /* Cart Items */}
                        <section className="order-2 min-[850px]:order-1 space-y-2">
                            {
                                cartItems?.map(item => <CartItem key={item?.id} data={item} />)
                            }
                        </section>
                    
                     </section>
                    :
                    // In case cart is empty
                    <section className="mt-10 mb-12 flex flex-col items-center">
                        <h1 className="mt-5 text-5xl font-bold">Cart is Empty !</h1>
                        <h1 className="mt-5 text-2xl font-bold">Your cart is currently empty.</h1>
                        <Link to="/">
                            <button className="bg-purple-700 text-white py-2 px-4 rounded-md mt-10 text-lg min-[400px]:text-xl font-semibold">Continue Shopping</button>
                        </Link>
                    </section>
            }
        </section>
    )
}

export default Cart;