import Head from 'next/head'
import Navbar from '../src/components/Header/Navbar'
import HeroMini from '../src/components/Ui/HeroMini'
import Blog from '../src/components/Blog/Blog.jsx';

export default function News() {
  
  return (
      <>
        <Head>
          <title>News and Events - Ghana Scrabble Association</title>
          <meta name="description" content="News SCAG,  SCAG is an Ghana Scrabble Association Based In Ghana"/>
          <meta name="keyword" content=", Read Top Stories Happening in Scrabble in Ghana, Events in Scrabble in SCAG, Scrabble Events in Ghana, News SCAG, News Ghana Scrabble Association, News Ghana Scrabble Website, News Ghana Scrabble Association, News SCAG"/>
        </Head>
       <Navbar styleName="inner_menu"/>
       <HeroMini main={"News"} mini={"And Event"} bgImg={"tag"}/>
       <Blog/>
      </>
  )
}

