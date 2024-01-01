import { useState } from "react";

export default function Cart() {
  const [isNowActive, setIsNowActive] = useState(true);
  const [isLaterActive, setIslaterActive] = useState(false);

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
          <div className="cart-main flex justify-between mt-[5%]">
            <div className="left flex flex-col items-center gap-4">
              <div className="cart-items text-black pb-4 border-b-[1px]">
                <div className="item w-[500px]">
                  <div className="item-top flex justify-between items-start">
                    <div className="item-img h-[105px] w-[105px] border-[1px] border-[rgb(239,242,243)]"></div>
                    <button className="item-delete-btn bg-[rgb(237,237,237)] text-xs text-black p-2">
                      delete
                    </button>
                  </div>
                  <div className="item-bottom flex justify-between items-end mt-[15px]">
                    <select className="item-amount text-black bg-[rgb(237,237,237)] w-[105px] h-[60px]  ">
                      <option value="one">1</option>
                      <option value="two">2</option>
                      <option value="three">3</option>
                      <option value="four">4</option>
                      <option value="five">5</option>
                      <option value="six">6</option>
                      <option value="seven">7</option>
                      <option value="eight">8</option>
                      <option value="nine">9</option>
                      <option value="ten">10</option>
                    </select>
                    <div className="item-total text-black">3,960</div>
                  </div>
                </div>
              </div>
              <div className="return-btn flex items-center justify-center h-[58px] w-[360px] bg-[rgb(233,240,254)] text-xl font-bold text-[rgb(33,105,243)] rounded-sm hover:border-[1px] hover:cursor-pointer hover:border-[rgb(33,105,243)]">
                <h1>Return to shop</h1>
              </div>
            </div>

            <div className="cart-total text-black border-[3px] w-[360px]">
              <div className="total-header flex items-center justify-between p-[16px] border-b-[3px]">
                <div className="header-title">
                  <h1>Total</h1>
                </div>
                <div className="header-total text-lg text-[rgb(244,67,54)] font-bold tracking-wide">
                  1,980
                </div>
              </div>
              <div className="total-pay-options flex flex-col gap-[2px] m-[16px]">
                {}
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
                      et felis. Nulla facilisi. Nam ultricies dignissim dui, vel
                      venenatis enim porta nec. Morbi semper sodales ex, a
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
        </div>
      </main>
    </>
  );
}
