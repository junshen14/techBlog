import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [slug])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold ">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              className="rounded-full align-middle"
              style={{ width: 60, height: 40 }}
              src={post.featuredImage.url}
            />
          </div>

          <div className="ml-4 flex-grow">
            <p className="text-gray-500">
              {moment(post.createdAt).format('MMM DD YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md">
              <span className=" cursor-pointer transition duration-100 hover:text-red-500">
                {post.title}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
