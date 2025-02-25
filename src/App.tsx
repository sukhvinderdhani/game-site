import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem hideBelow="lg" area="aside">
        Aside
      </GridItem>

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
