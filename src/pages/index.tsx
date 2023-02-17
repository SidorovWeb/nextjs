import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import style from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная страница</title>
        <meta name='title' content='учебный проект' />
      </Head>
      <div className={style.container}>
        <h1 className={`${style.title}`}>Home</h1>
        <div className={style.mainImage}>
          <Image src={"/vercel.svg"} alt='vercel' width={400} height={300} />
        </div>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          possimus aspernatur minus voluptatem? Totam porro excepturi reiciendis
          velit accusantium natus rerum, neque veritatis, veniam, deserunt quia
          tempore earum corporis omnis.
        </p>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          possimus aspernatur minus voluptatem? Totam porro excepturi reiciendis
          velit accusantium natus rerum, neque veritatis, veniam, deserunt quia
          tempore earum corporis omnis.
        </p>
        <Link className={style.btn} href='/burgers'>
          All burgers
        </Link>
      </div>
    </>
  )
}
