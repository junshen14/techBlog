import React from 'react'

import { getPost, getPostDetail } from '../../services'
import {
  PostDetail,
  Category,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from '../../components'

const PostDetails = ({ post }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="col-span-1 lg:col-span-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Category />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetail(params.slug)
  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const posts = await getPost()

  return {
    paths: posts.map(({ node: { slug } }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}
