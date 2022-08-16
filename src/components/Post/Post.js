import Checkmark from "../../images/postsImg/icon/Checkmark.svg"
import Comment from "../../images/postsImg/icon/Comment.svg"
import Retweet from "../../images/postsImg/icon/Retweet.svg"
import Like from "../../images/postsImg/icon/Like.svg"
import Share from "../../images/postsImg/icon/Share.svg"
import { StyledPost } from "./Post.styled"


const Post = ({
	posts
}) => {

	return (
		<StyledPost>
			<div className="author-info">
				<img src={posts.authorPhoto} alt={posts.authorName} className="author-img" />
				<span>{posts.authorName}</span>
				<img src={Checkmark} alt="check-img" className="icon" />
				<span>{posts.authorNick}</span>
			</div>
			<div className="main-info">
				<p>{posts.postText}</p>
				<img src={posts.postImage} alt="post_img" className="main-img" />
			</div>
			<div className="post-reactions">
				<div className="comments">
					<img src={Comment} alt={posts.comments} className="icon" />
					<span>{posts.comments}</span>
				</div>
				<div className="retweet">
					<img src={Retweet} alt={posts.retweet} className="icon" />
					<span>{posts.retweet}</span>
				</div>
				<div className="likes">
					<img src={Like} alt={posts.likes} className="icon" />
					<span>{posts.likes}</span>
				</div>
				<div className="share">
					<img src={Share} alt="share-img" className="icon-share" />
				</div>
			</div>
		</StyledPost>
	)
};

export default Post;

