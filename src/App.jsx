import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AllTask from './pages/AllTask'
import NewTask from './pages/NewTask'
import EditTask from './pages/EditTask'
import Error404 from './pages/Error404'
import Navbar1 from './components/Navbar1';
import { AuthProvider } from './context/AuthContext';

function App() {
  

  return (
    <>
     <Router>
      <AuthProvider>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/tasks' element={<AllTask/>}/> 
        <Route path='/new' element={<NewTask/>}/> 
        <Route path='/edit' element={<EditTask/>}/> 
        <Route path='*' element={<Error404/>}/> 
      </Routes>

      </AuthProvider>
     </Router>
    </>
  )
}

export default App
