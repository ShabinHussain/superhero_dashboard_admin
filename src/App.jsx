import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import Header from './components/Header'


function App() {

  return (
    <>
    <Routes>
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Login register/>}/> {/*register key register content*/}
      <Route path='/header' element={<Header/>}/>




    </Routes>
    </>
  )
}

export default App
