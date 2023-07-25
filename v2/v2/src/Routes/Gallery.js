import Navbar from "../Components/Navbar";

function Gallery() {
    return (       
        <div className="bg-black">
            <Navbar/>
            <div className="m-8 font-semibold text-white text-2xl text-center">People</div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-12">
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
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133087715588591646/PHOTO-2023-07-24-18-09-06.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133087788259102730/PHOTO-2023-07-24-22-47-22.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133087789873893406/PHOTO-2023-07-24-22-47-19.jpg" alt=""/>
                </div>
            </div>
            <hr class="w-1/2 h-1 mx-auto my-8 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
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
        </div>
    );
}

export default Gallery;