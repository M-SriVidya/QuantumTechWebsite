import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MemberCard from "../Components/MemberCard";

function Club() {
    return (
        <div className="bg-[url('https://media.discordapp.net/attachments/1025099364584149094/1133843402098741484/image.png')]">
            <div>
                <Navbar/>
            </div>
            <p class="text-4xl font-bold text-white text-center mt-12">QUANTUMANIA</p>
            <p class="text-3xl p-4 font-bold text-center text-blue-500 mt-12">About the Club</p>
            <p class="text-xl text-white mt-4 text-center mx-48"> 'QUANTUMANIA' is directed towards students who are eager to acquire knowledge in Quantum Physics and Quantum Computing. By means of a diverse array of activities, club members will be able to establish connections with faculty members and more experienced peers. This will facilitate the resolution of any uncertainties in their understanding of these subjects. Furthermore, the club provides a platform for reciprocal learning and teaching among peers, fostering an environment where knowledge flows both ways. Collaborative projects will also be encouraged, allowing members to work together and receive constructive input.</p> 
            <p class="text-xl text-white mt-4 text-center mx-48"> Additionally, the club aims to organize events that extend to all students, including those with limited prior exposure to these fields. The intention behind these events is to ignite inspiration and enthusiasm about the realms of Quantum Physics and Quantum Computing, not solely among those already intrigued by the subjects.</p>
            <p class="text-3xl p-4 font-bold text-center text-blue-500 mt-12">The Team</p>
            <div class = "flex justify-center">
                <MemberCard
                    name= "Dr. Gajanan V Honnavar"
                    role= "Faculty Advisor"
                    designation = "Professor, Dept. of Science and Humanities, EC Campus"
                    image = "https://cdn.discordapp.com/attachments/1025099364584149094/1133253190599590029/image.png"
                    link = "https://staff.pes.edu/nm1410/"
                />
                <MemberCard
                    name= "Mr. Omkar Sharma"
                    role= "Club Advisor"
                    designation = "Research Scholar , Dept. of Science and Humanities, EC Campus"
                    image = "https://media.discordapp.net/attachments/1025099364584149094/1133818906092507266/20230605105534000528.png?width=581&height=581"
                    link = "https://staff.pes.edu/nm1661/"
                />
            </div>
            <p class="text-xl text-white mt-4 text-center mx-48"> Students who are interested are encouraged to reach out to us by emailing at quantumania.ec@pes.edu. Feel free to contact us with any inquiries, curiosity, or interest you may have. We're here to engage, assist, and provide information about the exciting world of Quantum Physics and Quantum Computing.</p>
            <p class="text-3xl p-4 font-bold text-center text-blue-500 mt-12">Planned Events and Activities</p>
            <p class="text-xl text-white mt-4 mx-48"> As of now, we haven’t planned everything thoroughly, but, there are a few events we are looking to organise after the club becomes official, such as:
                <ul>
                    <li className="my-4 text-blue-500 font-semibold"> - Internal Group Discussions: </li>
                    <li className="my-4"> Group Discussions are an effective way of learning new things and will provide students joining the Club with the intent to gaining knowledge in the field, exactly that. We plan to have Group Discussion Sessions with Club Members, where we discuss topics related to Quantum Computing or Quantum Physics. </li>
                    <li className="my-4 text-blue-500 font-semibold"> - Guest Lectures and Seminars: </li>
                    <li className="my-4"> These are the activities we want to organise to inspire interest in students with very minimal or no quantum background. We plan to organise seminars, and Guest Lectures with experts from the industry, so that students get interested in the field.</li>
                    <li className="my-4 text-blue-500 font-semibold"> - Projects: </li>
                    <li className="my-4"> As a Quantum Club, we will assign group projects and present problems for our members to solve. This approach offers members the opportunity to gain hands-on experience and exposure to real-world applications of Quantum Computing, as well as network and engage in discussion with their peers and faculty members.</li>
                    <li className="my-4 text-blue-500 font-semibold"> - Hackathons: </li>
                    <li className="my-4"> After a sufficient number of students have joined and they have understood at least the basic knowledge of quantum computing, we may conduct Hackathons that will take place over the course of a weekend, with participants working in teams to solve challenging problems using quantum computing techniques.</li>
                </ul>
            </p>
            <Footer/>
        </div>
    );
}

export default Club;