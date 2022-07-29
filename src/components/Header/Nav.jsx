import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

export default class Nav extends Component {
	render() {
		return (
			<div>
				<ul className="nav">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/posts">Posts</NavLink></li>
					<li><NavLink to="/photos">Photos</NavLink></li>
					<li><NavLink to="/contacts">Contacts</NavLink></li>
				</ul>
			</div>
		)
	}
}
