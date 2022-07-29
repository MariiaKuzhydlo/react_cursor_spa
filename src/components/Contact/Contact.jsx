import Male from "./../../images/contactsImg/Male.svg"
import Female from "./../../images/contactsImg/Female.svg"
import Unknow from "./../../images/contactsImg/Unknow.svg"
import "./Contact.css"
const Contact = (state) => {
	const gender = state.contacts.gender
	return (
		<div className="containerContact">
			<div className="ava">
				<img src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="avatar" className="avatar"></img>
			</div>
			<div className="contact_info">
				<div className="name">{`${state.contacts.firstName} ${state.contacts.lastName}`}</div>
				<div className="phone">{state.contacts.phone}</div>
			</div>
			<div className="gender_icon">
				{
					gender === "male" ? (
						<img src={Male} alt="male" className="icon"></img>
					) : gender === "female" ? (
						<img src={Female} alt="female" className="icon"></img>
					) : (
						<img src={Unknow} alt="unisex" className="icon"></img>
					)
				}
			</div>
		</div>
	)
}

export default Contact