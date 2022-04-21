import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, PostWidget, Category } from '../components/index.js'
import { getPost } from '../services/index'

const post = [
  { title: 'React Testing', excerpt: 'iewnfnweine' },
  { title: 'Next js testing', excerpt: 'ewinweinemowenien' },
  { title: 'React Testing', excerpt: 'iewnfnweine' },
  { title: 'Next js testing', excerpt: 'ewinweinemowenien' },
  { title: 'React Testing', excerpt: 'iewnfnweine' },
  { title: 'Next js testing', excerpt: 'ewinweinemowenien' },
  { title: 'React Testing', excerpt: 'iewnfnweine' },
  { title: 'Next js testing', excerpt: 'ewinweinemowenien' },
  { title: 'React Testing', excerpt: 'iewnfnweine' },
  { title: 'Next js testing', excerpt: 'ewinweinemowenien' },
  { title: 'React Testing', excerpt: 'iewnfnweine' },
  { title: 'Next js testing', excerpt: 'ewinweinemowenien' },
]

const Home: NextPage = ({ posts }) => {
  console.log(posts)
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((eachPost, index) => (
            <PostCard post={eachPost} key={eachPost.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Category />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPost()) || []
  return {
    props: { posts },
  }
}

export default Home
