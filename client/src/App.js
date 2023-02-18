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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route index element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
