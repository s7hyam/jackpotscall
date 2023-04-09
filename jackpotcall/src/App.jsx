import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import './App.css'
import Footer from './Components/Footer'
import EqtMarket from './Components/Services/EqtMarket'
import Aboutus from './Components/Aboutus'
import Stockfutures from './Components/Services/Stockfutures'
import ComodityMarket from './Components/Services/ComodityMarket'
import StockOptions from './Components/Services/StockOptions'
import NiftyOption from './Components/Services/NiftyOption'
import NiftyFuture from './Components/Services/NiftyFuture'
import BankniftyFuture from './Components/Services/BankniftyFuture'
import BankniftyOption from './Components/Services/BankniftyOption'
import HniServices from './Components/Services/HniServices'
import Contact from './Components/Contact'
import Tos from './Components/Tos'
import Disclaimer from './Components/Disclaimer'
import PrivacyPolicy from './Components/PrivacyPolicy'
import Refund from './Components/Refund'
import Shipping from './Components/Shipping'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/equity-market' element={<EqtMarket />} />
          <Route path='/stock-futures' element={<Stockfutures />} />
          <Route path='/comodity-market' element={<ComodityMarket />} />
          <Route path='/stock-options' element={<StockOptions />} />
          <Route path='/nifty-options' element={<NiftyOption />} />
          <Route path='/nifty-futures' element={<NiftyFuture />} />
          <Route path='/banknifty-options' element={<BankniftyOption />} />
          <Route path='/banknifty-futures' element={<BankniftyFuture />} />
          <Route path='/hni-services' element={<HniServices />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/tos' element={<Tos />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/cancellation-refund' element={<Refund />} />
          <Route path='/shipping' element={<Shipping />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
