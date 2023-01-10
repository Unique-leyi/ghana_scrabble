import styles from './heromini.module.css'

function HeroMini(props) {

    const styleList = props.bgImg;
    
    return (
        <section className={`${styles.heromini_bg} ${styles[styleList]}  w-full h-[12rem] lg:h-[18rem] flex justify-center items-center overflow-hidden relative z-[10] bg-center bg-cover bg-no-repeat`}>
                <div className="flex justify-center items-center flex-col">
                    <h3 className="uppercase font-extrabold lg:text-6xl text-4xl text-white">{props.main}<span className="text-siteyellow mx-4">{props.mini}</span></h3>
                </div>
        </section>
    )
}

export default HeroMini