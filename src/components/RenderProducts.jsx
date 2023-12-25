import { useNavigate } from "react-router-dom";

export default function RenderProducts({ APIData, onProduct }) {
  const navigate = useNavigate();

  const handleClick = (index) => {
    onProduct(APIData[index]);
    navigate("/product");
  };

  return (
    <>
      <div className="pc-cards min-h-[1050px] grid grid-rows-2 grid-cols-4 gap-4 max-lg:justify-items-center max-lg:grid-cols-1">
        {APIData.map((data, index) => (
          <div
            key={data.id}
            className="card-wrapper flex flex-col items-center bg-[rgb(251,113,153)] max-lg:w-[550px] max-lg:min-h-[600px]"
          >
            <div className="img-container w-full">
              <img
                src={data.image}
                alt={data.title}
                className="object-fill h-[240px] w-full hover:cursor-pointer"
                onClick={() => handleClick(index)}
              />
            </div>
            <div className="content-container flex justify-between flex-col justify-b flex-1 p-4 mt-12 text-black max-lg:w-full">
              <div className="body text-[.9rem]">
                <p>{data.title}</p>
              </div>
              <div className="bottom flex justify-between">
                <div className="price">{`$${data.price}`}</div>{" "}
                <button
                  className="cta-button bg-[rgb(87,136,206)] hover:bg-[rgb(87,136,206)]/75 rounded px-2"
                  onClick={() => handleClick(index)}
                >
                  <p>BUY</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
