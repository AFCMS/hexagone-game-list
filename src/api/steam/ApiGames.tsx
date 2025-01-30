import ApiFetch from "../ApiFetch";

type ApiSteamGamesResponse = {
  appid: string;
  name: string;
  icon: string;
  logo: string;
}[];

interface ApiSteamGamesProps {
  search: string;
  children: (data: ApiSteamGamesResponse) => React.ReactNode;
}

export default function ApiSteamGames(props: ApiSteamGamesProps) {
  return (
    <ApiFetch<ApiSteamGamesResponse>
      url={`https://steamcommunity.com/actions/SearchApps/${props.search}`}
      method="GET"
      headers={{
        Accept: "application/json",
      }}
    >
      {props.children}
    </ApiFetch>
  );
}
