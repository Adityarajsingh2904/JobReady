import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">JobReady</Link>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
