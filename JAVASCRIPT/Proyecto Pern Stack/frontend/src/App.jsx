import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LogInPage from './pages/LogInPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import TareasPage from './pages/TareasPage'
import TareasFromPage from './pages/TareasFromPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/login" element={<LogInPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/perfil" element={<ProfilePage/>} />
      <Route path="/tareas" element={<TareasPage/>} />
      <Route path="/tareas/crear" element={<TareasFromPage/>} />
      <Route path="/tareas/editar/:id" element={<TareasFromPage/>} />


    </Routes>
  )
}

export default App