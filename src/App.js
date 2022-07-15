import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home";
import Lodges from "./pages/lodges/Lodges";
import View_of_Tented from "./pages/view_Tented/View_of_Tented"
import View_of_Canopy from "./pages/view_Canopy/view_of_Canopy"
import View_of_Family from "./pages/view_Family/View_of_Family"
import Sign_in from "./pages/signin/Sign_in"
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
        <Route path="/Lodges" element={<Lodges/>}/>
        </Routes>
        <Routes>
        <Route path="/Home" element={<Home/>}/>
        </Routes>
        <Routes>
        <Route path="View_of_Tented" element={<View_of_Tented/>}/>
        </Routes>
        <Routes>
        <Route path="View_of_Canopy" element={<View_of_Canopy/>}/>
        </Routes>
        <Routes>
        <Route path="View_of_Family" element={<View_of_Family/>}/>
        </Routes>
        <Routes>
        <Route path="Sign_in" element={<Sign_in/>}/>
        </Routes>
    </BrowserRouter>
    
    </div>
  )
}

 




export default App;