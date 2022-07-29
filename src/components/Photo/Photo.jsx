import "./Photo.css"

const Photo = ({
	image
}) => {
	return (
		<div className="photo">
			<img src={image} alt="photo_image" />
		</div >
	)

}

export default Photo