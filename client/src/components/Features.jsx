function FeatureCard({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  )
}

function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <FeatureCard title="Job Application Tracker">Track all your applications in one place.</FeatureCard>
          <FeatureCard title="Resume & Prep Tracker">Organize resumes and interview prep.</FeatureCard>
          <FeatureCard title="Weekly Reports">Get insights on your job search progress.</FeatureCard>
          <FeatureCard title="Dashboard Insights">Visualize data with helpful charts.</FeatureCard>
        </div>
      </div>
    </section>
  )
}

export default Features
