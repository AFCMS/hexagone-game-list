import { useParams } from "react-router";
import ApiSteamGame from "../../api/steam/ApiGame";
import Unknown404 from "../404/404";
import Comments from "../../components/Comments";

export default function Game() {
  const { gameId } = useParams();

  return (
    <ApiSteamGame gameid={gameId ? gameId : "not-found"}>
      {(data) => {
        if (!gameId || !data[gameId]?.success) {
          return <Unknown404 />;
        }

        return (
          <main className="container mx-auto flex flex-col justify-center items-center">
            <div className="hero min-h-screen mx-24">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={`https://steamcdn-a.akamaihd.net/steam/apps/${gameId}/library_600x900_2x.jpg`}
                  className="rounded-lg shadow-2xl max-w-[400px]"
                />
                <div>
                  <h1 className="text-3xl font-bold">
                    {data[gameId].data.name}
                  </h1>
                  <p className="py-6">{data[gameId].data.short_description}</p>
                  <div className="flex flex-row gap-2 mb-4">
                    {data[gameId].data.genres.map((e) => (
                      <span className="badge badge-soft badge-neutral">
                        {e.description}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://store.steampowered.com/app/${gameId}`}
                    className="btn mr-2"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <title>Steam</title>
                      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
                    </svg>
                    Store
                  </a>

                  <a
                    href={`https://steamdb.info/app/${gameId}`}
                    className="btn"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <title>SteamDB</title>
                      <path d="M11.981 0C5.72 0 .581 2.231.02 5.081l6.675 1.257c.544-.17 1.162-.244 1.8-.244l3.131-1.875c-.037-.469.244-.956.881-1.35.9-.581 2.307-.9 3.732-.9a8.582 8.582 0 012.812.412c2.1.713 2.569 2.082 1.069 3.057-.956.618-2.494.937-4.013.9l-4.125 1.48c-.037.3-.243.582-.637.845-1.106.712-3.263.88-4.8.356-.675-.225-1.125-.563-1.313-.9L.47 7.2c.431.675 1.125 1.294 2.025 1.838C.938 9.938 0 11.062 0 12.28c0 1.2.9 2.307 2.419 3.206C.9 16.37 0 17.476 0 18.675 0 21.619 5.363 24 12 24c6.619 0 12-2.381 12-5.325 0-1.2-.9-2.306-2.419-3.188C23.1 14.588 24 13.482 24 12.282c0-1.219-.938-2.362-2.512-3.262 1.556-.956 2.493-2.138 2.493-3.413 0-3.093-5.381-5.606-12-5.606zm4.275 2.663c-.975.018-1.912.225-2.512.618-1.031.675-.713 1.594.712 2.082 1.425.487 3.394.337 4.425-.338 1.032-.675.713-1.594-.712-2.062a6.376 6.376 0 00-1.913-.282zm.057.318c1.387 0 2.493.525 2.493 1.163 0 .637-1.106 1.162-2.493 1.162-1.388 0-2.494-.525-2.494-1.162 0-.638 1.106-1.163 2.494-1.163zM8.493 6.45c-.3.019-.58.038-.862.075l1.707.319a2.03.94 0 11-1.52 1.744l-1.668-.32c.188.17.45.32.806.45 1.2.413 2.888.282 3.75-.28.863-.563.6-1.35-.6-1.744-.487-.169-1.068-.244-1.612-.244zm11.944 3.113v1.743c0 2.063-3.787 3.732-8.437 3.732-4.669 0-8.437-1.67-8.437-3.732V9.581c2.156.994 5.137 1.613 8.418 1.613 3.3 0 6.3-.619 8.475-1.631zm0 6.487v1.65c0 2.063-3.787 3.731-8.437 3.731-4.669 0-8.437-1.668-8.437-3.731v-1.65c2.175.956 5.137 1.538 8.437 1.538s6.281-.582 8.438-1.538z" />
                    </svg>
                    SteamDB
                  </a>
                </div>
              </div>
            </div>
            <Comments appid={gameId} />
          </main>
        );
      }}
    </ApiSteamGame>
  );
}
