import { Component } from "react";
import "./HomePage.css"


export default class HomePage extends Component {
	render() {
		return (
			<div className="content">
				<div className="contentHome">
					<div className="homeInfo">
						<h1>Hi, guys!</h1>
						<p>My name is Mariia and this is my new homework</p>
					</div>
					<img className="homeImg" src="https://careers.easternpeak.com/wp-content/uploads/2022/02/Populiarni-movy-prohramuvannia-sered-rozrobnykiv.jpg" alt="img" />
				</div>
			</div>
		)
	}
}