import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button>
          {selectedPlatform?.name || " Plaforms"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            value={platform.name}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
