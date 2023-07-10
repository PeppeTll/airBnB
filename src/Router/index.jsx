import { createBrowserRouter } from "react-router-dom";

//Components
import App from "../App.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/location",
				element: <h1>holasaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>,
			},
			{
				path: "/location/:id",
				element: <h1>bulaaaaaaaa</h1>,
			},
		],
	},
]);

export default router;
