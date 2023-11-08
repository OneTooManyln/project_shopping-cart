export default function Header() {
  return (
    <>
      <header className="flex flex-col bg-[rgb(251,113,153)] h-40 w-full border-y-0 border-black">
        <>
          <div className="w-screen h-6"></div>
          <div className="header-main flex justify-between bg-white border-y-0 border-y-black">
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
        </>
      </header>
    </>
  );
}
