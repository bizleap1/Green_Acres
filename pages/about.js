        import Header from '../components/Header'
        import Footer from '../components/Footer'

        export default function About() {
          return (
<div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-1 container mx-auto px-6 py-16">
    <h1 className="text-3xl font-bold mb-4">About Green Acres Realty</h1>
    <p className="mb-4">We are a local real estate agency focused on transparent transactions, excellent customer support, and curated listings.</p>
    <h2 className="text-2xl font-semibold mt-6 mb-2">Our Services</h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>Property Sales & Buying</li>
      <li>Rental Management</li>
      <li>Property Valuation & Consultation</li>
    </ul>
  </main>
  <Footer />
</div>
          )
        }
