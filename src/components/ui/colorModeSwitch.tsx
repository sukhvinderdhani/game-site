import { Switch } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [checked, setChecked] = useState(false);

  return (
    <Switch.Root
      onChange={toggleColorMode}
      colorPalette={"green"}
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>
        {" "}
        {colorMode === "light" ? "Light Mode" : "Dark Mode"}
      </Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;
