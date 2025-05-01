'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white text-black p-4 shadow border">
      <div className="flex justify-between items-center">
        {/* Logo + Brand name on the left */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img 
            src="/images/whatbytelogo.png" 
            alt="WhatBytes Logo" 
            className="h-10 w-auto" 
          />
          <span className="text-xl font-bold">WhatBytes</span>
        </div>

        {/* Hamburger Menu (Visible on small screens) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* User profile section */}
        <div className="hidden md:flex items-center space-x-3 border rounded-2xl px-4 py-2 border-gray-200 cursor-pointer">
          <img
            src="/images/rounded.png"
            alt="Profile"
            className="rounded-full h-10 w-10 object-cover"
          />
          <span className="text-lg font-bold">Albert Adekanye</span>
        </div>
      </div>

      {/* Dropdown for mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 flex items-center space-x-3 border rounded-2xl px-4 py-2 border-gray-200">
          <img
            src="/images/rounded.png"
            alt="Profile"
            className="rounded-full h-10 w-10 object-cover"
          />
          <span className="text-lg font-bold">Albert Adekanye</span>
        </div>
      )}
    </nav>
  )
}
