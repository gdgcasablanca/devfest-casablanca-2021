import Head from 'next/head'

import HomeScreen from '../src/screens/home'

export default function Home() {
  return (
    <div className='bg-[#EFF7FF] min-h-screen'>
      <Head>
        <title>Devfest Casablanca 2021 - GDG Casablanca</title>
        <meta
          name='description'
          content='GDG Casablanca organizes a DevFest Conference every year.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomeScreen />
    </div>
  )
}
