import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://quantum-tech-website.vercel.app/" className="flex items-center mb-4 sm:mb-0">
            {/* <img src="" className="h-8 mr-3" alt="" /> */}
            <span className="self-center text-l font-semibold whitespace-nowrap dark:text-white">Quantum Tech Group, PES University Electronic City Campus</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/About" className="mr-4 hover:underline md:mr-6">About</Link>
            </li>
            <li>
              <Link to="#" className="mr-4 hover:underline md:mr-6">Linkedin</Link>
            </li>
            <li>
              <p>Contact us at: quantumania.ec@pes.edu</p>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://quantum-tech-website.vercel.app/" className="hover:underline">Quantum Tech Group™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
