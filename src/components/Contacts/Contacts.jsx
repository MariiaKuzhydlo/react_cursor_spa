import Contact from "../Contact/Contact";
import { contacts } from "../../constants/constContacts";
import { useState, useEffect } from "react";
import Male from "./../../images/contactsImg/Male.svg"
import Female from "./../../images/contactsImg/Female.svg"
import Unknow from "./../../images/contactsImg/Unknow.svg"
import "./Contacts.css"

const Contacts = () => {
	const [contactList, setContactList] = useState(contacts);
	const [search, setSearch] = useState('');
	const [searchGender, setSearchGender] = useState({ male: true, female: true, unknown: true });

	useEffect(() => {
		setContactList(filteredContacts());
	}, [search, searchGender])

	const filteredContacts = () => {
		const filteredByGender = contacts.filter(contact => searchGender[contact.gender]
			|| (!(contact.gender in searchGender) && searchGender.unknown));
		const searchResult = filteredByGender.filter(contact => `${contact.firstName} ${contact.lastName} ${contact.phone}`.toLowerCase().includes(search));
		return searchResult;
	}

	const handleSearchChange = (event) => setSearch(event.target.value.toLowerCase());
	const handleSearchByGender = (event) => {
		const target = event.target;
		setSearchGender({
			...searchGender,
			[event.target.name]: target.checked
		});
	}

	return (
		<div className="wrapper">
			<div className="search"  >
				<input type="text" placeholder="Search" className="text-search"
					onChange={handleSearchChange}
					value={search} />
				<div className="checkbox">
					<div>
						<input name="female" type="checkbox"
							checked={searchGender.female}
							onChange={handleSearchByGender} />
						<img src={Female} className='icon' />

					</div>
					<div>
						<input name="male" type="checkbox"
							checked={searchGender.male}
							onChange={handleSearchByGender} />
						<img src={Male} className='icon' />
					</div>
					<div>
						<input name="unknown" type="checkbox"
							checked={searchGender.unknown}
							onChange={handleSearchByGender} />
						<img src={Unknow} className='icon' />
					</div>
				</div>
			</div>
			{contactList.map((el) => { return <Contact contacts={el} key={el} /> })}
		</div>
	)
};

export default Contacts