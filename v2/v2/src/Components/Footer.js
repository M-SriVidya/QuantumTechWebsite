import { Link } from "react-router-dom";

function Footer(props) {
    return(
        
        <footer class="bg-white shadow dark:bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://quantum-tech-website.vercel.app/" class="flex items-center mb-4 sm:mb-0">
                        {/* <img src="" class="h-8 mr-3" alt="" /> */}
                        <span class="self-center text-l font-semibold whitespace-nowrap dark:text-white">Quantum Tech Group, PES University Electronic City Campus</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/About" class="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to="#" class="mr-4 hover:underline md:mr-6">Linkedin</Link>
                        </li>
                        <li>
                            <p class="hover:underline">Contact us at: </p>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://quantum-tech-website.vercel.app/" class="hover:underline">Quantamania™</a>. All Rights Reserved.</span>
            </div>
        </footer>

    )
}

export default Footer;