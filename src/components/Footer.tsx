import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-extrabold text-white mb-4">VeyaFix</h2>
          <p className="text-sm mt-8 text-gray-400">
            &copy; {new Date().getFullYear()} by VeyaFix. All rights reserved.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>500 Terry Francine Street, <br />San Francisco, CA 94158</li>
            <li><a href="mailto:info@mysite.com" className="hover:text-red-600 transition-colors">info@mysite.com</a></li>
            <li>123-456-7890</li>
            <li className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-600 hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-pinterest-p"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full text-gray-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li className="relative w-fit"><a href="#home" className="hover:text-red-600 transition-colors text-red-600 after:content-[''] after:absolute after:h-[2px] after:bg-white after:bottom-[-2px] after:left-[0] after:w-[0] hover:after:w-full after:duration-300 after:ease-in-out">Home</a></li>
            <li className="relative w-fit"><a href="#services" className="hover:text-red-600 transition-colors text-red-600 after:content-[''] after:absolute after:h-[2px] after:bg-white after:bottom-[-2px] after:left-[0] after:w-[0] hover:after:w-full after:duration-300 after:ease-in-out">Services</a></li>
            <li className="relative w-fit"><a href="#pricing" className="hover:text-red-600 transition-colors text-red-600 after:content-[''] after:absolute after:h-[2px] after:bg-white after:bottom-[-2px] after:left-[0] after:w-[0] hover:after:w-full after:duration-300 after:ease-in-out">Pricing</a></li>
            <li className="relative w-fit"><a href="#contact" className="hover:text-red-600 transition-colors text-red-600 after:content-[''] after:absolute after:h-[2px] after:bg-white after:bottom-[-2px] after:left-[0] after:w-[0] hover:after:w-full after:duration-300 after:ease-in-out">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Policy</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#privacy" className="hover:text-red-600 transition-colors text-gray-400">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-red-600 transition-colors text-gray-400">Terms &amp; Conditions</a></li>
            <li><a href="#accessibility" className="hover:text-red-600 transition-colors text-gray-400">Accessibility Statement</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
