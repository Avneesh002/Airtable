import React from "react";
import {Input, Button} from "@chakra-ui/react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {

    const btnArea = {
        padding:"14.2px"
    }
  return (
    <tr>
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
        <Input
          type="text"
          
          placeholder="Enter a notice..."
          name="notice"
          value={editFormData.notice}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Enter an assignee..."
          name="assignee"
          value={editFormData.assignee}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
        {/* <Input
          type="text"
          required="required"
          placeholder="Enter a status..."
          name="status"
          value={editFormData.status}
          onChange={handleEditFormChange}
        ></Input> */}
        <select
        required="required"
        name="status"
        value={editFormData.status}
        onChange={handleEditFormChange}
        fontSize={"17px"}
        fontWeight={"500"}
        opacity={"70%"}
        >
            <option>-Status-</option>
            <option value="Todo">Todo</option>
            <option value="Completed">Completed</option>
        </select>
      </td>
      <td style={btnArea}>
        <Button colorScheme={"whatsapp"} variant={"link"} type="submit">Save</Button>
        <Button color={"red.400"} variant={"link"} onClick={handleCancelClick}>
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;