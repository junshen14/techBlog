import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/Link'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              ZEETA
            </span>
          </Link>
        </div>
        <div className="float-left md:contents">
          {categories.map((eachCategory) => (
            <Link
              key={eachCategory.slug}
              href={`/category/${eachCategory.slug}`}
            >
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {eachCategory.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
