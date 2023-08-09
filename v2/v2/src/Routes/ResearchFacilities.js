import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ResearchFacilities() {
    return (
        <div className="flex flex-col min-h-screen bg-[url('https://media.discordapp.net/attachments/1025099364584149094/1133843402098741484/image.png')]">
            <Navbar/>
            <div class="p-10 flex-auto">
                <h1 class="text-4xl font-bold text-blue-500">Research Facilities</h1>
            </div>
            <div className="mb-8 font-semibold text-white text-2xl text-center">Instrumentation</div>
            <div class="grid grid-cols-3 mb-12 md:grid-cols-3 gap-12">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1132885197759709244/PHOTO-2023-05-21-09-51-47.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133238411252224100/PHOTO-2023-05-21-09-51-48.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1132991336740565102/IMG_3044.jpg" alt=""/>
                </div>
            </div>
            <div>
                <img class="h-1/2 w-1/2 pb-12 rounded-lg mx-auto" src="https://cdn.discordapp.com/attachments/1025099364584149094/1132885198304985099/PHOTO-2023-05-21-09-51-46.jpg" alt=""/>
            </div>
            <Footer />
        </div>
    );
}

export default ResearchFacilities;