import './App.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import About from './components/About';
import ClientServices from './components/ClientServices';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/projects" exact element={<Projects />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/clientservices" exact element={<ClientServices />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
