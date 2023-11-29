import ErrorDisplay from "./ErrorDisplay";
import LoadingDisplay from "./LoadingDisplay";
import RenderProducts from "./RenderProducts";

export default function FeaturedItems({ APIData, error, loading }) {
  if (error) {
    return (
      <>
        <ErrorDisplay error={error} />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <LoadingDisplay />
      </>
    );
  }

  return (
    <>
      <div className="featured-items max-w-[1200px] mt-[5.5%] mx-auto">
        <div className="header flex w-[100%] items-center h-24 bg-[rgb(251,113,153)]">
          <h3 className="text-3xl h-10 text-center border-b-2 border-white">
            <span className="text pl-4">FEATURED ITEMS</span>
          </h3>
        </div>
        <div className="content mt-[5.5%]">
          <RenderProducts APIData={APIData} />
        </div>
      </div>
    </>
  );
}
