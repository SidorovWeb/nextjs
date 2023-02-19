import { IComment } from '@/types/types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Reviews({
    reviews,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>Comments</title>
                <meta name="title" content="учебный проект" />
            </Head>
            <div>
                <h1>SSG - рендеринг на сервере</h1>
                <div className="reviews">
                    {!!reviews.length &&
                        reviews.map((res: IComment) => {
                            return (
                                <div key={res.id} className="review">
                                    <Link href={`/comments/${res.id}`}>
                                        {res.id}){' '}
                                        {`${res.body.slice(0, 90)}...`}
                                    </Link>
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<{
    reviews: IComment[]
}> = async () => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments'
    )
    const data: IComment[] = await response.json()

    return {
        props: {
            reviews: data.slice(0, 20),
        },
    }
}
