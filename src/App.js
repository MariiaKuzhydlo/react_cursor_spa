import { BrowserRouter as Router, Route } from "react-router-dom"
import ContactsPage from "./components/ContactsPage";
import HomePage from './components/HomePage';
import PhotosPage from "./components/PhotosPage";
import PostsPage from "./components/PostsPage";




function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" exact component={HomePage} />
				<Route path="/posts" component={PostsPage} />
				<Route path="/photos" component={PhotosPage} />
				<Route path="/contacts" component={ContactsPage} />
			</Router>
		</div>
	);
}

export default App;
