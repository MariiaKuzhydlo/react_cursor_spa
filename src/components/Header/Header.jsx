import { Component } from "react";
import Nav from "../Nav/Nav";
import ReactLogo from "../../images/ReactLogo.png"
import "./Header.css"


export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<img src={ReactLogo} alt="logo" />
				<Nav />
			</div >
		)
	}
}