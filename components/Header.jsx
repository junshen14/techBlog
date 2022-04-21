import React, { useContext } from 'react'

import Link from 'next/Link'

const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web Development', slug: 'web-dev' },
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="float-left md:contents">
          {categories.map((eachCategory) => (
            <Link
              key={eachCategory.slug}
              href={`/category/${eachCategory.slug}`}
            >
              <span className="cursor-pinter mt-2 ml-4 align-middle font-semibold text-white md:float-right">
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
