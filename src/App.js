import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom"
import ContactsPage from "./pages/ContactsPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from './pages/HomePage';
import PhotosPage from "./pages/PhotosPage";
import PostsPage from "./pages/PostsPage";




function App() {
	return (
		<div className="App">
			<HashRouter>
				<div className="container">
					<Header />
					<Route path="/" exact component={HomePage} />
					<Route path="/posts" component={PostsPage} />
					<Route path="/photos" component={PhotosPage} />
					<Route path="/contacts" component={ContactsPage} />
					<Footer />
				</div>
			</HashRouter>
		</div >
	);
}

export default App;
