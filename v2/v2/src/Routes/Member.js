import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MemberCard from "../Components/MemberCard";
import StudentCard from "../Components/currentStudents";
// import members from "../data"; // Import the members array here

const mainMembers = [
  {
    year: "",
    name: "Dr. Gajanan V Honnavar",
    role: "Team Lead",
    image: "https://cdn.discordapp.com/attachments/1025099364584149094/1133253190599590029/image.png",
    link: "https://staff.pes.edu/nm1410/",
    designation: "Professor"
  },
  {
    year: "",
    name: "Mr. Rajesh C",
    role: "Research Associate",
    image: "https://media.discordapp.net/attachments/1025099364584149094/1133817726591311932/Screenshot_2023-07-26_at_11.14.20_PM.png",
    link: "https://staff.pes.edu/nm1433/",
    designation: "Assistant Professor",
  },
  {
    year: "",
    name: "Mr. Shreyus Gautham Kumar",
    role: "Research Associate",
    image: "https://cdn.discordapp.com/attachments/1025099364584149094/1134184327563976794/Prof.jpeg",
    link: "https://staff.pes.edu/nm1430/",
    designation: "Assistant Professor",
  },
  {
      year: "",
      name: "Mr. Omkar Sharma",
      role: "Research Scholar",
      image: "https://media.discordapp.net/attachments/1025099364584149094/1133818906092507266/20230605105534000528.png?width=581&height=581",
      link: "https://staff.pes.edu/nm1661/",
      designation: "PhD Student",
  },
]

const members = [
  {
    year: "3rd Year",
    name: "Vandana",
    department: "PESU Electronic City department",
  },
  {
    year: "3rd Year",
    name: "Manish",
    department: "PESU Electronic City department",
  },
  {
    year: "3rd Year",
    name: "Manoj",
    department: "PESU Electronic City department",
  },
  {
    year: "3rd Year",
    name: "Harsha",
    department: "PESU Electronic City department",
  },
  {
    year: "2nd Year",
    name: "Spoorthi",
    department: "PESU Electronic City department",
  },
  {
    year: "2nd Year",
    name: "Oviya",
    department: "PESU Electronic City department",
  },
  {
    year: "2nd Year",
    name: "Aaditya",
    department: "PESU Electronic City department",
  },
  {
    year: "1st Year",
    name: "Vyoman Jain",
    department: "CSE department",
  },
  {
    year: "1st Year",
    name: "Samarth P",
    department: "CSE department",
  },
  {
    year: "1st Year",
    name: "Sumeet",
    department: "CSE department",
  },
  {
    year: "1st Year",
    name: "Sai Sathvik",
    department: "CSE department",
  },
  {
    year: "1st Year",
    name: "Anirudh Raj",
    department: "ECE department",
  },
  {
    year: "1st Year",
    name: "Arun I",
    department: "ECE department",
  },
  {
    year: "1st Year",
    name: "C.V. Ananth",
    department: "ECE department",
  },
  {
    year: "1st Year",
    name: "Naveen M",
    department: "ECE department",
  },
  {
    year: "1st Year",
    name: "Aditya Jayashankar",
    department: "ECE department",
  },
];

