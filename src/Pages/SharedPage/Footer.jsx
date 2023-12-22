import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-14 bg-[#1D2833] text-primary-content">
        <aside>
         <img className=" max-w-44 md:max-w-72"  src={logo} alt="" />
          <p className="font-bold">
          Providing reliable tech since 2023
          </p> 
          <p>Copyright © 2023 - All right reserved</p>
        </aside> 
        <nav>
          <div className="grid grid-flow-col gap-4">
          <Link> <FaFacebook className="text-3xl"></FaFacebook></Link>
           <Link><FaYoutube className="text-3xl"></FaYoutube></Link>
          <Link> <FaTwitter className="text-3xl"></FaTwitter></Link>
         <Link>  <FaLinkedin className="text-3xl"></FaLinkedin></Link>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;