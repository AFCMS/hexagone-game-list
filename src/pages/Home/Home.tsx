export default function Home() {
  return (
    <div className="hero bg-base-200 sm:mt-24 p-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://steamcdn-a.akamaihd.net/steam/apps/412020/library_600x900.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-5xl font-bold">Game Lists!</h1>
          <p className="py-6">
            Enjoying your game collection? Create a list of your games on all
            platform so you can stare at the list without deciding what to play.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
