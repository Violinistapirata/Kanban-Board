
function TaskDetailsPage ({task: {title, description, assignee, status, priority, createdDate, dueDate}}) {
    return (
        <ul>
            <li>Title: {title}</li>
            <li>Description: {description}</li>
            <li>Assignee: {assignee}</li>
            <li>Status: {status}</li>
            <li>Priority: {priority}</li>
            <li>Created on: {createdDate}</li>
            <li>Due date: {dueDate}</li>
        </ul>
    )
}

export default TaskDetailsPage;