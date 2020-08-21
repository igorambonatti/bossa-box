import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { removeTool } from "../../store/modules/tools/action";

import api from "../../services/api";

import { Container, Tools, StyledModal, RemoveButton } from "./styles";

import RemoveIcon from "../../assets/Icon-Close-2px.svg";

function ToolsList() {
  const dispatch = useDispatch();

  const searchTools = useSelector((state) => state.tools.tools);

  const [modal, setModal] = useState(false);
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
  function openModal(id) {
    setModal(true);
    setIdTool(id);
  }

  async function removeTools() {
    dispatch(removeTool(idTool));
    setModal(false);
  }
  return (
    <Container>
      <StyledModal isOpen={modal}>
        <header>
          <h1>Remove Tool</h1>
        </header>
        <p>Are you sure you want to remove?</p>
        <div>
          <button className="secundary" onClick={() => setModal(false)}>
            Cancel
          </button>
          <button className="primary" onClick={() => removeTools()}>
            Yes, remove
          </button>
        </div>
      </StyledModal>
      {tools.map((tool) => (
        <Tools key={tool.id}>
          <div className="toolHead">
            <a href={tool.link}>
              <h1>{tool.title}</h1>
            </a>
            <RemoveButton onClick={() => openModal(tool.id)}>
              <img src={RemoveIcon} alt="" />
              remove
            </RemoveButton>
          </div>
          <h2>{tool.description}</h2>
          <div className="tags">
            {tool.tags.map((tag, index) => (
              <p key={index}>#{tag} </p>
            ))}
          </div>
        </Tools>
      ))}
    </Container>
  );
}

export default ToolsList;
