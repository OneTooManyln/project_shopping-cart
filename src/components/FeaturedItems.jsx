export default function FeaturedItems() {
  return (
    <>
      <div className="featured-items max-w-[1200px] mt-[5.5%] mx-auto">
        <div className="header flex w-[100%] items-center h-24 bg-[rgb(251,113,153)] order-2 order-black">
          <h3 className="text-3xl h-10 text-center border-b-2 border-white">
            <span className="text pl-4">FEATURED ITEMS</span>
          </h3>
        </div>
        <div className="content h-[4000px] mt-[5.5%]">
          <div className="pc-cards h-[1600px] grid grid-rows-3 grid-cols-4 gap-4">
            <div className="card-wrapper bg-white bg-black">
              <div className="img-container"></div>
            </div>
            <div className="card-wrapper bg-white bg-black">
              <div className="img-container"></div>
            </div>
            <div className="card-wrapper bg-white bg-black">
              <div className="img-container"></div>
            </div>
            <div className="card-wrapper bg-white bg-black">
              <div className="img-container"></div>
            </div>
            <div className="card-wrapper bg-white bg-black">
              <div className="img-container"></div>
            </div>
            <div className="card-wrapper bg-white bg-black">
              <div className="img-container"></div>
            </div>
            <div className="card-wrapper bg-white bg-black">
              <div className="img-container"></div>
            </div>
            <div className="card-wrapper bg-white bg-black">
              <div className="img-container"></div>
            </div>
            <div className="card-wrapper bg-white bg-black">
              <div className="img-container"></div>
            </div>
            <div className="card-wrapper bg-white bg-black">
              <div className="img-container"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
