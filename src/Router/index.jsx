import { createBrowserRouter } from "react-router-dom";

//Components
import App from "../App.jsx";
import Location from "../Page/Location/Location.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/location",
				element: <Location />,
			},
			{
				path: "/location/:id",
				element: <h1>bulaaaaaaaa</h1>,
			},
		],
	},
]);

export default router;
