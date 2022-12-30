import Head from 'next/head'
import About from '../src/components/About/About'
import Header from '../src/components/Header/Header'
import News from '../src/components/News/News'



export default function Home() {
  return (
      <div>
          <Head>
            <title>Home - Ghana Scrabble Association</title>
            <meta name="description" content="SCAG is an Ghana Scrabble Association Based In Nigeria"/>
            <meta name="keyword" content="SCAG, Ghana Scrabble Association, Ghana Scrabble Website" />
          </Head>
          <Header/>
          <About/>
          <News/>
        </div>
      )
  }