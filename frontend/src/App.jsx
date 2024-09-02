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
        {/* General route : Anyone can access this page */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/" element={<Home />} />

        {/* Without Role-based ProtectedRoute : Any authorized users can access this route */}

        {/* <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } /> */}

        {/* Admin Routes */}

        {/* <Route path="/" element={
          <ProtectedRoute requiredRole="admin">
            <Home />
          </ProtectedRoute>
        } /> */}

        {/* Instructor Routes */}

        {/* <Route path="/admin/dashboard" element={
          <ProtectedRoute requiredRole="instructor">
            <AdminDashboard />
          </ProtectedRoute>
        } /> */}

        {/* Student Routes */}
        {/* <Route path="/admin/dashboard" element={
          <ProtectedRoute requiredRole="student">
            <AdminDashboard />
          </ProtectedRoute>
        } /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
