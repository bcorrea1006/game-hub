import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// {params: ...} is the request configuration object in useData
// The ? mark = "selected chaining". It allows us to acces fields even if object
// is null. If the Genre object is null it won't try to grab selectedGenre.id
const useGames = (gameQuery: GameQuery) =>
  useData<Game>('/games', {
    params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
    }},
    [gameQuery]
  );

export default useGames;