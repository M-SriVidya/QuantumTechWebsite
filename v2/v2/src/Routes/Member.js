import Navbar from "../Components/Navbar";
import MemberCard from "../Components/MemberCard";
// import members from "../data"; // Import the members array here

const members = [
    {
      year: "Associate Professor",
      name: "Gajanan V Honnavar",
      role: "Associate Professor",
      image: "https://cdn.discordapp.com/attachments/1025099364584149094/1133253190599590029/image.png",
      link: "https://example.com/gajanan_v_honnavar_profile",
      campus: "PESU Electronic City Campus",
    },
    {
        year: "PhD Student",
        name: "Omkar Sharma",
        role: "PhD Student",
        image: "",
        link: "",
        campus: "PESU Electronic City Campus",
    },
    {
      year: "4th Year",
      name: "Aditya Kumar",
      role: "Club Members",
      image: "url_to_aditya_kumar_image.jpg",
      link: "https://example.com/aditya_kumar_profile",
      campus: "PESU Electronic City Campus",
    },
    {
        year: "4th Year",
        name: "Sumeet",
        role: "Club Members",
        image: "",
        link: "",
        campus: "PESU Electronic City Campus",
      },
    {
      year: "4th Year",
      name: "Akash H Rao",
      role: "Club Members",
      image: "url_to_akash_h_rao_image.jpg",
      link: "https://example.com/akash_h_rao_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "4th Year",
      name: "Shivakiran T S",
      role: "Club Members",
      image: "url_to_shivakiran_t_s_image.jpg",
      link: "https://example.com/shivakiran_t_s_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "4th Year",
      name: "Navaneeth N Anchan",
      role: "Club Members",
      image: "url_to_navaneeth_n_anchan_image.jpg",
      link: "https://example.com/navaneeth_n_anchan_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "4th Year",
      name: "Karan Aggarwal",
      role: "Club Members",
      image: "url_to_karan_aggarwal_image.jpg",
      link: "https://example.com/karan_aggarwal_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "4th Year",
      name: "Tadi Surya Reddy",
      role: "Club Members",
      image: "url_to_tadi_surya_reddy_image.jpg",
      link: "https://example.com/tadi_surya_reddy_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "4th Year",
      name: "Suraj",
      role: "Club Members",
      image: "url_to_suraj_image.jpg",
      link: "https://example.com/suraj_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "3rd Year",
      name: "Vandana",
      role: "Club Members",
      image: "url_to_vandana_image.jpg",
      link: "https://example.com/vandana_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "3rd Year",
      name: "Manish",
      role: "Club Members",
      image: "url_to_manish_image.jpg",
      link: "https://example.com/manish_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "3rd Year",
      name: "Manoj",
      role: "Club Members",
      image: "url_to_manoj_image.jpg",
      link: "https://example.com/manoj_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "3rd Year",
      name: "Harsha",
      role: "Club Members",
      image: "url_to_harsha_image.jpg",
      link: "https://example.com/harsha_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "2nd Year",
      name: "Spoorthi",
      role: "Club Members",
      image: "url_to_spoorthi_image.jpg",
      link: "https://example.com/spoorthi_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "2nd Year",
      name: "Oviya",
      role: "Club Members",
      image: "url_to_oviya_image.jpg",
      link: "https://example.com/oviya_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "2nd Year",
      name: "Aaditya",
      role: "Club Members",
      image: "url_to_aaditya_image.jpg",
      link: "https://example.com/aaditya_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "1st Year",
      name: "Vyoman Jain",
      role: "Club Members",
      image: "url_to_vyoman_jain_image.jpg",
      link: "https://example.com/vyoman_jain_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "1st Year",
      name: "Shashwat Sinha",
      role: "Club Members",
      image: "url_to_shashwat_sinha_image.jpg",
      link: "https://example.com/shashwat_sinha_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "1st Year",
      name: "Sharodh S Rao",
      role: "Club Members",
      image: "url_to_sharodh_s_rao_image.jpg",
      link: "https://example.com/sharodh_s_rao_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "1st Year",
      name: "Arya Soni",
      role: "Club Members",
      image: "url_to_arya_soni_image.jpg",
      link: "https://example.com/arya_soni_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "1st Year",
      name: "Archit Jindal",
      role: "Club Members",
      image: "url_to_archit_jindal_image.jpg",
      link: "https://example.com/archit_jindal_profile",
      campus: "PESU Electronic City Campus",
    },
    {
      year: "1st Year",
      name: "Samarth",
      role: "Club Members",
      image: "url_to_samarth_image.jpg",
      link: "https://example.com/samarth_profile",
      campus: "PESU Electronic City Campus",
    },
  ];

function Members() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-wrap justify-around p-5 bg-black">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            campus={member.campus}
            image={member.image}
            link={member.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Members;
