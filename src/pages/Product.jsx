import { useState } from "react";

export default function Product({
  productToDisplay,
  onAddCart,
  productAmountValue,
  setProductAmountValue,
}) {
  const [isAddedDisplayVisible, setIsAddedDisplayVisible] = useState(false);

  const displayProductAdded = () => {
    setIsAddedDisplayVisible(true);
    onAddCart(productToDisplay);
    setTimeout(() => {
      setIsAddedDisplayVisible(false);
    }, 3000);
  };

  const handleIncrement = () => {
    if (productAmountValue <= 999998) {
      setProductAmountValue(productAmountValue + 1);
    }
  };

  const handeDecrement = () => {
    if (productAmountValue > 1) {
      setProductAmountValue(productAmountValue - 1);
    }
  };

  if (!productToDisplay) {
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }

  return (
    <>
      {isAddedDisplayVisible && (
        <div className="item-added fixed flex items-center justify-center gap-8 w-[70%] h-[150px] top-[40%] left-[15%] px-2 py-8 text-2xl font-bold text-[rgb(33,105,243)] bg-[rgb(251,113,153)] text-white border-2 border-black shadow-lg">
          <div className="item-added-img">
            <img
              src={productToDisplay.image}
              alt=""
              className="object-fit h-[100px] w-[100px]"
            />
          </div>
          <div className="item-added-text">
            <h1>added to cart</h1>
          </div>
        </div>
      )}
      <main className="px-[20px]">
        <div className="product-container max-w-[1200px] mt-[5.5%] mx-[8%]">
          <div className="product-title p-2 border-b-[1px]">
            <h1 className="text-black pl-2 border-l-4 border-black">
              {productToDisplay.title}
            </h1>
          </div>
          <div className="product-main flex justify-between mt-[5%] ">
            <div className="product-image flex justify-center border-[1px] p-4 w-[475px] h-[475px]">
              <img
                src={productToDisplay.image}
                alt="Product Image"
                className="object-fit max-h-[100%]"
              />
            </div>
            <div className="project-right flex flex-col justify-between flex-1 items-end justify-center p-4 pb-0">
              <div className="project-right-top text-[rgb(251,113,153)]">
                <div className="decription-title font-bold text-2xl">
                  <h1>Description</h1>
                </div>
                <div className="description mt-[2%]">
                  {productToDisplay.description}
                </div>
              </div>
              <div className="proudct-right-bottom flex items-center justify-between p-4 h-[140px] w-[100%] border-[rgb(251,113,153)] border-[1px]">
                <div className="product-price h-[56px]">
                  <p className="text-[rgb(156,86,108)] text-sm">
                    Selling Price
                  </p>
                  <p className=" text-[rgb(255,0,0)] font-bold pl-2">
                    ${productToDisplay.price}
                  </p>
                </div>
                <div className="bottom-center 4 h-[56px]">
                  <div className="top">
                    <p className="text-[rgb(156,86,108)] text-sm">Amount</p>
                  </div>
                  <div className="bottom flex">
                    <input
                      type="text"
                      name="product_amount"
                      value={productAmountValue}
                      onClick={(e) => e.target.select()}
                      onChange={(e) => {
                        setProductAmountValue(
                          e.target.value === "" || 0
                            ? 1
                            : parseInt(e.target.value),
                        );
                      }}
                      maxLength="6"
                      className="product-amount h-[36px] w-[140px] border-[rgb(156,86,108)] border-[1px] text-black text-center"
                    />
                    <ul className="flex flex-col justify-between font-bold text-base text-center ml-[4%]">
                      <li className="">
                        <button
                          className="bg-[rgb(251,113,153)] flex items-center justify-center hover:cursor-pointer w-[26px] h-[14px] p-0"
                          onClick={() => handleIncrement()}
                        >
                          +
                        </button>
                      </li>
                      <li className="">
                        <button
                          className="bg-[rgb(251,113,153)] flex items-center justify-center hover:cursor-pointer w-[26px] h-[14px] p-0"
                          onClick={() => handeDecrement()}
                        >
                          -
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => displayProductAdded()}
                  className="product-atc p-2 bg-[rgb(251,113,153)] h-[56px]"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
