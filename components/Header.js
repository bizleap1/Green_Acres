        import Link from 'next/link'

        export default function Header() {
          return (
<header className="bg-white shadow">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white font-bold">GA</div>
      <Link href="/" className="font-semibold text-lg">Green Acres Realty</Link>
    </div>
    <nav className="space-x-4 hidden md:block">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </div>
</header>
          )
        }
