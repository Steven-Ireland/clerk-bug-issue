import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SignedIn, SignedOut, useAuth } from '@clerk/nextjs'
import { SignIn } from '@clerk/clerk-react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const auth = useAuth();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <SignedOut>
          <SignIn />
        </SignedOut>
        <p>Login status: {"" + (auth.isSignedIn || false)}</p>
      </main>
    </>
  )
}
