import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { searchWithTags, searchTools } from "../../store/modules/tools/action";

import { Container, Button, StyledModal } from "./styles";

import AddIcon from "../../assets/Icon-Close-2px.svg";
import SearchIcon from "../../assets/Icon-Search-2px.svg";

function ActionBar() {
  const dispatch = useDispatch();

  const [tech, setTech] = useState("");
  const [tags, setTags] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (tags) {
      dispatch(searchWithTags(tech));
    } else {
      dispatch(searchTools(tech));
    }
  }, [tech, tags]); // eslint-disable-line

  return (
    <Container>
      <StyledModal isOpen={modal}>
        <h1>Add new tool</h1>
        <button onClick={() => setModal(false)}>Close me</button>
      </StyledModal>
      <div className="actionBar">
        <div className="searchSection">
          <div className="searchOpt">
            <img src={SearchIcon} alt="Search Option"></img>
            <input
              type="text"
              placeholder="search"
              onChange={(event) => setTech(event.target.value)}
            />
          </div>
          <div className="tagsOnly">
            <input
              type="checkbox"
              className="check"
              onChange={(event) => setTags(event.target.checked)}
            />
            <label>search in tags only</label>
          </div>
        </div>
        <Button className="addOpt" onClick={() => setModal(true)}>
          <img src={AddIcon} alt="Search Option"></img>
          Add
        </Button>
      </div>
    </Container>
  );
}

export default ActionBar;
