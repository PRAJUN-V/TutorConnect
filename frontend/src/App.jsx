import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import { Home } from "./pages/user/Home"
import { Login } from "./pages/authentication/Login"
import { Register } from "./pages/authentication/Register"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* General route : Any authorized users can access this route */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />

        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
