import Head from 'next/head'
import About from '../src/components/About/About'
import Header from '../src/components/Header/Header'
import News from '../src/components/News/News'
import Operations from '../src/components/Operations/Operations'
import Resource from '../src/components/Resources/Resource'
import Gallery from '../src/components/Gallery/Gallery'



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
          <Operations/>
          <Gallery/>
          <Resource/>
        </div>
      )
  }