const alumni = [
  {
    name: "P Shri Gurudatta",
    year: 2023,
    // project: "Synthesis, I-V analysis and frequency response of Co-doped CuS and ZnS Quantum Dot",
    job: "CoreEl technology",
  },
  {
    name: "Aditya Kumar",
    year: 2023,
    // project: "Design of a new Quantum Multiplier based on novel Indian Algorithms",
    job: "Qnu Labs",
  },
  {
    name: "Suraj N",
    year: 2023,
    // project: "BaZrS3 based solar cell, MaSnBr3 based Solar cell, Tandem Perovskite solar cells",
    job: "Sagility India Pvt Ltd",
  },
  {
    name: "Yatharth Bakshi",
    year: 2023,
    // project: "Quantum Dot Thin Films",
    job: "Vobble",
  },
  {
    name: "Pranav S Kashyap",
    year: 2023,
    // project: "Synthesis of Quantum Dot and its applications",
    job: "PwC India",
  },
  {
    name: "Gajanan M Kamat",
    year: 2023,
    // project: "Quantum Dot synthesis for memory storage",
    job: "Higher Studies - IIT Madras",
  },
  {
    name: "Navaneeth N Anchan",
    year: 2023,
    // project: "Quantum multipliers using Ancient Indian algorithms",
    job: "Tejas Networks",
  },
  {
    name: "Karan Agarwal",
    year: 2023,
    // project: "Median filter for image editing, automated safety emergency device, memory model fabrication with quantum dots",
    job: "Maxwell",
  },
  {
    name: "Shivakiran TS",
    year: 2023,
    // project: "Nikhilam Squarer for Quantum Computing, using Ancient multiplication algorithms to build",
    job: "Ingersoll Rand",
  },
  {
    name: "Sneha R",
    year: 2023,
    // project: "Quantum dot",
    job: "Nextrove",
  },
  {
    name: "Abhinaya K",
    year: 2023,
    // project: "Home automation related",
    job: "Tata Technologies",
  },
  {
    name: "Tadi Surya Teja Reddy",
    year: 2023,
    // project: "Perovskite Solar Cell",
    job: "",
  },
  {
    name: "Akash H Rao",
    year: "2023",
    job: "",
  },
];

const docstudents = [
  {
    type: "Doctoral (Supervised)",
    title: "Mr. Belay Getachew Hailemariam",
    description: "Graduated from Bahir Dar University, Bahir Dar, Ethiopia on 15th July 2021.",
  },
  {
    type: "Doctoral (Supervised)",
    title: "Mrs. Parul Goel",
    description: "Successfully defended her thesis on 21st April, 2023. Visvesvaraya Technological University (VTU) Belagavi, India",
  },
  {
    type: "Doctoral (Supervising)",
    title: "Mr. Afrash Ejigu",
    description: "Working on the effect of zinc and cadmium substitution on the optical properties of rare-earth doped niobo-tellurite glasses for photonic applications. Bahir Dar University, joined in 2017.",
  },
]

function Members() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-[url('https://media.discordapp.net/attachments/1025099364584149094/1133843402098741484/image.png')] ">
      <div className="flex flex-col items-center justify-center p-5 ">
        <h1 className="text-4xl font-bold text-white mt-6" >Team</h1>
      </div>
      <div className="flex flex-wrap justify-around p-5 ">
        {mainMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            designation={member.designation}
            image={member.image}
            link={member.link}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center p-5 ">
        <h1 className="text-4xl font-bold text-white">Academic Collaboration</h1>
      </div>
      <div className="flex flex-wrap justify-around p-5 ">
        <MemberCard
          name="Dr. Parul Goel"
          role="St. Joseph College, bangalore"
          designation="Assistant Professor"
          image="https://www.sju.edu.in/uploads/faculty/medium/855750818_2022-07-04_06-43-00.jpg"
          link="https://www.sjc.ac.in/department-of-computer-science"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-5 ">
        <h1 className="text-4xl font-bold text-white">Current Students</h1>
      </div>
      <div className="flex flex-wrap justify-around p-5 ">
        {members.map((member, index) => (
          <StudentCard
            key={index}
            name={member.name}
            year={member.year}
            department={member.department}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center p-5 ">
        <h1 className="text-4xl font-bold text-white">Alumni</h1>
      </div>
      <div className="flex flex-wrap justify-around p-5 ">
        {alumni.map((member, index) => (
          <StudentCard
            key={index}
            name={member.name}
            year={member.year}
            department={member.job}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center p-5 ">
        <h1 className="text-4xl font-bold text-white">Doctoral Students</h1>
      </div>
      <div className="flex flex-wrap justify-around p-5 ">
        {docstudents.map((member, index) => (
          <StudentCard
            key={index}
            name={member.title}
            year={member.type}
            department={member.description}
          />
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Members;
