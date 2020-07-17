import React from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import ToolsList from "../../components/ToolsList";

function Home() {
  return (
    <Container>
      <Header />
      <ToolsList />
    </Container>
  );
}

export default Home;
