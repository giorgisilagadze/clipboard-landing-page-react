import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import {Container} from "./components/styled/Container.styled";
import { GlobalStyles } from "./components/styled/Global.styled";

const theme = {
  colors: {
    header: "blue",
    body: "white"
  }
}

function App() {
  return (
    // <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles>
          <Header/>
          <Container>
          </Container>
        </GlobalStyles>
      </>
    // </ThemeProvider>
  );
}

export default App;
