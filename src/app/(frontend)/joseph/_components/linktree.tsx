import React from 'react'
import './styles.css'

export default function LinkTree() {
  const links = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Portfolio', url: 'https://yourportfolio.com' },
  ]

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <h1>My LinkTree</h1>
      {links.map((link, index) => (
        <li key={index} className="list-none m-2 p-2 ">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
            rectangle bg-white shadow-md rounded-lg p-4 text-center 
            hover:bg-gray-200 transition"
          >
            {link.name}
          </a>
        </li>
      ))}
    </div>
  )
}
