import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Sold from './pages/sold';
import Testimonials from './pages/testimonials';
import Search from './pages/search';
import Buyers from './pages/buyers';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} />
    <Route path='/sold' element={<Sold/>} />
    <Route path='/testimonials' element={<Testimonials/>} />
    <Route path='/search' element={<Search/>} />
    <Route path='/buyers' element={<Buyers/>} />
	</Routes>
	</Router>
);
}

export default App;
