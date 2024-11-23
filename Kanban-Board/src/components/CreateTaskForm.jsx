import { useState } from "react";

function CreateTaskForm({ taskList, setTaskList, showForm }) {

    //States from the form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("Choose priority");
  const [dueDate, setDueDate] = useState("yyyy/mm/dd");

    //Function for the select input
  const handleSelect = (e) => setPriority(e.target.value);
  
  //Function for the add task button (submit)
  function handleAddTask (e) {
    e.preventDefault();
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
    showForm(false);
  }
  
  const lastTaskId = taskList[taskList.length - 1].id;
  let newTask = {
    id: lastTaskId*1 + 1,
    title: title,
    description: description,
    assignee: assignee,
    status: "To Do",
    priority: priority,
    createdDate: new Date().toString,
    dueDate: dueDate,
  };
    
  return (
    <>
      <h1>NEW TASK</h1>

      <form onSubmit= {handleAddTask}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="assignee">Assignee: </label>
        <input
          type="text"
          name="assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
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
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button type="submit">
          Add task
        </button>
      </form>
    </>
  );
}

export default CreateTaskForm;
