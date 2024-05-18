import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import { getCart, placeOrder } from "./helper";
import noItemsImg from "../../assets/images/no-item-found.png";
import checkImg from "../../assets/images/check.webp";
import Toast from "../../components/Toast";
import { toast } from "react-toastify";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    if (!cart.length) {
      getCartList();
    }
    const newTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const getCartList = async () => {
    await getCart().then((response) => {
      console.log("RESS", response);
      if (response.status === 200) {
        // bookList = response.data.data;
        // console.log("TOTTT", total);
        setCart(response.data.data);

        response.data.data.map((obj) => {
          let temp = total;
          let price = obj.quantity * obj.price;
          setTotal(price + temp);
          console.log("TOTTT", total, price);
        });
      } else {
        // toast.error(response.data.message);
      }
    });
  };

  const updateQuantity = (index, delta) => {
    const newCart = [...cart];
    newCart[index].quantity += delta;
    if (newCart[index].quantity < 1) {
      newCart[index].quantity = 1;
    }
    setCart(newCart);
  };

  const onCheckOut = async () => {
    let data = {
      order: cart,
      total,
    };

    await placeOrder(data).then((response) => {
      console.log("RESS", response);
      if (response.status === 200) {
        setCheckout(true);
        console.log(response.data.message);
        toast.success(response.data.message);
      } else {
        toast.error(response.data?.message || "Something went wrong!");
      }
    });
  };

  const cartData = () => {
    return (
      <div className="w-full h-[90vh] flex justify-center items-center">
        {cart.length ? (
          <div className="flex w-[80%] justify-center shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {cart.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  >
                    <div className="flex w-2/5">
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{obj.name}</span>
                        <span className="text-red-500 text-xs">
                          {obj.author}
                        </span>
                        <a
                          href="/"
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <svg
                        onClick={(e) => updateQuantity(index, -1)}
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>

                      {/* <input
                          onChange={(e) => quantityOnChange(e, obj)}
                          className="mx-2 border text-center w-8"
                          type="text"
                          defaultValue={obj.quantity}
                        /> */}
                      <p className="mx-2 border text-center w-8">
                        {obj.quantity}
                      </p>

                      <svg
                        onClick={(e) => updateQuantity(index, 1)}
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      {obj.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      {Number(obj.price) * Number(obj.quantity)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div id="summary" className="w-1/4 bg-gray-300 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex flex-col justify-between">
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">
                    Items {cart.length}
                  </span>
                  <span className="font-semibold text-sm">Rs. {total}</span>
                </div>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>Rs. {total}</span>
                  </div>
                  <button
                    onClick={() => onCheckOut()}
                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                  >
                    Checkout
                  </button>
                </div>
              </div>
              {/* <div>
                  <label className="font-medium inline-block mb-3 text-sm uppercase">
                    Shipping
                  </label>
                  <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - $10.00</option>
                  </select>
                </div>
                <div className="py-10">
                  <label
                    for="promo"
                    className="font-semibold inline-block mb-3 text-sm uppercase"
                  >
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promo"
                    placeholder="Enter your code"
                    className="p-2 text-sm w-full"
                  />
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                  Apply
                </button> */}
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full justify-center items-center">
            <img src={noItemsImg} alt="" />
            <p className="text-white text-lg my-2 font-bild">
              No items found in cart. Please add some items to cart!
            </p>
          </div>
        )}
      </div>
    );
  };

  const checkOutData = () => {
    return (
      <div className="flex flex-col w-full h-[90vh] justify-center items-center">
        <img src={checkImg} alt="" />
        <p className="text-white text-lg my-2 font-bild">
          Order has placed successfully!!
        </p>
      </div>
    );
  };

  return (
    <div className="bg-black h-[100vh] w-full">
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%]">
          {/* <div className="border-b-[#979797] border-b-2"> */}
          <NavBar />
          {/* </div> */}
          {checkout ? checkOutData() : cartData()}
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default Cart;
