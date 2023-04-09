import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./components/Container";
import { Header } from "./components/Header/Header";
import { PagesList } from "./components/Pages/PagesList";
import { Page } from "./components/Pages/Page";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route exact path="/" element={<PagesList />} />
            <Route exact path="/pages/:id" element={<Page />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
