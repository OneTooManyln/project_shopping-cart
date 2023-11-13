export default function Header() {
  return (
    <>
      <header className="flex flex-col bg-[rgb(251,113,153)] h-50 w-full">
        <div className="w-screen h-6"></div>
        <div className="header-banner flex justify-between bg-white border-y-0 border-y-black">
          <img
            src="/src/assets/Hangzhou_Spark_wordmark.svg"
            alt="Page Header Logo"
            className="object-contain h-20 mt-5 mb-1"
          />
          <div className="box-wrapper flex flex-1 justify-end mr-20 gap-5">
            <div id="box" className="w-20"></div>
            <div id="box" className="w-20"></div>
            <div id="box" className="w-20"></div>
            <div id="box" className="w-20"></div>
            <div id="box" className="w-20"></div>
          </div>
        </div>
        <div className="banner-bottom flex justify-center w-screen /*h-[10px]*/ g-[rgb(87,136,206)] bg-white border-b-[1px] border-[rgb(251,113,153)] mt-[3px] py-[10px]">
          {/* <div className="search-bar flex items-center w-[50%] border-2 rounded border-[rgb(51,51,51)] bg-white h-10 px-[20px] py-[20px]">
            <img
              src="/src/assets/search_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Search bar icon"
              className="search-bar-icon h-[25px] w-[25px]"
            />
          </div> */}
        </div>
      </header>
    </>
  );
}
