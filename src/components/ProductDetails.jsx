
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../utils/store/slices/cartSlice";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsSlice.products);

  useEffect(() => {
    const filteredProduct = products.find(
      (product) => product.id.toString() === productId
    );
    setProduct(filteredProduct);
  }, [productId]);

  function handleAddToCart() {
    if (product && product.price) {
      dispatch(addToCart(product));
    }
  }
  return (
    <section className="mt-10 min-[500px]:mt-20 min-[700px]:mt-28 px-5 flex flex-col min-[700px]:flex-row items-center min-[700px]:items-start gap-x-5">
      <figure>
        <img
          src={product?.images[0]}
          className="max-w-[300px] min-w-[300px] min-[850px]:max-w-[400px] min-[850px]:min-w-[400px] rounded-xl"
        />
      </figure>
      <section>
        <h1 className="text-3xl min-[500px]:text-4xl font-bold">
          {product?.title}
        </h1>
        <p className="mt-3 font-semibold">
          Rating: {product?.rating.toFixed(1)}
        </p>
        <p className="flex items-center gap-x-2 mt-3 text-[22px] min-[500px]:text-2xl font-semibold">
          ₹ {product?.price}
        </p>
        <section className="mt-5 font-semibold text-[20px]">
          Description:
          <ul className="mt-2 ml-5 block text-[18px] space-y-2 max-w-[600px]">
            {product?.description.split(". ").map((sentence) => (
              <li
                key={Math.floor(Math.random() * 1000000)}
                className="text-[15px] min-[500px]:text-base list-disc"
              >
                {sentence}
              </li>
            ))}
          </ul>
        </section>
        <button
          onClick={handleAddToCart}
          className="mt-7 font-semibold text-[16px] min-[500px]:text-lg bg-purple-700 text-white py-2 px-4 rounded-lg"
        >
          Add to Cart
        </button>
      </section>
    </section>
  );
}

export default ProductDetails;
