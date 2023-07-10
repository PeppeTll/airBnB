import { createBrowserRouter } from "react-router-dom";

//Components
import App from "../App.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/location",
    element: ""
  },
  {
    path: "/location/:id",
    element: ""
  },
]);

export default router