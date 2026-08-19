import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
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
import ScrollToTopButton from './components/ScrollToTopButton';

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services/embedded-systems" element={<PageTransition><EmbeddedSystems /></PageTransition>} />
        <Route path="/services/ai-machine-learning" element={<PageTransition><AIMachineLearning /></PageTransition>} />
        <Route path="/services/edge-computing" element={<PageTransition><EdgeComputing /></PageTransition>} />
        <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

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
          <ScrollProgressBar />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
            <ScrollToTopButton />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
