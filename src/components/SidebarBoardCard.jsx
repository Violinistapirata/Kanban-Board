//ROUTES
import { NavLink } from "react-router-dom";

// //HOOKS
import { useDrag } from "react-dnd";

//STYLES
import "./SidebarBoardCard.css";

/*-------------------------------------------------------------------*/

function SidebarBoardCard({ board }) {
  //Drag-and-drop functionality
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "board",
    item: { board },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <li
      key={board.id}
      className={`sidebar__board-card ${isDragging && "red-border"}`}
      ref={drag}
      draggable="true"
    >
      <NavLink
        to={`/current-board/${board.id}`}
        className={({ isActive }) =>
          isActive ? "sidebar-button--active" : "sidebar-button"
        }
      >
        <h2>{board.name}</h2>
      </NavLink>
    </li>
  );
}

export default SidebarBoardCard;
