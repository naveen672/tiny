import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import EmbeddedSystems from './pages/services/EmbeddedSystems';
import AIMachineLearning from './pages/services/AIMachineLearning';
import EdgeComputing from './pages/services/EdgeComputing';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash screen every time (for testing/demo purposes)
    // To show only on first visit, uncomment the sessionStorage code below
    // const hasVisited = sessionStorage.getItem('hasVisited');
    // if (hasVisited) {
    //   setShowSplash(false);
    // } else {
    //   sessionStorage.setItem('hasVisited', 'true');
    // }
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      
      {!showSplash && (
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services/embedded-systems" element={<EmbeddedSystems />} />
                <Route path="/services/ai-machine-learning" element={<AIMachineLearning />} />
                <Route path="/services/edge-computing" element={<EdgeComputing />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
