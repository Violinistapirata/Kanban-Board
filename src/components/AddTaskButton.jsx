
// STYLES
import "./AddTaskButton.css"

/*-------------------------------------------------------------------*/

function AddTaskButton ({setShowCreateTaskForm}) {
    return (
        <button
          className="add-task-button"
          onClick={() => setShowCreateTaskForm(true)}
        >
          Add Task
        </button>
    )
}

export default AddTaskButton;