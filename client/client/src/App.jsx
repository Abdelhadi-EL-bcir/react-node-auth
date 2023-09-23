import { BrowserRouter , Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './compoenets/Home';
import Register from './compoenets/Register';
import Login from './compoenets/Login';
function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
