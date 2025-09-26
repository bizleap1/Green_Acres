        import Header from '../components/Header'
        import Footer from '../components/Footer'

        export default function Contact() {
          return (
<div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-1 container mx-auto px-6 py-16">
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <p className="mb-6">Reach out to schedule a viewing or ask any questions.</p>
    <form className="max-w-md space-y-4">
      <input className="w-full p-3 border rounded" placeholder="Your name" />
      <input className="w-full p-3 border rounded" placeholder="Email" />
      <textarea className="w-full p-3 border rounded" rows="4" placeholder="Message" />
      <button className="px-5 py-3 bg-green-600 text-white rounded-md">Send</button>
    </form>
  </main>
  <Footer />
</div>
          )
        }
