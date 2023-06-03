import Link from 'next/link'

export default function Footer() {

    return (
        <footer className="text-white-600 text-xl max-h">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">FSWD Course Site</span>
          </a>
          <p className="text-sm text-white-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white-900 sm:py-2 sm:mt-0 mt-4">© 2023 FSWD —
            <Link className="mr-5 hover:text-green-500" href="https://github.com/thisishuzaifa"> @thisishuzaifa</Link>
        </p>
        </div>
        </footer>

    )
}