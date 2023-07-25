import Navbar from "../Components/Navbar";

function About() {
    return (
        <div>
            <Navbar/>
            <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-10">
                <h1 class="text-4xl font-bold text-white mb-4">About Us</h1>
                <p class="text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus eget commodo aliquam, tortor odio viverra nibh, ac gravida nibh purus nec nulla. Quisque auctor lectus in nunc gravida, a sagittis lorem feugiat.</p>
                {/* <img src="about-image.jpg" alt="About Image" class="mt-6"/> */}
            </div>
        </div>
    );
}

export default About;