import React, { useEffect, useRef, useState } from 'react';

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css'
import TopNav from './TopNav';
import Navbar from './Navbar';
import Hero from '../Hero/Hero';

   

function Header() {
    
   return (
    <header className="">
        <TopNav/>
        <section className={`${styles.navbar_bg} bg-cover bg-no-repeat bg-center h-[35rem] lg:h-[40rem] z-[60] relative`}>
            <Navbar styleName="nav_menu"/>
            <Hero/>
        </section>
    </header>
   )
}

export default Header