export default function Product({ productToDisplay }) {
  console.log(productToDisplay);
  return (
    <>
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
              <div className="proudct-right-bottom flex items-center justify-between p-4 h-[100px] w-[100%] border-[rgb(251,113,153)] border-[1px]">
                <div className="product-price text-[rgb(255,0,0)] font-bold">
                  ${productToDisplay.price}
                </div>
                <div className="bottom-center flex">
                  <input
                    type="text"
                    value="1"
                    className="product-amount h-[36px] w-[140px] border-[rgb(156,86,108)] border-[1px] text-black text-center"
                  />
                  <ul className="flex flex-col justify-between font-bold text-base text-center ml-[4%]">
                    <li className="bg-[rgb(251,113,153)] flex items-center justify-center hover:cursor-pointer w-[26px] h-[14px] p-0">
                      +
                    </li>
                    <li className="bg-[rgb(251,113,153)] flex items-center justify-center hover:cursor-pointer w-[26px] h-[14px] p-0">
                      -
                    </li>
                  </ul>
                </div>

                <button className="product-atc p-2 bg-[rgb(251,113,153)]">
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
