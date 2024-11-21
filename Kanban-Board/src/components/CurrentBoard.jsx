// CSS
import './CurrentBoard.css';

// COMPONENTS
import List from './List';

// HOOKS
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';

function CurrentBoard({taskList}) {
   
    // const params = useParams();
    return (
            <>
                <List taskList={taskList} />
            </>
    )
};

export default CurrentBoard;