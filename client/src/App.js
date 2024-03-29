import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './css/master.scss';
import Home from './components/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Services from './components/Services';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Portfolio from './components/Portfolio';
import { bedRoomArr, kidsRoomArr, studyRoomArr, ukitchenRoomArr } from './images/images';
import ServicesDetail from './components/ServicesDetail';
import { useState } from 'react';
function App() { 
  const [serviceSelected, setServiceSelected]=useState({})
  const selctedService =(data)=>{
    setServiceSelected(data);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route index element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/services/kidsroom' element={<Services content={kidsRoomArr} serviceClick={selctedService}/>} />
          <Route path='/services/bedroom' element={<Services content={bedRoomArr} serviceClick={selctedService}/>} />
          <Route path='/services/studyroom' element={<Services content={studyRoomArr} serviceClick={selctedService}/>} />
          <Route path='/services/ukitchenroom' element={<Services content={ukitchenRoomArr} serviceClick={selctedService}/>} />
          {/* <Route path='/servicedetail' element={<ServicesDetail serviceSelected={serviceSelected}/>} />
          <Route path='/portfolio' element={<Portfolio />} /> */}
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
