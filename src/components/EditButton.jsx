
//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext } from "react";

//STYLES
import "./EditButton.css"

/*-------------------------------------------------------------------*/

function EditButton ({setShowEditNameInput, setBoardToEdit, board}) {
    return(
        <button
                  className="edit-button"
                  onClick={() => {
                    setShowEditNameInput(true)
                    setBoardToEdit(board)
                    }}
                >
                  <img src="/images/edit-pencil.svg"></img>
                </button>
    )
}

export default EditButton;