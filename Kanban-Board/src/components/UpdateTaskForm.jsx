
//CSS
import "./UpdateTaskForm.css"

//HOOKS
import { useState } from "react";

function UpdateTaskForm({task, taskProps, formProps }) {

    //States from the form inputs
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.assignee);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

    //Handle functions for the inputs's onChange event listeners
  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleAssignee = (e) => setAssignee(e.target.value);
  const handleSelect = (e) => setPriority(e.target.value);
  const handleDueDate = (e) => setDueDate(e.target.value);
  
  //Function for the form's onSubmit event listener
  const handleUpdateTask = (e) => {
    e.preventDefault();
    console.log("THIS IS THE PREVIOUS TASKLIST", taskProps.currentTaskList);
    const updatedTaskList = [...taskProps.currentTaskList];
    const taskIndex = taskProps.currentTaskList.indexOf(task);
    console.log(taskIndex);
    
    updatedTaskList.splice(taskIndex, 1, updatedTask);
    console.log("THIS IS THE UPDATED TASK LIST", updatedTaskList);
    taskProps.setCurrentTaskList(updatedTaskList);
    formProps.setShowUpdateTaskForm(false);
  }

  let updatedTask = {
    id: task.id,
    title: title,
    description: description,
    assignee: assignee,
    status: task.status,
    priority: priority,
    createdDate: task.createdDate,
    lastUpdate: new Date().toString(),
    dueDate: dueDate,
  };
  console.log("THIS IS THE UPDATED TASK", updatedTask);
  
    
  return (
    <><div className="update-task-container">
      <h1>EDIT TASK</h1>

      <form onSubmit= {handleUpdateTask}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitle}
        />

        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label htmlFor="assignee">Assignee: </label>
        <input
          type="text"
          name="assignee"
          value={assignee}
          onChange={handleAssignee}
        />

        <label htmlFor="priority">Priority: </label>
        <select name="priority" value={priority} onChange={handleSelect}>
          <option value="-Choose priority-">-Choose priority-</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label htmlFor="due-date">Due Date: </label>
        <input
          type="date"
          name="due-date"
          value={dueDate}
          onChange={handleDueDate}
        />

        <button type="submit">
          Update task
        </button>
        <button onClick={()=>formProps.setShowUpdateTaskForm(false)}>X</button>
      </form>
      </div>
    </>
  );
}

export default UpdateTaskForm;
