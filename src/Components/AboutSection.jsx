/* eslint-disable react/no-unescaped-entities */
import LaSelvaBanner from '../assets/LaSelva/LaSelvaBanner.png';


function About() {
    return (
        <>
        <section id="about" className="container">
            <div className="full-screen-height px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="text-center display-6 fw-bold text-body-emphasis lh-1 mb-3">A little more about La Selva's legacy....</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">

Born in the heart of Rochester, New York, La Selva is a DJ collective that thrives on the power of bass music. What started as a local movement to bring the vibrant, fast-paced world of drum and bass to the region has grown into a transcontinental force, now with a strong presence in San Antonio, Texas. At its core, La Selva is driven by the belief that music has the ability to unite, energize, and elevate — and that a proper sound system and a pulsating bassline can transcend borders and boundaries.

From the underground clubs of Rochester to the booming dance floors of San Antonio, La Selva brings together a passionate community of music lovers, DJs, and producers who are all dedicated to pushing the limits of sound. While the collective’s foundation is deeply rooted in drum and bass, the crew remains open and welcoming to all forms of bass-driven music. From dubstep to jungle, trap to grime, the collective embraces the full spectrum of bass music, creating dynamic, genre-blending sets that never fail to get the crowd moving.

The name "La Selva," meaning "The Jungle" in Spanish, reflects not only the collective's diverse and ever-evolving nature but also the wild, untamed energy they bring to every event. Whether it’s a high-octane set or a deep, atmospheric journey through sound, La Selva’s performances are designed to ignite the senses and create unforgettable moments.

With each event, La Selva continues to build on its legacy of passionate, immersive performances, bringing together the best of both coasts while always staying true to the spirit of underground culture and bass music. Welcome to La Selva — a jungle of rhythm, unity, and bass that never stops growing.</p>
                </div>
                <div className="overflow-hidden" style={{
                    maxHeight: '30vh'
                }}>
                    <div className="container px-5">
                        <img src= {LaSelvaBanner} className="border-outline img-fluid border rounded-3" alt="Example image" width="700" height="500" loading="lazy"/>
                    </div>
                </div> 
            </div>
            </section>
        </>
            )
}

            export default About; 