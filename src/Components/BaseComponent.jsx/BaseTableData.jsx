import React, { useState, Fragment, useContext } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from './ReadOnlyRows';
import EditableRow from './EditableRow';
import {Button, Input, Heading} from "@chakra-ui/react"
import "./tables.css";


import { AuthContext } from './../../Context/AuthContext';

export default function BaseTable(){
    const {contacts, setContacts} = useContext(AuthContext);


  console.log(contacts)
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    notes: "",
    assignee: "",
    status: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    notes: "",
    assignee: "",
    status: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      tableId: nanoid(),
      fullName: addFormData.fullName,
      notice: addFormData.notice,
      assignee: addFormData.assignee,
      status: addFormData.status,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      tableId: editContactId,
      fullName: editFormData.fullName,
      notice: editFormData.notice,
      assignee: editFormData.assignee,
      status: editFormData.status,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.tableId === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.tableId);

    const formValues = {
      fullName: contact.fullName,
      notice: contact.notice,
      assignee: contact.assignee,
      status: contact.status,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.tableId === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
    
  return (
    <div className="app-container">
      <form  onSubmit={handleEditFormSubmit}>
        <table>
          <thead >
            <tr >
              <th>Name</th>
              <th>Notice</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.tableId}>
                {editContactId === contact.tableId ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <Heading opacity={"40%"} fontSize={"25px"}>Add New Row</Heading>
      <form onSubmit={handleAddFormSubmit}>
        <Input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <Input
          type="text"
          name="notice"
          
          placeholder="Enter Notice..."
          onChange={handleAddFormChange}
        />
        <Input
          type="text"
          name="assignee"
          required="required"
          placeholder="Enter an assignee..."
          onChange={handleAddFormChange}
        />
        {/* <Input
          type="text"
          name="status"
          required="required"
          placeholder="status..."
          onChange={handleAddFormChange}
          w={"30%"}
        /> */}
        <select name="status"
          required="required"
          onChange={handleAddFormChange}
          w={"30%"}
          fontSize={"17px"}
          fontWeight={"500"}
          opacity={"70%"}
          >
            <option value="">Status</option>
            <option value="Todo">Todo</option>
            <option value="Completed">Completed</option>

        </select>
        <Button colorScheme={"twitter"} w={"20%"} type="submit">Add Row</Button>
      </form>
    </div>
  );
};