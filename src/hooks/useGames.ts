import { GameQuery } from "@/App";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "@/hooks/usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms: {platform: Platform}[]
  metacritic:number;
  rating_top:number;
}

const apiClient = new APIClient('/games');

const useGames = (gameQuery : GameQuery) => 
useQuery({
  queryKey:['games',gameQuery],
  queryFn:() => apiClient
      .getAll({
        params:{
          genres:gameQuery.genre?.id, 
          parent_platforms:gameQuery.platform?.id,
          ordering:gameQuery.sortOrder,
          search:gameQuery.searchText
        },
      } ),
  staleTime: 24 * 60 * 60 * 1000, //24h
})

  

export default useGames