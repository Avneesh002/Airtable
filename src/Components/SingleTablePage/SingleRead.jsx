import React from "react";
import {Button, Input} from "@chakra-ui/react"

const SingleRead = ({ contact, handleEditClick, handleDeleteClick }) => {
    
    const noticeStyle = {
     width:"300px"
    }
    

    return (
    <tr >
      <td >{contact.fullName}</td>
      <td style={noticeStyle} >{contact.notice}</td>
      <td >{contact.assignee}</td>
      <td >{contact.status}</td>
      <td>
        <Button
          variant={"solid"}
          colorScheme={"twitter"}
          height={"31px"}
          onClick={(event) => handleEditClick(event, contact)}
          
        >
          Edit
        </Button>
        <Button color={"red.500"} variant={"link"} onClick={() => handleDeleteClick(contact.tableId)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default SingleRead;