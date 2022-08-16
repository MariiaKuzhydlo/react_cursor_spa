import "./Photo.css"

const Photo = ({
	photos
}) => {
	return (
		<div className="photo">
			<img src={photos.photo} alt="photo_image" />
		</div >
	)

}

export default Photo