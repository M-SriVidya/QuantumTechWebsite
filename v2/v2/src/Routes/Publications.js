import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PublicationCard from "../Components/PublicationCard";
import { publicationsData } from "../data"; // Assuming the publications data is imported from a data file

function Publications() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-around p-5 bg-[url('https://media.discordapp.net/attachments/1025099364584149094/1133843402098741484/image.png')] ">
        {publicationsData.map((publication, index) => (
          <PublicationCard
            key={index} // Use a unique key for each component in the loop
            title={publication.title}
            authors={publication.authors}
            journal={publication.journal}
            volume={publication.volume}
            pages={publication.pages}
            year={publication.year}
            impactFactor={publication.impactFactor}
            hIndex={publication.hIndex}
          />
        ))}
      </div>
      <Footer />  
    </div>
  );
}

export default Publications;
