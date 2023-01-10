import Head from 'next/head'
import HeroMini from '../src/components/Ui/HeroMini'
import SectionAbout from '../src/components/Ui/SectionAbout'
import Teams from '../src/components/Team/Teams'
import Vision from '../src/components/Ui/Vision'
import Statements from '../src/components/Statement/Statements'
import Navbar from '../src/components/Header/Navbar'


export default function about() {
  return (
      <>
        <Head>
          <title>About - Ghana Scrabble Association</title>
          <meta name="description" content="About SCAG,  SCAG is an Ghana Scrabble Association Based In Ghana"/>
          <meta name="keyword" content="About SCAG, About Ghana Scrabble Association, About Ghana Scrabble Website, About-Us Ghana Scrabble Association, About-Us SCAG"/>
        </Head>
       <Navbar styleName="inner_menu"/>
       <HeroMini main={"About"} mini={"Us"} bgImg={"tag"}/>
       <SectionAbout/>
       <Statements/>
       <Vision/>
       <Teams/>
      </>
  )
}
