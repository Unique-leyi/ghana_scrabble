import Head from 'next/head'
import Navbar from '../src/components/Header/Navbar'
import HeroMini from '../src/components/Ui/HeroMini'
import ResourceContainer from '../src/components/Ui/ResourceContainer'

export default function resources() {
  return (
      <>
        <Head>
          <title>Resources - Ghana Scrabble Association</title>
          <meta name="description" content="Resources Ghana,  Ghana is a Ghana Scrabble Association"/>
          <meta name="keyword" content="Resources Ghana, Resources Ghana African Scrabble Association, Resources Gambia Scrabble Website, Resource Ghana African Scrabble Association, Resources Ghana"/>
        </Head>
        <Navbar styleName="inner_menu"/>
        <HeroMini main={"Resources"} bgImg={"tag"}/>
        <ResourceContainer/>
      </>
  )
}