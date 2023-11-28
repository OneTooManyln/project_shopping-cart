export default function ErrorDisplay({ error }) {
  return (
    <>
      <div className="error-message text-center text-7xl max-w-[1200px] my-[5.5%] mx-auto font-bold text-black">
        <h2>An error was encounterd: {error.message}</h2>
      </div>
    </>
  );
}
