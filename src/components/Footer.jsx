import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black-100 text-white  mt-16 py-8 px-6 rounded-t-2xl shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Mukhutar FX. All rights reserved.</p>

        <div className="flex gap-4">
          {/* <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-500 transition duration-200" size={20} />
          </a> */}
          <a href="https://x.com/ngabo_mk" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-sky-400 transition duration-200" size={20} />
          </a>
          <a href="https://www.instagram.com/_mukhutar?igsh=cWFvcjhxZWozN2N5&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition duration-200" size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ngabituje-mukhutar-332ba8227/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition duration-200" size={20} />
          </a>
          <a href="https://github.com/mukhutar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-300 transition duration-200" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;