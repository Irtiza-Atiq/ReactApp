import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Homepg from './components/Homepg';

function App() {
  return (
    <>
    
    
{/* <Navbar title="Age Estimation" abt ="About Us" /> */}
{/* <Navbar  abt ="About Us" /> */}
<div className="container my-4"> 


  <BrowserRouter>

  <Routes>
    <Route path = "/Nav" element = {<Navbar/>}/>

   <Route path ="/" element={<Homepg/>}/>
   <Route path ="/about" element={<About/>}/>
   <Route path ="/textform" element={<TextForm/>}/>

  /
  </Routes>
  </BrowserRouter>
</div>

{/* <div className="container">
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-primary">Primary</button>
</div> */}

    </>
    
  );
}

export default App;
