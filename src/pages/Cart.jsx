import { useState } from "react";

export default function Cart({ cartItems }) {
  const [isNowActive, setIsNowActive] = useState(true);
  const [isLaterActive, setIslaterActive] = useState(false);
  const isCartEmpty = cartItems.length === 0;
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const handleNowClick = () => {
    setIsNowActive(true);
    setIslaterActive(false);
  };

  const handleLaterClick = () => {
    setIsNowActive(false);
    setIslaterActive(true);
  };

  return (
    <>
      <main className="px-[20px]">
        <div className="cart-container max-w-[1200px] mt-[5.5%] mx-[8%]">
          <div className="cart-title p-2 border-b-[1px]">
            <h1 className="text-black pl-2 border-l-4 border-black">
              shopping cart
            </h1>
          </div>
          {!isCartEmpty ? (
            <div className="cart-main flex justify-between mt-[5%]">
              <div className="left flex flex-col items-center gap-4">
                <div className="cart-items flex flex-col gap-8 text-black pb-4 border-b-[1px]">
                  {cartItems.map((item) => (
                    <div key={item.id} className="item w-[500px]">
                      <div className="item-top flex justify-between items-start">
                        <div className="item-img h-[105px] w-[105px] border-[1px] border-[rgb(239,242,243)] hover:cursor-pointer">
                          <img
                            src={item.image}
                            alt=""
                            className="object-fill h-[100%] w-[100%]"
                          />
                        </div>
                        <button className="item-delete-btn bg-[rgb(237,237,237)] text-xs text-black p-2 hover:cursor-pointer hover:bg-[rgb(213,213,213)]">
                          delete
                        </button>
                      </div>
                      <div className="item-bottom flex justify-between items-end mt-[15px]">
                        <select
                          value={item.amount}
                          className="item-amount text-black bg-[rgb(237,237,237)] w-[105px] h-[60px] hover:cursor-pointer hover:bg-[rgb(213,213,213)]"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                        <div className="item-total text-black">
                          {item.price}
                        </div>
                      </div>
                      <div className="item-divider mt-[5%] m-auto border-b-2 w-[80%]"></div>
                    </div>
                  ))}
                </div>
                <div className="return-btn flex items-center justify-center h-[58px] w-[360px] bg-[rgb(233,240,254)] text-xl font-bold text-[rgb(33,105,243)] rounded-sm hover:border-[1px] hover:cursor-pointer hover:border-[rgb(33,105,243)]">
                  <h1>Return to shop</h1>
                </div>
              </div>

              <div className="cart-total text-black border-[3px] w-[360px] max-h-[465.13px] h-[100%]">
                <div className="total-header flex items-center justify-between p-[16px] border-b-[3px]">
                  <div className="header-title">
                    <h1>Total</h1>
                  </div>
                  <div className="header-total text-lg text-[rgb(244,67,54)] font-bold tracking-wide">
                    {cartTotal}
                  </div>
                </div>
                <div className="total-pay-options flex flex-col gap-[2px] m-[16px]">
                  <div
                    className={`now flex  p-4 hover:cursor-pointer h-[100px] border-2  rounded-sm ${
                      isNowActive
                        ? "bg-[rgb(188,210,251)] border-[rgb(188,210,251)]"
                        : "bg-[rgb(237,237,237)] border-[rgb(237,237,237)] hover:bg-[rgb(213,213,213)] hover:border-[rgb(213,213,213)]"
                    }`}
                    onClick={() => handleNowClick()}
                  >
                    <div className="left flex items-center">
                      <button
                        className={`now-btn h-[27px] min-w-[27px] rounded-3xl ${
                          isNowActive
                            ? "active bg-[rgb(33,105,243)] border-[7px]"
                            : "inactive bg-[rgb(213,213,213)]"
                        }`}
                      ></button>
                    </div>
                    <div className="pl-4 right">
                      <h1 className="text-[rgb(86,113,125)] text-lg font-bold">
                        Pay now
                      </h1>
                      <p className="text-xs ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`later flex p-4 hover:cursor-pointer h-[180px] border-2 rounded-sm ${
                      isLaterActive
                        ? " bg-[rgb(188,210,251)] border-[rgb(188,210,251)] "
                        : " bg-[rgb(237,237,237)] border-[rgb(237,237,237)] hover:bg-[rgb(213,213,213)] hover:border-[rgb(213,213,213)]"
                    }`}
                    onClick={() => handleLaterClick()}
                  >
                    <div className="left flex items-center">
                      <button
                        className={`later-btn h-[27px] min-w-[27px] rounded-3xl ${
                          isLaterActive
                            ? "active bg-[rgb(33,105,243)] border-[7px] "
                            : "inactive bg-[rgb(213,213,213)]"
                        }`}
                      ></button>
                    </div>

                    <div className="pl-4 right">
                      <h1 className="text-[rgb(86,113,125)] text-lg font-bold">
                        Pay later
                      </h1>
                      <p className="text-xs ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum nulla libero, dictum ut volutpat eget, congue
                        et felis. Nulla facilisi. Nam ultricies dignissim dui,
                        vel venenatis enim porta nec. Morbi semper sodales ex, a
                        pellentesque risus.
                      </p>
                    </div>
                  </div>
                  <div className="buy-button flex justify-center items-center bg-[rgb(33,105,243)] h-[73px] mt-2 text-white font-medium text-2xl hover:cursor-pointer">
                    <h1>Buy now</h1>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="item-added mt-[5%] mx-[8%] p-[20px] bg-[rgb(251,113,153)]  ">
              <div className="item-added-text text-2xl font-bold text-[rgb(33,105,243)] text-white">
                <h1>you cart is empty</h1>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
