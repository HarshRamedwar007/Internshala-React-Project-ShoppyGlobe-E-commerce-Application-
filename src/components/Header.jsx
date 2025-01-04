import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const cartItems = useSelector(state => state.cartSlice.cartItems);

    return (
        <header className="fixed top-0 shadow-lg rounded-b-[30px] bg-white z-10 w-full flex items-center justify-between px-5 min-[500px]:px-10">
            <figure>
                <Link to="/">
                    <img className="w-32 min-[500px]:w-52" src="/App Logo.png" />
                </Link>
            </figure>

            <nav>
                <ul className="flex gap-x-6 min-[500px]:-mt-5">
                    <Link to="/"><li className="font-semibold text-lg">Home</li></Link>
                    <Link to="/cart">
                        <li className="relative font-semibold">
                            <span className="text-lg text-purple-900">Cart</span>
                            <span className='absolute -top-2 -right-3 text-lg'>{cartItems.length}</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;