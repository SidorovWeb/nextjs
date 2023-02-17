import { IPosts } from "@/types/types"
import { InferGetStaticPropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import React from "react"

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name='title' content='учебный проект' />
      </Head>
      <div>
        <h1>SSR - статичная генерация</h1>
        <div className='posts'>
          {!!posts.length &&
            posts.map((res: IPosts) => {
              return (
                <div key={res.id} className='post'>
                  <Link href={`/posts/${res.id}`}>
                    {res.id}) {`${res.body.slice(0, 90)}...`}
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data: IPosts[] = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts: data.slice(0, 20),
    },
  }
}
