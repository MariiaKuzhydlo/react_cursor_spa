import { Component } from "react";
import { AC_AUTHOR, AC_IMG, LP_AUTHOR, LP_IMG, PP_AUTHOR, PP_IMG } from "../constants/constImg";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Post from "./Post/Post";
import "./PostsPage.css"

export default class PostsPage extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<div className="content">
					<div className="contentPosts">
						<Post
							author={{
								name: "Antoine de Saint-Exupéry",
								photo: LP_AUTHOR,
								nickname: "antoine",
							}}
							content="But eyes are blind. You have to look with the heart."
							image={LP_IMG}
							comments={22}
							retweet={13}
							likes={290}
						/>
						<Post
							author={{
								name: "James Matthew Barrie",
								photo: PP_AUTHOR,
								nickname: "james",
							}}
							content="All the world is made of faith, and trust, and pixie dust. "
							image={PP_IMG}
							comments={31}
							retweet={13}
							likes={134}
						/>
						<Post
							author={{
								name: "Lewis Carroll",
								photo: AC_AUTHOR,
								nickname: "lewis",
							}}
							content="The adventures first, explanations take such a dreadful time."
							image={AC_IMG}
							comments={23}
							retweet={34}
							likes={156}
						/>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}