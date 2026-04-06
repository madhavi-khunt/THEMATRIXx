
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'; // Path to your Navbar component
import Footer from './components/Footer'; // Path to your Footer component
import './App.css';
import Home from './pages/Home'; // Path to your Home page component



function App() {
  return (
    <Router>
      <Navbar />

     <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/academics" element={<Academics />} /> */}
      {/* <Route path="/admissions" element={<Admissions />} /> */}
      {/* Add a 404 Not Found route */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;