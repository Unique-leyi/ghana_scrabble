import Head from 'next/head'
import Catalogue from '../src/components/Catalogue/Catalogue'
import Navbar from '../src/components/Header/Navbar'
import HeroMini from '../src/components/Ui/HeroMini'

export default function gallery() {
  return (
      <>
        <Head>
          <title>Gallery - Ghana Scrabble Association</title>
          <meta name="description" content="Gallery SCAG,  SCAG is an Ghana Scrabble Association Based In Ghana"/>
          <meta name="keyword" content="Gallery SCAG, Gallery Ghana Scrabble Association, Gallery Ghana Scrabble Website, Gallery Ghana Scrabble Association, Gallery SCAG"/>
        </Head>
       <Navbar styleName="inner_menu"/>
       <HeroMini main={"Gallery"} bgImg={"tag"}/>
       <Catalogue/>
      </>
  )
}