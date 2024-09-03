import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import { Home } from "./pages/user/Home"
import { Login } from "./pages/authentication/Login"
import { Register } from "./pages/authentication/Register"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { InstructorDashboard } from "./pages/instructor/InstructorDashboard"

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

        <Route path="/admin/dashboard" element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />

        {/* Instructor Routes */}

        <Route path="/instructor/dashboard" element={
          <ProtectedRoute requiredRole="instructor">
            <InstructorDashboard />
          </ProtectedRoute>
        } />

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
