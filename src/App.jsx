import React, {  Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';

// Lazy load the Player component

function App() {
  return (
    <Router>
      <Routes>
        {/* Player routes (lazy-loaded and no layout) */}
        
        {/* Direct route to NotFound page without layout */}
        <Route path="/not-found" element={<NotFound />} />

        {/* Layout wrapper route */}
        <Route path='*'
          element={
            <div className="min-h-screen bg-gray-900">
              <Navbar />
              <div className="max-w-screen-xl mx-auto py-4">
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                  
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;