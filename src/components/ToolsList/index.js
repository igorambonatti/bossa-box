import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import api from "../../services/api";

import { Container, Tools } from "./styles";

import RemoveIcon from "../../assets/Icon-Close-2px.svg";

function ToolsList() {
  const searchTools = useSelector((state) => state.tools.tools);

  const [tools, setTools] = useState([]);
  const [idTool, setIdTool] = useState();
  useEffect(() => {
    setTools(searchTools);
  }, [searchTools]);
  useEffect(() => {
    async function loadTols() {
      const response = await api.get("/tools");
      setTools(response.data);
    }
    loadTols();
  }, []); //disable-eslint-line

  async function removeTool() {
    await api.delete(`/tools/${idTool}`);
  }
  return (
    <Container>
      {tools.map((tool) => (
        <Tools key={tool.id}>
          <div className="toolHead">
            <a href={tool.link}>
              <h1>{tool.title}</h1>
            </a>
            <button onClick={() => setIdTool(tool.id)}>
              <img src={RemoveIcon} alt="" />
              remove
            </button>
          </div>
          <h2>{tool.description}</h2>
          <div className="tags">
            {tool.tags.map((tag) => (
              <p>#{tag} </p>
            ))}
          </div>
        </Tools>
      ))}
    </Container>
  );
}

export default ToolsList;
