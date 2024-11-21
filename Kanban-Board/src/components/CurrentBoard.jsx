// CSS
import './CurrentBoard.css';

//ASSETS
import KanbanJson from '../data/kanban.json';

// COMPONENTS
import List from './List';

// HOOKS
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';

function CurrentBoard() {
   
    // const params = useParams();
    return (
            <>
                <List taskList={KanbanJson} />
            </>
    )
};

export default CurrentBoard;