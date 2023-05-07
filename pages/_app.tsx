import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/style.css"

import awsExports from "../src/aws-exports"
Amplify.configure(awsExports)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
