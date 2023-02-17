import React, { FC } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"

interface ILayout {
  children: React.ReactNode
  classes: string
}

export const Layout: FC<ILayout> = ({ children, classes }) => {
  return (
    <div className={`content ${classes}`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
