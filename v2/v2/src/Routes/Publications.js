import Navbar from "../Components/Navbar";
import PublicationCard from "../Components/PublicationCard";

function Publications() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-wrap justify-around p-5">
                <PublicationCard/>
                <PublicationCard/>
                <PublicationCard/>
                
            </div>
        </div>
    );
}

export default Publications;

