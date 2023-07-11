import { createBrowserRouter } from "react-router-dom";

//Components
import App from "../App.jsx";
import Location from "../Page/Location/Location.jsx";
import Error from "../Page/Error/Error.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
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
