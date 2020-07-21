import React from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import ActionBar from "../../components/ActionBar";
import ToolsList from "../../components/ToolsList";

function Home() {
  return (
    <Container>
      <Header />
      <ActionBar />
      <ToolsList />
    </Container>
  );
}

export default Home;
