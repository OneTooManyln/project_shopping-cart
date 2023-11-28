import FeaturedItems from "../components/FeaturedItems";

export default function Home({ APIData, error, loading }) {
  return (
    <>
      <main className="px-[20px]">
        <div className="intro flex justify-center flex-col gap-10 max-w-[1200px] text-[rgb(251,113,153)] text-7xl mt-[5.5%] font-bold px-8 mx-auto text-center">
          <h2>BLACK FIRDAY SALES IMMINENT</h2>
          <p className="text-base text-gray-380 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis
            ex, blandit id pellentesque blandit, commodo tempus purus. Phasellus
            mollis cursus ante, at ullamcorper augue ultricies ac.
          </p>
        </div>
        <FeaturedItems APIData={APIData} error={error} loading={loading} />
      </main>
    </>
  );
}
