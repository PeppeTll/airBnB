import styles from "./index.module.scss";

//Components
import LocationList from "../../Components/LocationList";
import { Outlet, useLocation } from "react-router-dom";

export default function () {
	const location = useLocation();

	return (
		<>
			{location.pathname === "/" ? (
				<>
					{" "}
					<LocationList />{" "}
				</>
			) : (
				<>
					{" "}
					<Outlet />{" "}
				</>
			)}
		</>
	);
}
