import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import Container from "./components/Container";
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
        <GlobalStyles />
          <Header/>
          <Container>
          </Container>
      </>
    // </ThemeProvider>
  );
}

export default App;
