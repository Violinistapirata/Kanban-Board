//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext} from "react";

//STYLES
import "./EditBoardNameForm.css";

/*-------------------------------------------------------------------*/

function EditBoardNameForm({ board, editBoardStateProps }) {
const {boardsArray, setBoardsArray } = useContext(TaskListContext)

  const {setShowEditNameInput, boardToEdit, setBoardToEdit, boardName, setBoardName} = editBoardStateProps

  function handleEditBoardName(e) {
    e.preventDefault();

    boardToEdit.name = boardName;
    setBoardsArray([...boardsArray])
    setBoardName("");
    setBoardToEdit(null);
    setShowEditNameInput(false);
  }

  function handleInput(e) {
    const value = e.target.value;
    setBoardName(value);
  }
  return (
    <form onSubmit={handleEditBoardName}>
      <input
        value={boardName}
        placeholder={board.name}
        onChange={handleInput}
      ></input>
    </form>
  );
}

export default EditBoardNameForm;
