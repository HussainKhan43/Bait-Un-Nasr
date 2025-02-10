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
import Mahim from './pages/Mahim'
import Bandra from './pages/Bandra'
import Dharavi from './pages/Dharavi'
import Morland from './pages/Morland'
import Memonwada from './pages/Memonwada'
import JogeshwariE from './pages/JogeshwariE'
import Mumbra from './pages/Mumbra'
import Miraroad from './pages/Miraroad'
import JogeshwariW from './pages/JogeshwariW'



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
        <Route path="/Mahim" element={<Mahim />} />
        <Route path="/Bandra" element={<Bandra />} />
        <Route path="/Dharavi" element={<Dharavi />} />
        <Route path="/Morland" element={<Morland />} />
        <Route path="/Memonwada" element={<Memonwada/>} />
        <Route path="/JogeshwariE" element={<JogeshwariE/>} />
        <Route path="/JogeshwariW" element={<JogeshwariW/>} />
        <Route path="/Mumbra" element={<Mumbra/>} />
        <Route path="/Miraroad" element={<Miraroad/>} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />        
      </Routes>
    <Footer/>
    </>
  )
}

export default App