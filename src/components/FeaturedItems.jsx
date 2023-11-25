import UseAPI from "./UseAPI";

export default function FeaturedItems() {
  const dataArray = UseAPI();

  return (
    <>
      <div className="featured-items max-w-[1200px] mt-[5.5%] mx-auto">
        <div className="header flex w-[100%] items-center h-24 bg-[rgb(251,113,153)]">
          <h3 className="text-3xl h-10 text-center border-b-2 border-white">
            <span className="text pl-4">FEATURED ITEMS</span>
          </h3>
        </div>
        <div className="content mt-[5.5%]">
          <div className="pc-cards min-h-[1050px] grid grid-rows-2 grid-cols-4 gap-4 max-lg:justify-items-center max-lg:grid-cols-1">
            {dataArray.map((data) => (
              <div
                key={data.id}
                className="card-wrapper flex flex-col items-center bg-[rgb(251,113,153)] max-lg:w-[550px] max-lg:min-h-[600px]"
              >
                <div className="img-container w-full">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="object-fill h-[240px] w-full"
                  />
                </div>
                <div className="content-container flex justify-between flex-col justify-b flex-1 p-4 mt-12 text-black max-lg:w-full">
                  <div className="body text-[.9rem]">
                    <p>{data.title}</p>
                  </div>
                  <div className="bottom flex justify-between">
                    <div className="price">{`$${data.price}`}</div>
                    <button className="cta-button bg-[rgb(87,136,206)] hover:bg-[rgb(87,136,206)]/75 rounded px-2">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
