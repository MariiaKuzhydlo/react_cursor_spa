import { Component } from "react";
import { PHOTO1, PHOTO2, PHOTO3, PHOTO4, PHOTO5, PHOTO6, PHOTO7, PHOTO8 } from "../constants/constImg";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Photo from "./Photo/Photo";
import "./PhotosPage.css"

export default class PhotosPage extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<div className="content">
					<div className="contentPhoto">
						<Photo image={PHOTO1} />
						<Photo image={PHOTO2} />
						<Photo image={PHOTO3} />
						<Photo image={PHOTO4} />
						<Photo image={PHOTO5} />
						<Photo image={PHOTO6} />
						<Photo image={PHOTO7} />
						<Photo image={PHOTO8} />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}