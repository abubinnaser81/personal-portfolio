import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projets';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Newsletter } from './components/Newsletter';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
