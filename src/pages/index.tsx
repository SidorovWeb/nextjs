import Link from "next/link"
import React from "react"
import style from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={style.container}>
      <h1 className={`${style.title} font-effect-fire-animation`}>Home</h1>
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
  )
}
