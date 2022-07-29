import { Component } from "react";
import "./Footer.css"
import CursorLogo from "../../images/CursorLogo.png"


export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<p>HW17 ReactJS. SPA. Navigation  </p>
				<img src={CursorLogo} alt="logo" />
			</div >
		)
	}
}