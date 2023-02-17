import { Layout } from "@/components/layout"
import type { AppProps } from "next/app"
import "@/styles/globals.css"
import { Balsamiq_Sans } from "@next/font/google"

const oxygen = Balsamiq_Sans({
  weight: "400",
  variable: "--Balsamiq-font",
  preload: false,
  //   subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout classes={oxygen.className}>
      <Component {...pageProps} />
    </Layout>
  )
}
