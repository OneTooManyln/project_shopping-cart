export default function Footer() {
  return (
    <>
      <footer className="flex absolute bottom-0 flex-col mt-[5.5%] width-full -[160px] bg-[rgb(251,113,153)]">
        <div className="w-screen border-t-[3px] bg-white border-[rgb(251,113,153)] py-[10px]"></div>
        <div className="content flex-1 w-[100%] p-8 mx-auto">
          <div className="links flex gap-2 text-lg">
            <div className="title">LINKS --</div>
            <div className="links">
              <ul className="flex gap-2">
                <li>twitter</li>
                <li>github</li>
                <li>api</li>
              </ul>
            </div>
          </div>
          <div className="copyright text-sm text-gray-900 mt-[1%]">
            Copyright @ 2023 All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
