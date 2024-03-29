import ErrorDisplay from "../components/ErrorDisplay";
import LoadingDisplay from "../components/LoadingDisplay";
import RenderProducts from "../components/RenderProducts";

export default function Shop({ APIData, error, loading, onProduct }) {
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
      <main className="px-[20px]">
        <div className="shop-container max-w-[1200px] mt-[5.5%] mx-auto">
          <div className="shop-header flex w-[100%] items-center h-24 bg-[rgb(251,113,153)]">
            <h1 className="text-3xl h-10 text-center border-b-2 border-white">
              <span className="shop-text pl-4">Shop</span>
            </h1>
          </div>
          <div className="content mt-[5.5%]">
            <RenderProducts APIData={APIData} onProduct={onProduct} />
          </div>
        </div>
      </main>
    </>
  );
}
