import { IComment } from "@/types/types"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import React from "react"

export default function Review({
  review,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <div>
        <h1>Comment {review.name}</h1>
        <div className='review'>
          {review.id}) {`${review.body.slice(0, 90)}...`}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  review: IComment
}> = async (context) => {
  const { id } = context.params as { id: string }
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  )
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { review: data },
  }
}
