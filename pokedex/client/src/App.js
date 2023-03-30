import { Route, Routes, useLocation } from 'react-router-dom';
import Landing  from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Forms/Forms';
import Navbar from './components/Navbar/Navbar';

function App() {
  const location = useLocation();

  return (
    <>
    {location.pathname !== '/' && <Navbar/>}
    
     <Routes>      
       <Route path='/' element={<Landing/>}></Route>
       <Route path='/home' element={<Home/>} ></Route>
       <Route path='/create' element={<Form/>} ></Route>
       <Route path='/detail/:id' element={<Detail/>} ></Route>
     </Routes>
    </>
    
  );
}

export default App;
