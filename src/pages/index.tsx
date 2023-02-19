import { useCounterStore, useTodosStore } from '@/store'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from '../styles/Home.module.css'

export default function Home() {
    const [count, setCount] = useState(0)
    const countStore = useCounterStore((state) => state.count)
    const augment = useCounterStore((state) => state.augment)
    const decrease = useCounterStore((state) => state.decrease)
    const todos = useTodosStore((state) => state.todos)
    const isLoading = useTodosStore((state) => state.isLoading)
    const error = useTodosStore((state) => state.error)
    const fetchUsers = useTodosStore((state) => state.fetchUsers)

    useEffect(() => {
        setCount(countStore)
    }, [countStore])

    return (
        <>
            <Head>
                <title>Главная страница</title>
                <meta name="title" content="учебный проект" />
            </Head>
            <div className={style.container}>
                <h1 className={`${style.title}`}>Home</h1>
                <div className={style.mainImage}>
                    <Image
                        src={'/vercel.svg'}
                        alt="vercel"
                        width={400}
                        height={300}
                    />
                </div>
                <p className={style.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae possimus aspernatur minus voluptatem? Totam porro
                    excepturi reiciendis velit accusantium natus rerum, neque
                    veritatis, veniam, deserunt quia tempore earum corporis
                    omnis.
                </p>
                <p className={style.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae possimus aspernatur minus voluptatem? Totam porro
                    excepturi reiciendis velit accusantium natus rerum, neque
                    veritatis, veniam, deserunt quia tempore earum corporis
                    omnis.
                </p>
                <div className="count">
                    count: {count}
                    <button className={style.btn} onClick={augment}>
                        plus count
                    </button>
                    <button
                        className={`${style.btn} ${
                            count <= 0 ? style.btnDisabled : ''
                        }`}
                        disabled={count <= 0 ? true : false}
                        onClick={decrease}
                    >
                        minus count
                    </button>
                </div>

                <button className={style.btn} onClick={fetchUsers}>
                    fetch todos
                </button>
                {isLoading && <div>...isLoading</div>}
                {todos &&
                    todos.map((todo) => <div key={todo.id}>{todo.title}</div>)}
                {error && <div>{error}</div>}
            </div>
        </>
    )
}
