//import React from 'react';
import { FaSoundcloud, FaMixcloud, FaBandcamp, FaFacebook, FaTiktok, FaTwitch, FaInstagram, FaYoutube } from 'react-icons/fa';
//import Logo from '../../assets/LaSelva/LaSelvaLogo.png';
import UKsxsw from '../../assets/LaSelva/UK/UKsxsw.jpg';
import UKlogo from '../../assets/LaSelva/UK/UKlogo.jpg';

function UnknownKonflikt() {
    return (
        <>
          <h1 id="projects" className="text-center display-6 fw-bold text-body-emphasis lh-1 mb-3"></h1>
            <div className="full-screen-height album py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-6">
                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                                <img src={UKlogo} alt="Unknown Konflikt Logo" className="bd-placeholder-img project-img card-img-top" />
                                <img src={UKsxsw} alt="Unknown Konflikt profile" className="bd-placeholder-img project-img card-img-top" />

                                <div className="card-body">
                                    <p className="card-text">Unknown Konflikt</p>
                                    <p>Hailing from Colorado, Unknown Konflikt began DJing in 1997, initially drawn to house and trance before discovering drum & bass in 1999. Since then, drum & bass has been the backbone of their sound, though they still explore other styles, always returning to their roots.  Known for a focus on liquid DNB with a jazzy side, Unknown Konflikt also brings heavy beats for the dancefloor when the moment calls for it. </p>
                                    <p>
                                        Over the years, he has had the opportunity to share the stage with some of the biggest names in the scene, including SUV, Saxxon, Fabio, Grooverider, John B, Ben Soundscape, Collette Warren, Lenzman, DJ Empress, Spikey Tee, Danny Tha Wildchild, AK1200, Lurch, Phaction, Dave Owen, and many others.  For the past five years, Unknown Konflikt has also focused on producing, bringing their unique style to original tracks that reflect their deep love for DNB.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <a 
                                                href="https://soundcloud.com" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm btn-outline-secondary">
                                                <FaSoundcloud size={24} color="#FF5500" />
                                            </a>
                                            <a 
                                                href="https://www.mixcloud.com/anthonygillespie35/" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm btn-outline-secondary">
                                                <FaMixcloud size={24} color="#00A7E1" />
                                            </a>
                                            <a 
                                                href="https://bandcamp.com" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm btn-outline-secondary">
                                                <FaBandcamp size={24} color="#1E1E1E" />
                                            </a>
                                            <a 
                                                href="https://www.facebook.com/UnknownKonflikt" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm btn-outline-secondary">
                                                <FaFacebook size={24} color="#1877F2" />
                                            </a>
                                            <a 
                                                href="https://tiktok.com" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm btn-outline-secondary">
                                                <FaTiktok size={24} color="#000000" />
                                            </a>
                                            <a 
                                                href="https://www.twitch.tv/unknown_konflikt" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm btn-outline-secondary">
                                                <FaTwitch size={24} color="#6441A5" />
                                            </a>
                                            <a 
                                                href="https://www.instagram.com/unknown_konflikt/" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm btn-outline-secondary">
                                                <FaInstagram size={24} color="#E1306C" />
                                            </a>
                                            <a 
                                                href="https://youtube.com" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm btn-outline-secondary">
                                                <FaYoutube size={24} color="#FF0000" />
                                            </a>
                                        </div>
                                        <small className="text-body-secondary">
                                            {/* Existing SVG icons can stay here if needed */}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UnknownKonflikt;
