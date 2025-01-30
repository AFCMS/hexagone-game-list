import { Link, useSearchParams } from "react-router";
import ApiSteamGames from "../../api/steam/ApiGames";

export default function Games() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  return (
    <ApiSteamGames search={search || ""}>
      {(data) => {
        return (
          <main className="container mx-auto flex justify-center items-center flex-1 grow mt-16">
            <div className="w-full">
              <h1 className="font-bold text-3xl mb-6 text-center">Games</h1>
              <div className="grid gap-4 w-full grid-cols-[repeat(auto-fit,300px)] justify-center">
                {data.map((game) => (
                  <Link
                    to={`/games/${game.appid}`}
                    className="card shadow-sm w-[300px]"
                    key={game.appid}
                  >
                    <figure>
                      <img
                        src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/library_600x900.jpg`}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{game.name}</h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        );
      }}
    </ApiSteamGames>
  );
}
