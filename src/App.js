import Nav from './components/Nav.js';
import './App.css';
import HomePageCarousel from './components/HomePageCarousel.js';
import HomePage from './components/HomePage.js';

function App() {
  return (
    <div className="App">
        <div>
          <Nav />
        </div>
        <div>
          <HomePageCarousel />
        </div>
        <div>
            <HomePage />
        </div>
    </div>
  );
}

export default App;
