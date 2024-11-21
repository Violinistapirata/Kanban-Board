// CSS
import './CurrentBoard.css';

//ASSETS
import KanbanJson from '../data/kanban.json';

// COMPONENTS
import List from './List';


function CurrentBoard() {
   
    return (
            <>
                <List taskList={KanbanJson} />
            </>
    )
};

export default CurrentBoard;