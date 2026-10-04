import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">

                {/* Luxurious Gradient Logo */}
                <Link
                    to='/'
                    className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
                >
                    Media Search
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-3 sm:gap-6">
                    <Link
                        to='/'
                        className="px-4 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-200"
                    >
                        Search
                    </Link>

                    <Link
                        to='/ccollection'
                        className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200"
                    >
                        Collection
                    </Link>
                </nav>

            </div>
        </header>
    )
}

export default Navbar