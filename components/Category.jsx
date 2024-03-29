import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Category = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold ">Categories</h3>
      {categories.map((aCategory) => (
        <Link key={aCategory.slug} href={`/category/${aCategory.slug}`}>
          <span className="mb-3 block cursor-pointer pb-3 transition duration-100 hover:text-red-500">
            {aCategory.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Category
