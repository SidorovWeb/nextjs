import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

export default function NotFoundPage() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [])

  return (
    <div className='not-found'>
      <h1>Ой...</h1>
      <h2>Такой страницы здесь нет!</h2>
      <p>
        Перехожу на <Link href='/'>главную страницу</Link> через 3 секунды...
      </p>
    </div>
  )
}
