import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import LaSelvaBanner from '../assets/LaSelva/LaSelvaBanner.png';

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">© 2025 La Selva Inc</span>
          </div>

          <div className="container mb-4">
            <img src={LaSelvaBanner} className="border-outline img-fluid border rounded-3" alt="La Selva banner" width="700" height="500" loading="lazy" />

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-body-secondary" href="">
                  <FaTwitter className="icon" size={24} />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="https://www.instagram.com/laselvadnb/">
                  <FaInstagram className="icon" size={24} />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="https://www.facebook.com/laselvadnb">
                  <FaFacebook className="icon" size={24} />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
