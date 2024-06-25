"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <header className="bg-transparent text-gray-100 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex items-center text-white hover:text-green-400 transition-colors duration-300 mb-4 md:mb-0"
        >
          <span className="ml-3 text-2xl font-light">
            huzzy&apos;s brain dump
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-6">
          <Link
            className="hover:text-green-400 transition-colors duration-300"
            href="/about"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
