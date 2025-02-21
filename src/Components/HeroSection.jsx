/* eslint-disable react/no-unescaped-entities */
import LaSelvaBanner from '../assets/LaSelva/LaSelvaBanner.png';


function HeroSection() {
    return (
        <>
        <section id="home" className="container">
            <div className="full-screen-height row flex-lg-row-reverse justify-content-center align-items-center text-center g-5 py-3 ">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={LaSelvaBanner} 
                         className="border-outline rounded-circle img-fluid" 
                         alt="Logo" 
                         width="800" 
                         height="500" 
                         loading="lazy"></img>
                </div>
                <div className="col-lg-6 text-center"> 
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to La Selva – The Jungle of Sound.</h1>
                    <p className="lead">At its core, La Selva is a collective built on the undeniable force of bass. We believe that music is more than just sound—it’s a connector, a force of unity that electrifies the soul. With the perfect sound system and a bassline that hits deep, La Selva transcends borders, bringing together music lovers from all walks of life.</p>

                    <p>While we’re rooted in the world of drum and bass, we’re far from confined to just one genre. From jungle to dubstep, grime to trap, we’re a collective that thrives on blending all the bass-driven sounds that make the dance floor come alive. Every set we curate is a dynamic journey that pushes boundaries and keeps the crowd moving, no matter the style.</p>
                    
                    <p>The name “La Selva” translates to "The Jungle," and it’s a reflection of our untamed spirit and ever-evolving nature. Whether we’re delivering high-energy beats or taking you on a deep, atmospheric sonic adventure, La Selva is where music and passion converge to create unforgettable experiences.</p>
                    
                    <p>From the heart of Rochester, New York, La Selva began as a local movement, a vibrant heartbeat pulsing through the underground drum and bass scene. Over the years, this raw energy has expanded beyond city limits and crossed state lines, establishing a powerful presence now resonating in San Antonio, Texas.</p>
                    
                    <p>As we continue to grow, La Selva remains dedicated to honoring the underground roots of bass culture while uniting the best of both coasts. Welcome to La Selva—where rhythm, unity, and bass are always in motion.</p>
                    
                </div>
            </div>
            </section>
        </>
    );
}

export default HeroSection;