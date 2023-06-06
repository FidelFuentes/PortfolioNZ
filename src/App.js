import './App.css';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Experience from './views/Experience/Experience';
import Landing from './views/Landing/Landing';
import Work from './views/Work/Projects';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="content">
        <Landing />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
