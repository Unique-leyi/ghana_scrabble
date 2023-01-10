import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import motion from 'framer-motion';
import Layout from "../src/components/Layout/Layout.jsx";
import Header from "../src/components/Header/Header.jsx";
// import { Fragment } from "react";
import Router from "next/router";
import { useState } from "react";
import Loader from "../src/components/Loader/Loader.jsx";


function MyApp({ Component, pageProps }) {

  const [loader, setLoader] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    console.log(`Router is changing...`);
      setLoader(true);
  });

  Router.events.on('routeChangeComplete', (url) => {
    console.log(`Router is complete...`);
    setLoader(false);
  });
  

  return (
      <>

        { loader ? 
        
            <Loader/>  
            : 
           <div>
             {/* <Header/> */}
              <Layout>
                <Component {...pageProps} />
            </Layout>
    
           </div>

        }

      </>

      
      )
  
}

export default MyApp
