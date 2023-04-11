import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (

    <div className="fixed max-md:hidden">
      <div className="flex flex-col items-center w-16 py-6 ml-3 space-y-10 shadow-xl rounded-xl">
        <div className="space-y-48 rounded-md bg-gra">
          <ul>
            <li className="p-5">
              <Link to='/brands' >
                <i className="text-3xl fa-solid fa-tag"></i>
              </Link>
            </li>
            <li className="p-5">
              <Link to='/categories' >
                <i className="text-3xl fa-solid fa-list"></i>
              </Link>
            </li>
            <li className="p-5">
              <Link to='/banks' >
                <i className="text-3xl fa-solid fa-building-columns"></i>
              </Link>
            </li>
            <li className="p-5">
              <Link to='/vehicles' >
                <i className="text-3xl fa-solid fa-car"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
