import Head from 'next/head'
import Navbar from '../src/components/Header/Navbar'
import HeroMini from '../src/components/Ui/HeroMini'
import Info from '../src/components/Ui/Info'



export default function contact() {
  return (
      <div className="relative">
        <Head>
          <title>Contact - Ghana Scrabble Association</title>
          <meta name="description" content="Contact SCAG,  SCAG is an Ghana Scrabble Association"/>
          <meta name="keyword" content="Contact SCAG, Contact Ghana Scrabble Association, Contact Ghana Scrabble Website, Contact-Us Ghana Scrabble Association, Contact-Us SCAG"/>
        </Head>
       <Navbar styleName="inner_menu"/>
       <HeroMini main={"Contact"} mini={"Us"} bgImg={"tag"}/>
       <Info/>
      </div>
  )
}
