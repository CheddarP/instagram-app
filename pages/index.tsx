import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />

      {/* Modal */}
      <Modal />
    </div>
  )
}

export default Home
