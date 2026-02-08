
import Hero from './components/Hero';
import About from './components/About';
import Diagnosis from './components/Diagnosis';
import Benefits from './components/Benefits';
import Deliverables from './components/Deliverables';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Hero />
      <About />
      <Diagnosis />
      <Benefits />
      <Deliverables />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
