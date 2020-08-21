import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import {
  searchWithTags,
  searchTools,
  createTool,
} from "../../store/modules/tools/action";

import {
  Container,
  Button,
  StyledModal,
  Input,
  Bar,
  Check,
  ModalInput,
  Field,
  CancelButton,
} from "./styles";

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
          <h1>Add new tool</h1>
        </div>
        <Field>
          <label>Tool Name</label>
          <ModalInput
            type="text"
            onChange={(event) =>
              setData({ ...data, title: event.target.value })
            }
          />
        </Field>
        <Field>
          <label>Tool Link</label>
          <ModalInput
            type="text"
            onChange={(event) => setData({ ...data, link: event.target.value })}
          />
        </Field>
        <Field>
          <label>Tool description</label>
          <textarea
            onChange={(event) =>
              setData({ ...data, description: event.target.value })
            }
          ></textarea>
        </Field>
        <Field>
          <label>Tags (separe por virgula)</label>
          <ModalInput
            type="text"
            onChange={(event) => setData({ ...data, tags: event.target.value })}
          />
        </Field>
        <div className="navButtons">
          <CancelButton onClick={() => setModal(false)}>Cancel</CancelButton>
          <Button onClick={() => requestTool()}>Add tool</Button>
        </div>
      </StyledModal>
      <Bar>
        <div className="searchSection">
          <div className="searchOpt">
            <img src={SearchIcon} alt="Search Option"></img>
            <Input
              type="text"
              placeholder="Digite o que está procurando..."
              onChange={(event) => setTech(event.target.value)}
            />
          </div>
          <Check>
            <Input
              type="checkbox"
              className="checkbox"
              onChange={(event) => setTags(event.target.checked)}
            />
            <label>search in tags only</label>
          </Check>
        </div>
        <Button className="addOpt" onClick={() => setModal(true)}>
          <img src={AddIcon} color="#fff" alt="Search Option"></img>
          Add
        </Button>
      </Bar>
    </Container>
  );
}

export default ActionBar;
