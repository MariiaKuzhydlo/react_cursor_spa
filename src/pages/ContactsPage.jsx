import { Component } from "react";
import Contacts from "../components/Contacts/Contacts";


export default class ContactsPage extends Component {
	render() {
		return (
			<div className="content">
				<div className="contentContacts">
					<Contacts />
				</div>
			</div>
		)
	}
}