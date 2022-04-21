import '../styles/global.scss'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import React, { useState, useEffect } from 'react'
import { Layout } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
