import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';

const App = () => {
  return (
    <>
       <Navbar />
      <div > {/* Adjust padding as needed */}
        <HomeSection />
      </div>
    </>
  );
}

export default App;
