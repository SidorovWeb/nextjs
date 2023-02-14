import Link from "next/link"
import React from "react"

export const Header = () => {
  return (
    <header>
      <div>Header</div>
      <nav>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/reviews'>comments</Link>
        <Link href='/burgers'>burgers</Link>
      </nav>
    </header>
  )
}
