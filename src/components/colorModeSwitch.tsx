import { Switch } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Switch.Root onChange={toggleColorMode} colorPalette={"green"}>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label> Dark Mode</Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;
