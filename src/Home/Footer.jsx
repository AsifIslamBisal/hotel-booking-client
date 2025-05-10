import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">BlueSky Residences</h2>
          <p className="text-sm text-gray-300">
            Discover comfort and luxury in every stay. Book your next unforgettable experience with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/my-bookings">My Bookings</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300 text-sm">123 Luxury Ave, BlueSky Residences</p>
          <p className="text-gray-300 text-sm mt-1">Email: BlueSky Residences@hotelease.com</p>
          <p className="text-gray-300 text-sm mt-1">Phone: +880 1718285***</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} HotelEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
