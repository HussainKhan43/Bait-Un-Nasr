import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Deposit from './pages/Deposit'
import Loan from './pages/Loan'
import Footer from './component/Footer'
import { Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';
import Members from './pages/Members';
import Directors from './pages/Directors';
import ExDirectors from './pages/ExDirectors';
import Activities from './pages/Activities'
import Media from './pages/Media';
import Progress from './pages/Progress';



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Directors" element={<Directors />} />
        <Route path="/ExDirectors" element={<ExDirectors />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/Progress" element={<Progress/>} />

        <Route path="/Deposit" element={<Deposit />} />
        <Route path="/Loan" element={<Loan />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />        
      </Routes>
    <Footer/>
    </>
  )
}

export default App