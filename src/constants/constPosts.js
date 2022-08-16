import { AC_AUTHOR, AC_IMG, LP_AUTHOR, LP_IMG, PP_AUTHOR, PP_IMG } from "./constImg";

export const posts = [
	{
		authorPhoto: LP_AUTHOR,
		authorName: "Antoine de Saint-Exupéry",
		authorNick: "antoine",
		postText: "But eyes are blind. You have to look with the heart.",
		postImage: LP_IMG,
		comments: "22",
		retweets: "13",
		likes: "290"
	},
	{
		authorPhoto: PP_AUTHOR,
		authorName: "James Matthew Barrie",
		authorNick: "james",
		postText: "All the world is made of faith, and trust, and pixie dust. ",
		postImage: PP_IMG,
		comments: "31",
		retweets: "13",
		likes: "134"
	},
	{
		authorPhoto: AC_AUTHOR,
		authorName: "Lewis Carroll",
		authorNick: "lewis",
		postText: "The adventures first, explanations take such a dreadful time.",
		postImage: AC_IMG,
		comments: "23",
		retweets: "34",
		likes: "156"
	}
]