import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} JobReady</p>
        <div className="space-x-4">
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          <Link to="/terms" className="text-gray-600 hover:text-gray-800">Terms</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
