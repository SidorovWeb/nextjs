import { IPosts } from "@/types/types"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import React from "react"

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <div>
        <h1>Post</h1>
        <div className='post'>
          {post.userId}) {`${post.body.slice(0, 90)}...`}
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
  const data: IPosts[] = await response.json()

  const paths = data.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{ post: IPosts }> = async (
  context
) => {
  const { id } = context.params as { id: string }
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  const data: IPosts = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: data,
    },
  }
}
