//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext } from "react";

//STYLES
import "./UnarchiveButton.css"

/*-------------------------------------------------------------------*/

function UnarchiveButton ({selectedBoard}) {

    const { boardsArray, setBoardsArray } = useContext(TaskListContext);

    function handleArchiveBoard(boardToArchive) {
        boardToArchive.isArchived = false;
        setBoardsArray([...boardsArray]);
    }

    return(
        <button className="archive-button" onClick={()=>handleArchiveBoard(selectedBoard)}>
                    <img src="/images/unarchive-icon.svg" alt="Archive button" />
                </button>
    )
}

export default UnarchiveButton;