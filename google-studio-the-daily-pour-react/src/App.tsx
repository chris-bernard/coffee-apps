import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './screens/Home';
import Brewing from './screens/Brewing';
import Bean from './screens/Bean';
import Reviews from './screens/Reviews';
import Recipes from './screens/Recipes';
import Culture from './screens/Culture';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col paper-grain text-on-surface">
        <Navbar />
        <main className="flex-grow pt-32 w-full max-w-7xl mx-auto px-6 mb-stack-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brewing" element={<Brewing />} />
            <Route path="/bean" element={<Bean />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/culture" element={<Culture />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
