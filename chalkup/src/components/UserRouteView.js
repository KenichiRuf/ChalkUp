import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import axios from "axios";

const UserRouteView = props => {
  const [dropDownOpen, setDropdown] = useState(false);
  const [dropDownValue, setDropdownValue] = useState(props.userRoute.status);
  const [notes, setNotes] = useState("");
  const [share, setShare] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const toggle = () => setDropdown(prevState => !prevState);

  const handleNotesChange = event => {
    setNotes(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = props.userRoute.id;
    axios
      .put(`https://chalkup-backend.herokuapp.com/api/routes/userRoute/${id}`, {
        notes: notes,
        share: share,
        status: status
      })
      .then(res => setTimeout(props.toggleModal), 2000)
      .catch(err => setError("Could Not Submit"));
  };

  return (
    <div className="userRouteView">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="notes">Add Notes</Label>
          <Input
            type="textarea"
            name="notes"
            id="notes"
            placeholder="Notes"
            onChange={handleNotesChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="radio"
            name="share"
            id="share"
            onClick={() => setShare(!share)}
          />
          <FormText>Share Notes?</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="status">Status</Label>
          <Dropdown isOpen={dropDownOpen} toggle={toggle}>
            <DropdownToggle caret>{dropDownValue}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={() => {
                  setDropdownValue("Project");
                  setStatus("Project");
                }}
              >
                Project
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  setDropdownValue("Sent");
                  setStatus("Sent");
                }}
              >
                Sent
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <Button>Submit</Button>
        {error ? <p className="errorMessage">{error}</p> : null}
      </Form>
    </div>
  );
};

export default UserRouteView;
