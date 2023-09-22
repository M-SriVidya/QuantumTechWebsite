import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
    return (
        <div>
            <Navbar/>
            <div class="bg-[url('https://media.discordapp.net/attachments/1025099364584149094/1133843402098741484/image.png')] p-12">
                <h1 class="text-4xl font-bold text-blue-500 mb-4">About Us</h1>
                <p class="text-3xl font-semibold text-blue-500 mt-8 mb-6">Why QuaNaD?</p>
                <div className="flex">
                    <div>
                        <p class="text-xl text-white ml-6 mr-12"> Kaṇāda was an ancient Indian natural scientist and philosopher known for founding the Vaisheshika school of Indian philosophy, which is considered the earliest Indian physics. He made pioneering contributions by developing an atomistic approach to both physics and philosophy.</p>
                        <p class="text-xl text-white ml-6 mr-12">In his Sanskrit text, Vaiśeṣika Sūtra, he proposed the concept of the paramanu, an indestructible and indivisible particle of matter that cannot be further divided. Kaṇāda used invariance arguments to deduce properties of these atoms and suggested that they could exist in two states: absolute rest and a state of motion. His work has had a profound impact on ancient Indian philosophical discussions and laid the groundwork for understanding the fundamental nature of matter and reality.</p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Kanada.png/440px-Kanada.png" height={180} width={180} alt=""/>
                </div>
                <p class="text-3xl font-semibold text-blue-500 mt-8 mb-6">What is QuaNaD?</p>
                <p class="text-xl text-white ml-6 mb-2"> QuaNaD Lab: Quantum and Nano Devices Lab, PESU </p>
                <p class="text-xl text-white ml-6 mb-2"> QuaNaD Lab is an interdisciplinary research team dedicated to technology using quantum principles. The realm of materials science and quantum physics has seen remarkable advancements in recent years. This article delves into the fascinating world of electrical and optical properties, with a focus on quantum dots, quantum computing, conducting glasses, and the modeling and characterization of battery materials. These areas of research hold immense promise and are poised to revolutionize various industries and represent the cutting edge of scientific and technological innovation </p>
                <p class="text-xl text-white ml-6 mb-2"> Utilizing quantum simulation techniques and computational modeling, the team explores the behavior of materials at the quantum level to predict and optimize their performance in battery applications. Their research contributes to the development of next-generation batteries that have the potential to revolutionize industries such as renewable energy storage, electric vehicles, and portable electronics. </p>
                <p class="text-xl text-white ml-6 mb-2"> Expertise in handling various instruments, such as the Keysight impedance analyzer, allows them to measure and characterize the AC conductivity of devices accurately. This capability is crucial in assessing the performance of quantum materials and ensuring the devices; functionality aligns with their intended applications. </p>
                <p class="text-xl text-white ml-6 mb-2"> Furthermore, proficiency in spin coating techniques enables them to fabricate thin films and coatings of quantum materials with precise control over thickness and uniformity. This process is essential for creating high-quality quantum devices, which are crucial building blocks in the development of quantum technologies. </p>
                <p class="text-xl text-white ml-6 mb-2"> Additionally, the use of cyclic voltammetry allows us to study the electrochemical behavior of materials, providing valuable insights into their redox properties, stability, and potential applications in batteries or other energy-related fields. In our Fabrication Lab, the Quantum Technology Group leverages sophisticated equipment like UV-vis spectrophotometers to analyze the absorption and emission of light by quantum materials. This analysis aids in understanding the electronic structure and optical properties of these materials, which is vital for designing advanced quantum devices with tailored functionalities.</p>
                <p class="text-xl text-white ml-6 mb-2"> Overall, the combination of theoretical expertise and hands-on experimentation makes the Quantum Technology Group a powerhouse in the realm of quantum research. Our dedication to pushing the boundaries of quantum science and technology, along with their practical skills in fabricating and characterizing devices, positions them as a leading force in the ongoing quest for quantum advancements.</p>
                <p class="text-xl text-white ml-6 mb-4"> In conclusion, the Quantum Technology Group is indeed at the forefront of cutting-edge research in quantum science and technology, and we have a broad range of expertise that extends beyond theoretical work. We are actively involved in hands-on experimentation and testing of devices to advance their understanding of quantum materials and technologies.</p>
                <p class="text-xl text-white ml-6 mb-2"> <b>Team Lead</b>: Dr Gajanan V Honnavar, Department of S & H</p>
                <p class="text-xl text-white ml-6 mb-2"> <b>Associate</b>: Mr Shreyaus G, Mr Rajesh C, Department of ECE</p>
                <p class="text-xl text-white ml-6 mb-2"> <b>Research scholar</b>: Mr Omkar Sharma, full time, Department of S & H</p>
            </div>
            <Footer />
        </div>
    );
}

export default About;
