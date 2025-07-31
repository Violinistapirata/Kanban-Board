
//STYLES
import "./DeleteButton.css"

/*-------------------------------------------------------------------*/

function DeleteButton({handleF}) {
  console.log("The DeleteButton component has rendered");
  return (
    <button className="delete-task-button" onClick={handleF}>
            <img src="/images/papelera-red.svg" alt="trash can"></img>
        </button>
  )
}

export default DeleteButton;

