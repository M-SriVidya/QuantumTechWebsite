import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/MemberCard.css";

function Card() {
    let navigate = useNavigate();
    let prop = {
        "img": "https://staff.pes.edu/assets/uploads/faculty/20210616072017000129.jpg",
        "name": "Dr. Gajanan V Honnavar",
        "intro": "Associate Professor, Science & Humanities Dept., PESU EC Campus",
        "desc": "A native of Gokarna, a scenic town of coastal Karnataka, I have been with PES since 2005. I have had a short stint at the Indian Institute of Science, Bangalore as a research student. Recently I was at Bahir Dar University, Bahir Dar, Ethiopia on sabbatical to promote Solid State Physics-related research activities. I have more than 17 years of experience in teaching graduate and undergraduate Physics and related subjects. I am an active researcher in the field of experimental condensed matter physics with more than 10 years of research experience."
    }
    return (
        <div class = "cards">
            <div class="card">
                <img src={prop.img} alt={prop.alt}/>
                <h1>{prop.name}</h1>
                <p class = "intro">{prop.intro}</p>
                <p class = "desc">{prop.desc}</p>
                <p>
                    <button 
                    // onClick={navigate("/")}
                    >
                        View More
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Card;