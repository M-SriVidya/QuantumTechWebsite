import Navbar from "../Components/Navbar";
import MemberCard from "../Components/MemberCard";

function Members() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-wrap justify-around p-5 bg-black">
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/> 
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/> 
            </div>
        </div>
    );
}

export default Members;