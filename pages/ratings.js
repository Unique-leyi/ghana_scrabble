import Head from 'next/head'
import Navbar from '../src/components/Header/Navbar'
import HeroMini from '../src/components/Ui/HeroMini'
import RatedContainer from '../src/components/Ui/RatedContainer'


export default function ratings() {
  return (
      <>
        <Head>
          <title>Ratings - Ghana Scrabble Association</title>
          <meta name="description" content="Ratings SCAG,  SCAG is an Ghana Scrabble Association Based In Gambia"/>
          <meta name="keyword" content="Ratings SCAG, Ratings Ghana Scrabble Association, Ratings Gambia Scrabble Website, SCAG Ratings"/>
        </Head>
        <Navbar styleName="inner_menu"/>
        <HeroMini main={"Ratings"} bgImg={"tag"}/>
        <RatedContainer/>
      </>
  )
}