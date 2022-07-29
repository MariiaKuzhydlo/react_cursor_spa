import Checkmark from "../../images/postsImg/icon/Checkmark.svg"
import Comment from "../../images/postsImg/icon/Comment.svg"
import Retweet from "../../images/postsImg/icon/Retweet.svg"
import Like from "../../images/postsImg/icon/Like.svg"
import Share from "../../images/postsImg/icon/Share.svg"
import { StyledPost } from "./Post.styled"


const Post = ({
	author,
	content,
	image,
	comments,
	retweet,
	likes,
}) => {
	const { photo, name, nickname } = author;

	return (
		<StyledPost>
			<div className="author-info">
				<img src={photo} alt={name} className="author-img" />
				<span>{name}</span>
				<img src={Checkmark} alt="check-img" className="icon" />
				<span>{nickname}</span>
			</div>
			<div className="main-info">
				<p>{content}</p>
				<img src={image} alt="post_img" className="main-img" />
			</div>
			<div className="post-reactions">
				<div className="comments">
					<img src={Comment} alt={comments} className="icon" />
					<span>{comments}</span>
				</div>
				<div className="retweet">
					<img src={Retweet} alt={retweet} className="icon" />
					<span>{retweet}</span>
				</div>
				<div className="likes">
					<img src={Like} alt={likes} className="icon" />
					<span>{likes}</span>
				</div>
				<div className="share">
					<img src={Share} alt="share-img" className="icon-share" />
				</div>
			</div>
		</StyledPost>
	)
};

export default Post;

