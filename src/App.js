import React from 'react';
import './App.css';
import Footer from './Components/Footer';

// Components
import Header from './Components/Header.jsx';
import MainPage from './Components/MainPage.jsx';
import SubSection from './Components/SubSection';

const App = () => {
  return (<>
    <Header />
    <MainPage />
    <SubSection />
    <Footer />
  </>
  );
};

export default App;