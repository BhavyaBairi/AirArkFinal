import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Vertical from './Components/Vertical/Vertical';
import Footer from './Components/Footer/Footer';
import Future from './Components/Future/Future';
import Antigravity from './Components/Antigravity/Antigravity';
import Einsten from './Components/Einsten/Einsten';
function App() {
  return (
    <>
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={< Navbar />} />
          <Route path='/' element={< Home />} />
          <Route path='/home' index element={< Vertical />}/>
          <Route path='contact' element={< Footer />}/>
          <Route path='about' element={<Future/>}/>
          <Route path='about' element={<Einsten />}/>
          <Route path='about' element={< Antigravity/>}/>
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Home />
      <Vertical />
      <Future />
      <Antigravity />
      <Einsten />
      <Footer />
    </div>
    </>
    
  );
}

export default App;
