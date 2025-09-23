import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Navbar } from './components/NavigationBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Values />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
