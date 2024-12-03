//DATA
import KanbanJson from "../data/kanban.json"

//HOOKS
import { createContext } from "react";
import { useState } from "react";

/*-------------------------------------------------------------------*/

const TaskListContext = createContext()

function TaskListProviderWrapper(props){
    const [currentTaskList, setCurrentTaskList] = useState(KanbanJson);

    return (
        <TaskListContext.Provider value={{currentTaskList, setCurrentTaskList}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export {TaskListContext, TaskListProviderWrapper}