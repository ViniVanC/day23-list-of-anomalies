import React from "react";
import { Container } from "./components/Container";
import { MarkdownText } from "./components/MarkdownText/MarkdownText";

function App() {
  return (
    <>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <MarkdownText fileUrl={"/test.md"} />
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </>
  );
}

export default App;
