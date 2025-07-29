

function NewBoardButton({setShowForm}) {

    return(
        <button
          className="create-board-button"
          onClick={() => setShowForm(true)}
        >
          Add New Board
        </button>
    )
}

export default NewBoardButton;