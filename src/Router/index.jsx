import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

//Components
import App from "../App.jsx";
import Location from "../Page/Location/Location.jsx";
import Error from "../Page/Error/Error.jsx";
import Layout from "../Components/Layout";
import Login from "../Page/Login/Login.jsx";
import DashboardPage from "../Page/DashboardPage/DashboardPage.jsx";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		errorElement: <Error />,
// 		children: [
// 			{
// 				path: "/location",
// 				element: <Location />,
// 			},
// 			{
// 				path: "/location/:id",
// 				element: <h1>bulaaaaaaaa</h1>,
// 			},
// 		],
// 	},
// ]);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />} errorElement={<Error />}>
			<Route path="/" element={<Location />}>
				<Route path="/:id" element={<h1>info</h1>} />
			</Route>
			<Route path="/about" />
			<Route path="/contacts" />
			<Route path="/login" element={<Login />} />
			<Route path="/dashboard" element={<DashboardPage />} />
		</Route>
	)
);

export default router;
