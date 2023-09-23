import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ResearchFacilities() {
    return (
        <div className="flex flex-col min-h-screen bg-[url('https://media.discordapp.net/attachments/1025099364584149094/1133843402098741484/image.png')]">
            <Navbar/>
            <div className="p-10 flex-auto">
                <h1 className="text-4xl font-bold text-blue-500">Research Facilities</h1>
            </div>
            <div className="ml-8 mb-8 flex-auto">
                <p className="text-xl text-white ml-6">The <b>QuaNaD Lab</b> is interdisciplinary research team is dedicated to technology using quantum principles. The realm of materials science and quantum physics has seen remarkable advancements in recent years. The lab delves into the fascinating world of electrical and optical properties, with a focus on quantum dots, quantum computing, conducting glasses, and the modeling and characterization of Advanced Energy materials. These areas of research hold immense promise and are poised to revolutionize various industries and represent the cutting edge of scientific and technological innovation.</p>
                <p className="text-xl text-center font-semibold text-white ml-6"><br/>External Funding: Grant Number - VGST - KFIST L2 - GRD 648 <br/> Rs. 40 Lakhs, Govt. of Karntaka <br/></p>
            </div>
            <div className="mx-10 my-4 font-bold text-blue-500 text-3xl">Instrumentation</div>
            <div className="flex m-6">
                <div>
                    <p className="text-2xl font-semibold text-blue-500 m-6">Thermo Scientific GENESYS 50 UV-vis spectrophotometers</p>
                    <p className="text-xl text-white ml-6">To analyze the absorption and emission of light by quantum materials. This analysis aids in understanding the electronic structure and optical properties of these materials, which is vital for designing advanced quantum devices with tailored functionalities.</p>
                    <p className="text-xl text-white ml-6"><br/>Specification for UV-Vis Spectrophotometer<br/>1) Optical Design Dual Beam – Internal Reference Detector.<br/>2) Spectral Bandwidth – 2.0 nm<br/>3) Light Source -- Xenon Flash Lamp (3 years warranty)<br/>4) Detector -- Dual Silicon Photodiodes<br/>Wavelength:<br/>5) Range -- 190 – 1100 nm<br/>6) Scanning Speed – up to 1600nm/min<br/>7) Accuracy -- ± 0.5 nm</p>
                </div>
                <img className="rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1132991336740565102/IMG_3044.jpg" alt="" height={300} width={400}/>
            </div>
            <div className="flex m-6">
                <img className="rounded-lg" src="https://cdn.discordapp.com/attachments/1025099364584149094/1133238411252224100/PHOTO-2023-05-21-09-51-48.jpg" alt="" height={700} width={375}/>
                <div className="ml-12">
                    <p className="text-2xl font-semibold text-blue-500 m-6">CH Instruments Inc., USA…. Chemical Workstation (CHI6008E)</p>
                    <p className="text-xl text-white ml-6">Allows us to study the electrochemical behavior of materials, providing valuable insights into their redox properties, stability, and potential applications in batteries or other energy-related fields.</p>
                    <p className="text-xl text-white ml-6"><br/>Test: <br/> Cyclic Voltammetry (CV) <br/> Linear Sweep Voltammetry Plots <br/> AC Impedance (IMP) – 10uHz to 1MHz <br/> Impedance – Time (IMPT) <br/> Impedance – Potential (IMPE) <br/> Open Circuit Potential – Time (OCPT) <br/> Chronopotentiometry (CP) <br/> Chronopotentiometry with Current Ramp (CPCR)</p>
                </div>
            </div>
            <div className="flex m-6">
                <div>
                    <p className="text-2xl font-semibold text-blue-500 m-6">Programmable Spin Coating System [Model No.: spinNXG-P1]</p>
                    <p className="text-xl text-white ml-6">This proficiency in spin coating techniques enables them to fabricate thin films and coatings of quantum materials with precise control over thickness and uniformity. This process is essential for creating high-quality quantum devices, which are crucial building blocks in the development of quantum technologies.</p>
                    <p className="text-xl text-white ml-6"><br/> Technical Specification: <br/> Programmable Model ideal for Scientific Research Works <br/> PTFE coated SS Working Chamber of 200 mm Diameter <br/> Programmable Speed Range of 100-10,000 R.P.M <br/> Programmable Acceleration Period of 1-250 Seconds <br/> Programmable Acceleration Range of 40-5,000 R.P.M/sec <br/> Programmable Controlling Duration Range of 1-9,999 sec/step <br/> Real-time Display of R.P.M vs. Time in 4 Line LCD Display <br/> 2 User Programs available <br/> N2 &amp; other Inert Gas Purging Port available</p>
                </div>
                <img className="rounded-lg mx-8" src="https://cdn.discordapp.com/attachments/1025099364584149094/1132885197759709244/PHOTO-2023-05-21-09-51-47.jpg" alt="" height={300} width={400}/>
            </div>
            <div className="flex m-6">
                <img className="rounded-lg mx-6" src="https://cdn.discordapp.com/attachments/1025099364584149094/1132885198304985099/PHOTO-2023-05-21-09-51-46.jpg" alt="" width={800}/>
                <div className="">
                    <p className="text-2xl font-semibold text-blue-500 m-6">Keysight E4990A impedance analyzer</p>
                    <p className="text-xl text-white ml-6">Allows us to measure and characterize the AC conductivity of devices accurately. This capability is crucial in assessing the performance of quantum materials and ensuring the devices; functionality aligns with their intended applications.</p>
                    <p className="text-xl text-white ml-6"><br/> Five upgradable frequency options; 20 Hz to 10MHz <br/> Basic impedance measurement accuracy of ±0.08% (±0.045%, typ) <br/> 25 mΩ to 40 MΩ wide impedance measurement range (10% measurement accuracy range) <br/> Measurement parameters: |Z|, |Y|, θ, R, X, G, B, L, C, D, Q, Complex Z, Complex Y, V ac , I ac , V dc , I dc <br/> Built-in DC bias range: 0 V to ±40 V, 0 A to ±100 mA <br/> Enhanced measurement speed option (option 001, for 10M/20M/30M/50M options only) <br/> 4-channel and 4-trace on 10.4-inch color LCD with touch screen</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ResearchFacilities;