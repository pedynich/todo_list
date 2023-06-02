import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import TodoListActive from "../components/TodoListActive";
import TodoListCompleted from "../components/TodoListCompleted";
import TodoList from "../components/TodoList";


const routers = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: "/",
          element: <TodoList />,
        },
        {
          path: "active",
          element: <TodoListActive />,
        },
        {
          path: "completed",
          element: <TodoListCompleted />,
        },
      ],
    },

  ]);

export default routers