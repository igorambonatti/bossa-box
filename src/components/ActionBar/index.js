import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import {
  searchWithTags,
  searchTools,
  createTool,
} from "../../store/modules/tools/action";

import { Container, Button, StyledModal } from "./styles";

import AddIcon from "../../assets/Icon-Close-2px.svg";
import SearchIcon from "../../assets/Icon-Search-2px.svg";

function ActionBar() {
  const dispatch = useDispatch();

  const [tech, setTech] = useState("");
  const [tags, setTags] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    title: "",
    link: "",
    description: "",
    tags: "",
  });

  useEffect(() => {
    if (tags) {
      dispatch(searchWithTags(tech));
    } else {
      dispatch(searchTools(tech));
    }
  }, [tech, tags]); // eslint-disable-line

  function requestTool() {
    dispatch(createTool({ data }));
    setModal(false);
  }
  return (
    <Container>
      <StyledModal isOpen={modal}>
        <div className="headModal">
          <img src={AddIcon} alt="Search Option"></img>
          <h1>Add new tool</h1>
        </div>
        <div>
          <label>Tool Name</label>
          <input
            type="text"
            onChange={(event) =>
              setData({ ...data, title: event.target.value })
            }
          />
        </div>
        <div>
          <label>Tool Link</label>
          <input
            type="text"
            onChange={(event) => setData({ ...data, link: event.target.value })}
          />
        </div>
        <div>
          <label>Tool description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(event) =>
              setData({ ...data, description: event.target.value })
            }
          ></textarea>
        </div>
        <div>
          <label>Tags (separe por virgula)</label>
          <input
            type="text"
            onChange={(event) => setData({ ...data, tags: event.target.value })}
          />
        </div>
        <div className="navButtons">
          <button onClick={() => setModal(false)}>Cancel</button>
          <button onClick={() => requestTool()}>Add tool</button>
        </div>
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
