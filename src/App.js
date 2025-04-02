import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './shared/components/header';
import Home from './modules/home';
import About_us from './modules/about-us';
import Mycontext from './shared/configuration';
import { useState } from 'react';

function App() {
  const[demo,Setdemo] = useState(0);
  return (
    <div>
      {/* <Mycontext.Provider value={{demo,Setdemo}}> */}
        {/* <Home /> */}
        <About_us/>
      {/* </Mycontext.Provider> */}
    </div>
  );
}

export default App;
