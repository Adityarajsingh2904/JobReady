import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-gray-50 py-20" id="hero">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Land Your Dream Job Faster</h1>
          <p className="text-gray-600 mb-6">Track applications, prep smart, and get hired.</p>
          <Link to="/register" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md">Get Started</Link>
        </div>
        <img className="w-full rounded-md" src="https://via.placeholder.com/400x300" alt="Job hunt" />
      </div>
    </section>
  )
}

export default Hero
