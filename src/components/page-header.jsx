import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Speakers', href: '/' },
  { label: 'Agenda', href: '/' },
  { label: 'Organizers', href: '/' },
]

export default function PageHeader() {
  return (
    <header className=''>
      <div className='flex items-baseline flex-wrap gap-x-16 gap-y-2 py-6 px-6 mx-auto max-w-6xl'>
        <Link href='/'>
          <a className='text-lg'>
            <h1 className='text-xl'>
              #devfest<span className='text-blue-600'>casablanca</span>
            </h1>
          </a>
        </Link>

        {/* <nav className='flex gap-x-4'>
          {navLinks.map(({ href, label }) => (
            <Link key={label} href={href}>
              <a className='text-lg'>{label}</a>
            </Link>
          ))}
        </nav> */}
      </div>
    </header>
  )
}
