import ApiFetch from "../ApiFetch";

type ApiSteamGameResponse = {
  [key: string]: {
    success: boolean;
    data: {
      type: string;
      name: string;
      steam_appid: number;
      required_age: number;
      is_free: boolean;
      detailed_description: string;
      about_the_game: string;
      short_description: string;
      website: string;
      developers: string[];
      publishers: string[];
      // Many other fields are available
      genres: { id: number; description: string }[];
    };
  };
};

interface ApiSteamGameProps {
  gameid: string;
  children: (data: ApiSteamGameResponse) => React.ReactNode;
}

export default function ApiSteamGame(props: ApiSteamGameProps) {
  return (
    <ApiFetch<ApiSteamGameResponse>
      url={`https://store.steampowered.com/api/appdetails?appids=${props.gameid}&language=english`}
      method="GET"
      headers={{
        Accept: "application/json",
      }}
    >
      {props.children}
    </ApiFetch>
  );
}
