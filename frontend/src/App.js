import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// SEO Pages
import SEOIndia from './Pages/services/SEO/India'
import SEODelhi from './Pages/services/SEO/Delhi'
import SEOGurgaon from './Pages/services/SEO/Gurgaon'
import SEONoida from './Pages/services/SEO/Noida'

//Software Development
import SDIndia from './Pages/services/SoftwareDevelopment/India'
import SDDelhi from './Pages/services/SoftwareDevelopment/Delhi'
import SDGurgaon from './Pages/services/SoftwareDevelopment/Gurgaon'
import SDNoida from './Pages/services/SoftwareDevelopment/Noida'
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      {/* seo services */}
        <Route path='/services/seo-services-india' element={<SEOIndia/>}></Route>
        <Route path='/services/seo-services-delhi' element={<SEODelhi/>}></Route>
        <Route path='/services/seo-services-gurgaon' element={<SEOGurgaon/>}></Route>
        <Route path='/services/seo-services-noida' element={<SEONoida/>}></Route>

        {/* software development service */}
        <Route path='/services/software-development-india' element={<SDIndia/>}></Route>
        <Route path='/services/software-development-delhi' element={<SDDelhi/>}></Route>
        <Route path='/services/software-development-gurgaon' element={<SDGurgaon/>}></Route>
        <Route path='/services/software-development-noida' element={<SDNoida/>}></Route>



      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
