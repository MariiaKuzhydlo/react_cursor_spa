import { photos } from "../constants/constPhoto";
import Photo from "../components/Photo/Photo";
import "./PhotosPage.css"

const PhotosPage = () => {
	return (
		<div className="content">
			<div className="contentPhoto">
				{photos.map((el) => { return <Photo photos={el} /> })}
			</div>
		</div>
	)
}

export default PhotosPage;