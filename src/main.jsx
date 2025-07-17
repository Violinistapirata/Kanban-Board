//PACKAGE.JSON
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//DRAG-AND-DROP PACKAGE
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

//ROUTES
import { HashRouter as Router } from "react-router-dom";

//CONTEXT
import { TaskListProviderWrapper } from "./Contexts/taskLists.context.jsx";

//COMPONENTS
import App from "./App.jsx";

//STYLES
import "./index.css";

/*-------------------------------------------------------------------*/


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <DndProvider backend={HTML5Backend}>
        <TaskListProviderWrapper>
          <App />
        </TaskListProviderWrapper>
      </DndProvider>
    </Router>
  </StrictMode>
);
