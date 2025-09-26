        import Head from 'next/head'
        import Header from '../components/Header'
        import Footer from '../components/Footer'

        export default function Home() {
          return (
            <div className="min-h-screen flex flex-col">
  <Head>
    <title>Green Acres Realty</title>
    <meta name="description" content="Green Acres Realty - Find your home" />
  </Head>
  <Header />
  <main className="flex-1 container mx-auto px-6 py-16">
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-extrabold mb-4">Green Acres Realty</h1>
        <p className="text-lg mb-6">Helping you find the perfect property — residential, commercial and investment listings with trusted service.</p>
        <div className="flex gap-4">
          <a href="/about" className="px-5 py-3 bg-green-600 text-white rounded-md">About Us</a>
          <a href="/contact" className="px-5 py-3 border border-green-600 text-green-600 rounded-md">Contact</a>
        </div>
      </div>
      
    </section>
  </main>
  <Footer />
</div>
          )
        }
