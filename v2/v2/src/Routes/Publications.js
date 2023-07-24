import React from "react";
import Navbar from "../Components/Navbar";
import PublicationCard from "../Components/PublicationCard";
import { publicationsData } from "../data"; // Assuming the publications data is imported from a data file

function Publications() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-around p-5 bg-black">
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
    </div>
  );
}

export default Publications;
