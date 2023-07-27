import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ResearchFacilities() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div class="bg-[url('https://media.discordapp.net/attachments/1025099364584149094/1133843402098741484/image.png')] p-12 flex-auto">
                <h1 class="text-4xl font-bold text-blue-500 mb-4">Research Facilities</h1>
            </div>
            <Footer />
        </div>
    );
}

export default ResearchFacilities;