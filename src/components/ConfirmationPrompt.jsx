import { useContext, useState } from "react"
import { TaskListContext } from "../Contexts/taskLists.context"

function ConfirmationPrompt ({selectedBoard, setShowConfirmationPrompt}) {
    console.log(selectedBoard);
    const [boardIsDeleted, setBoardIsDeleted] = useState(false)

    const {boardsArray, setBoardsArray} = useContext(TaskListContext);
    function handleDeleteBoard(boardId) {
        const updatedBoardsArray = boardsArray.filter(board => board.id !== boardId);
        setBoardsArray(updatedBoardsArray);
        setBoardIsDeleted(true)
        setTimeout(()=>{
            setShowConfirmationPrompt(false)
            setBoardIsDeleted(false)
        }, 5000)
    }
    return (
        <div>
            <h3>Delete confirmation</h3>
            {!boardIsDeleted ? (
            <>
                <p>You are going to delete {selectedBoard.name}.</p>
                <p>Do you wish to proceed?</p>
                <div>
                <button type="button" className="cancel-btn" onClick={() => setShowConfirmationPrompt(false)}>Wait, don&apos;t delete it</button>
                <button type="button" onClick={() => handleDeleteBoard(selectedBoard.id)}>Yes, delete it</button>
                </div>
            </>
            ) : (
                <p>{selectedBoard.name} deleted successfully.</p>
            )}
        </div>
    )
}

export default ConfirmationPrompt;