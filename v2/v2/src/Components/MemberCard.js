import { Link } from "react-router-dom";

function MemberCard() {
    return ( 
        <div className="rounded-lg w-[350px] flexbox bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-black m-6">
            <img className="m-auto rounded-full h-60 w-60 p-5" src="https://staff.pes.edu/assets/uploads/faculty/20210616072017000129.jpg" alt=""/>
            <div className="p-5">
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">Dr. Gajanan V Honnavar</h5>
                <p className="mb-3 font-bold text-xl text-center text-gray-700 dark:text-gray-300">Associate Professor</p>
                <p className="font-bold text-center text-gray-700 dark:text-gray-400">Science & Humanities Department</p>
                <p className="mb-5 font-bold text-center text-gray-700 dark:text-gray-400">PESU Electronic City Campus</p>
                <button className="flex m-auto">
                    <Link to="https://staff.pes.edu/nm1410" className="justify-center inline-flex items-center align-self-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default MemberCard;