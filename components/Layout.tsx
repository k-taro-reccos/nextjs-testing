import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface TITLE {
  title: string
  children: ReactNode
}

export const Layout: FC<TITLE> = ({ children, title = 'Nextjs' }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                  data-testid="home-nav"
                >
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a
                  href=""
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                  data-testid="blog-nav"
                >
                  Blog
                </a>
              </Link>
              <Link href="/comment-page">
                <a
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                  data-testid="comment-nav"
                >
                  Comment
                </a>
              </Link>
              <Link href="/context-page">
                <a
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                  data-testid="context-nav"
                >
                  Context
                </a>
              </Link>
              <Link href="/task-page">
                <a
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                  data-testid="task-nav"
                >
                  Todos
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          href="https://vercel.com?utm_source=create-next-app?utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}
