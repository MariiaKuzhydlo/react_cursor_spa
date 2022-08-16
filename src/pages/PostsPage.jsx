import { Component } from "react";
import { posts } from "../constants/constPosts";
import Post from "../components/Post/Post";
import "./PostsPage.css"

export default class PostsPage extends Component {
	render() {
		return (
			<div className="content">
				<div className="contentPosts">
					{posts.map((el) => { return <Post posts={el} /> })}
				</div>
			</div>
		)
	}
}