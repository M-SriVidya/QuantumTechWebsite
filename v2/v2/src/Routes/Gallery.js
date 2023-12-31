import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Gallery() {
    return (       
        <div className="bg-[url('https://media.discordapp.net/attachments/1025099364584149094/1133843402098741484/image.png')] ">
            <Navbar/>
            <div className="m-8 font-semibold text-white text-2xl text-center">People</div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-12">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1136516600388927579/Group.jpeg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133818699841814668/20230203_154327.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133818698826788925/20230203_145722.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133087715588591646/PHOTO-2023-07-24-18-09-06.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133087788259102730/PHOTO-2023-07-24-22-47-22.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133087789873893406/PHOTO-2023-07-24-22-47-19.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133237003564089405/PHOTO-2023-06-06-17-44-20.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133237270237945907/PHOTO-2023-06-06-17-44-21.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133087787747381318/PHOTO-2023-07-24-22-47-22.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133818704120000562/PXL_20230203_150142245.NIGHT.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133818701792165958/PXL_20230203_145352841.NIGHT.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133818703469887488/PXL_20230203_150045305.NIGHT1.jpg" alt=""/>
                </div>
                {/* <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133821585212571879/IMG_20230203_142042.jpg" alt=""/>
                </div> */}
            </div>
            <div className="h-8"></div>
            {/* <hr class="w-1/2 h-1 mx-auto my-8 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr> */}
            {/* <div className="mb-8 font-semibold text-white text-2xl text-center">Instrumentation</div>
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
            </div> */}
            <Footer />
        </div>
    );
}

export default Gallery;