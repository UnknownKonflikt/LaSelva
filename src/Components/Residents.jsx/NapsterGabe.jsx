//import React from 'react';
import { FaSoundcloud, FaMixcloud, FaBandcamp, FaFacebook, FaTiktok, FaTwitch, FaInstagram, FaYoutube } from 'react-icons/fa';
//import Logo from '../../assets/LaSelva/LaSelvaLogo.png';
import GabeDJ from '../../assets/LaSelva/NapsterGabe/GabeDJ.jpg';
import GabeLogo from '../../assets/LaSelva/NapsterGabe/gabeLogo.png';
function NapsterGabe() {
    return (
        <>
          <h1 id="projects" className="text-center display-6 fw-bold text-body-emphasis lh-1 mb-3"></h1>
            <div className="full-screen-height album py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-6">
                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                                <img src={GabeLogo} alt="Napster Gabe Logo" className="bd-placeholder-img project-img card-img-top" />
                                <img src={GabeDJ} alt="Napster Gabe profile" className="bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Napster Gabe</p>
                                    <p>Get to know all about Napster Gabe.</p>
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
                                                href="https://mixcloud.com" 
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
                                                href="https://www.facebook.com/NapsterGabe" 
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
                                                href="https://www.twitch.tv/napstergabe" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm btn-outline-secondary">
                                                <FaTwitch size={24} color="#6441A5" />
                                            </a>
                                            <a 
                                                href="https://www.instagram.com/napster_gabe/" 
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

export default NapsterGabe;
