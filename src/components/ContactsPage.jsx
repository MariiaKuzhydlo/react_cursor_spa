import { Component } from "react";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default class ContactsPage extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<div className="content">
					<div className="contentContacts">
						<Contacts />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}