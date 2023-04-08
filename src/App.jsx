import React from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header/Header";
import { MarkdownText } from "./components/MarkdownText/MarkdownText";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <MarkdownText fileUrl={"/test.md"} />
        </Container>
      </main>
    </>
  );
}

export default App;
