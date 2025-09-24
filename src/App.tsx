import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { Navbar } from './components/NavigationBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from 'react-floating-whatsapp';

function App() {
  return (
    <div className="App container">
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Values />
      <Team />
      <Contact />
      <Footer />
      <FloatingWhatsApp
        phoneNumber='+263781107033'
        avatar='https://i.ibb.co/7W8f1YV/cas-logo.png'
        accountName='Champions Accounting Services'
      />
    </div>
  );
}

export default App;
