import React from "react";
import { Link } from "react-router-dom";


export default class Welcome extends React.Component {

	render() {

		return (



			<div>


				<img className="image" src="../../images/icon.jpeg" width="500" height="300" /><br></br><br />
				<Link padding="10px" to={"/signin"}>Sign in</Link>

			</div>
		);
	}
}

