import React from 'react';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Service from './component/service/Service';
import Product from './component/product/Product';
import Contact from './component/Contact';
import About from './component/about/About';
import Support from './component/support/Support';
import Admin from './component/admin_login/Admin';
import User from './component/userlogin/User';
import Sigup from './component/signup/Sigup';
import Addata from './component/serviceadmin/Addata';
import Carrer from './component/carrer/Carrer';
import Verify from './component/support/verify/Verify';
import Header2 from './component/header/Header2';
import { UserProvider } from './component/userlogin/Usercontext';



function App() {
  return (
    <>
      <UserProvider>
    <div className="site-container">
    
    <BrowserRouter>
    <div className="header1">
    <Header/>
    </div>
    <div className="header2">
      <Header2/>
    </div>
   
   
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Service' element={<Service/>} />
    <Route path='/products' element={<Product/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/career' element={<Carrer/>} />
    <Route path='/verify' element={<Verify/>} />
    <Route  path='/admin' element={<Admin/>} />
    <Route  path='/user' element={<User/>} />
    <Route  path='/sign' element={<Sigup/>} />
    <Route  path='/login' element={<User/>} />
    <Route  path='/addata' element={<Addata/>} />
    <Route  path='/support' element={<Support/>} />

    



</Routes>
    </BrowserRouter>
   
    
    <Footer/>
    </div>
    </UserProvider>
    </>
  );
}

export default App;
