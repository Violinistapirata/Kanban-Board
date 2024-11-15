import './CurrentBoard.css';
import taskList from '../../kanban.json'

function CurrentBoard() {

    const itemsId = taskList.map((item) => {
        const itemId = item.id
        // console.log(item.id);
        return itemId;
    })
    // console.log(itemsId);
    console.log(itemsId);
    
    // const taskList = 
    return (
        <>
            <section className='current-board-container'>
               <li>{itemsId[0]}</li>
            </section>
        </>
    )
};

export default CurrentBoard;