import { GetStaticProps } from 'next'
import { FC } from 'react'
import { Layout } from '../components/Layout'
import { Post } from '../components/Post'
import { getAllPostsData } from '../lib/fetch'
import { POST } from '../types/Types'

interface STATICPROPS {
  posts: POST[]
}

const BlogPage: FC<STATICPROPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className="text-4xl mb-10">blog page</p>
      <ul>
        {posts && posts.map((post) => <Post key={post.id} {...post} />)}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: {
      posts,
    },
  }
}
