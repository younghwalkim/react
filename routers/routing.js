import { createBrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/Home";
import TodoPage from "../src/pages/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "todo",
    element: <TodoPage />,
  },
]);

export default router;