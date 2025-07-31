//CONTEXT
import { TaskListContext } from "../Contexts/taskLists.context";

//HOOKS
import { useContext } from "react";

//STYLES
import "./ArchiveButton.css"

/*-------------------------------------------------------------------*/

function ArchiveButton ({selectedBoard}) {

    const { boardsArray, setBoardsArray } = useContext(TaskListContext);

    function handleArchiveBoard(boardToArchive) {
        boardToArchive.isArchived = true;
        setBoardsArray([...boardsArray]);

        /* const newMyBoardsArray = myBoardsArray.filter(board => board.id !== boardToArchive.id);
        const newArchivedBoardsArray = archivedBoardsArray.push(boardToArchive);

        setMyBoardsArray(newMyBoardsArray);
        setArchivedBoardsArray(newArchivedBoardsArray); */



    }

    return(
        <button className="archive-button" onClick={()=>handleArchiveBoard(selectedBoard)}>
                    <img src="/images/archive-icon.svg" alt="Archive button" />
                </button>
    )
}

export default ArchiveButton;